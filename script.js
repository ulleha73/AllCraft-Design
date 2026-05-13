// Fade-in effekt ved load
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  logo.style.opacity = "0";
  setTimeout(() => {
    logo.style.transition = "opacity 2.5s ease-in-out";
    logo.style.opacity = "1";
  }, 300);
});

