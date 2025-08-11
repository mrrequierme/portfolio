const iconTrigger = document.querySelector("#iconTrigger");
const navIcon = document.querySelector("#navIcon");
const rightNav = document.querySelector(".right-nav");

iconTrigger.addEventListener("click", () => {
  if (navIcon.classList.contains("fa-bars")) {
    navIcon.classList.add("fa-xmark");
    navIcon.classList.remove("fa-bars");
    rightNav.classList.add("show");
    rightNav.classList.remove("hide");
  } else {
    navIcon.classList.remove("fa-xmark");
    navIcon.classList.add("fa-bars");
    rightNav.classList.remove("show");
    rightNav.classList.add("hide");
  }
});
