// Declaring Variables
const hamburgerImg = document.querySelector(
  ".hamburger-img"
) as HTMLImageElement;

const hamburgerMenu = document.querySelector(
  ".hamburger-menu"
) as HTMLDivElement;

const anchorLink = document.querySelectorAll(
  ".nav-links"
) as NodeListOf<HTMLAnchorElement>;

const menuLinks = document.querySelectorAll(
  ".menu-link"
) as NodeListOf<HTMLAnchorElement>;

// ---- Writing Functionality For Mobile Nav-Bar ---- //
hamburgerImg.addEventListener("click", () => {
  // Changing the hamburger icon & toggling active classes for mobile hamburger-menu
  const img = hamburgerImg;

  if (img.src.includes("icon-close.svg")) {
    img.src = "images/icon-hamburger.svg";
    hamburgerMenu?.classList.add("hidden");
  } else {
    img.src = "images/icon-close.svg";
    hamburgerMenu?.classList.remove("hidden");
  }
});

// ---- Desktop Nav Active class ---- //
// menuLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     if (link.classList.contains("active")) {
//       link.classList.add("active");
//     } else {
//       link.classList.remove("active");
//     }
//   });
// });

// ---- Mobile Nav Active class ---- //
anchorLink.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("active-mobile");
  });
  link.classList.remove("active-mobile");
});
