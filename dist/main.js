"use strict";
// Declaring Variables
const hamburgerImg = document.querySelector(".hamburger-img");
const dropDownMenu = document.querySelector(".dropdown-menu");
hamburgerImg.addEventListener("click", () => {
    // Changing the hamburger icon & toggling active classes
    const img = hamburgerImg;
    if (img.src.includes("icon-close.svg")) {
        img.src = "images/icon-hamburger.svg";
        dropDownMenu?.classList.add("hidden");
    }
    else {
        img.src = "images/icon-close.svg";
        dropDownMenu?.classList.remove("hidden");
    }
});
