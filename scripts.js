/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(89);
    }
}


//-----------

// Display a dynamic welcome message based on the time of day
function displayWelcomeMessage() {
    const greeting = document.createElement("h3");
    const now = new Date();
    const hours = now.getHours();
    let message = "Welcome!";

    if (hours >= 6 && hours < 12) {
        message = "Good Morning!";
    } else if (hours >= 12 && hours < 18) {
        message = "Good Afternoon!";
    } else if (hours >= 18 && hours < 24) {
        message = "Good Evening!";
    }

    greeting.textContent = message;
    greeting.style.textAlign = "center";
    greeting.style.marginTop = "20px";
    greeting.style.color = "#FFD700";
    document.body.prepend(greeting);
}

// Add hover animations to the navigation links
function addNavHoverEffects() {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.2)";
            link.style.transition = "transform 0.2s";
        });

        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });
}

// Animate headings on page load
function animateHeadings() {
    const headings = document.querySelectorAll("h1, h2");
    headings.forEach((heading, index) => {
        heading.style.opacity = "0";
        heading.style.transform = "translateY(-20px)";
        setTimeout(() => {
            heading.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            heading.style.opacity = "1";
            heading.style.transform = "translateY(0)";
        }, index * 200); // Staggered animation
    });
}

// Run all functions after the page has loaded
window.onload = function () {
    displayWelcomeMessage();
    addNavHoverEffects();
    animateHeadings();
};
