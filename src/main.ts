// Declaring Variables
const hamburgerImg = document.querySelector(
  ".hamburger-img"
) as HTMLImageElement;
// const navLink = document.querySelectorAll(
//   ".menu-link"
// ) as NodeListOf<HTMLAnchorElement>;

const hamburgerMenu = document.querySelector(
  ".hamburger-menu"
) as HTMLDivElement;

// const dropDownMenu = document.querySelector(".menu") as HTMLSpanElement;

hamburgerImg.addEventListener("click", () => {
  // Changing the hamburger icon & toggling active classes
  const img = hamburgerImg;

  // hamburgerMenu.classList.toggle("hidden");

  if (img.src.includes("icon-close.svg")) {
    img.src = "images/icon-hamburger.svg";
    // hamburgerMenu?.classList.add("hidden");
  } else {
    img.src = "images/icon-close.svg";
    hamburgerMenu?.classList.remove("hidden");
  }
});
