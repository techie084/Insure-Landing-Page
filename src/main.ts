// Declaring Variables
const hamburgerMenu = document.querySelector(
  ".hamburger-menu"
) as HTMLImageElement;

const hamburgerImg = document.querySelector(
  ".hamburger-img"
) as HTMLImageElement;

const dropDownMenu = document.querySelector(".dropdown-menu");

hamburgerMenu.addEventListener("click", () => {
  // Changing the hamburger icon
  const img = hamburgerImg;
  if (img.src.includes("icon-close.svg")) {
    img.src = "images/icon-hamburger.svg";
  } else {
    img.src = "images/icon-close.svg";
  }

  // toggling active classes
  // const dropdown = dropDownMenu;
  // if (dropdown?.classList.contains(".hidden")) {
  //   dropdown?.classList.add(".hidden");
  // } else {
  //   dropdown?.classList.remove(".hidden");
  // }
});
