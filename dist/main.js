"use strict";
// Declaring Variables
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerImg = document.querySelector(".hamburger-img");
hamburgerMenu.addEventListener("click", () => {
    // Changing the hamburger icon
    const img = hamburgerImg;
    if (img.src.includes("icon-close.svg")) {
        img.src = "images/icon-hamburger.svg";
    }
    else {
        img.src = "images/icon-close.svg";
    }
    // toggling active classes
});
