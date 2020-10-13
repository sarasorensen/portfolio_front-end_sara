//Menu for media queries
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

const offClick = () => {
  navbarLinks.classList.toggle("active");
  document.removeEventListener("click", offClick);
};

const handleClick = (event) => {
  event.stopPropagation();
  navbarLinks.classList.toggle("active");
  if (navbarLinks.classList.contains("active")) {
    document.addEventListener("click", offClick);
  }
};

toggleButton.addEventListener("click", handleClick);

//menu change color
var myNav = document.getElementById("navbar");
window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 80 ||
    document.documentElement.scrollTop >= 80
  ) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

let btn = document.getElementById("CTA");

btn.addEventListener("click", function () {
  window.open("mailto:sarasorensen97@hotmail.com");
});
//scroll to projects
let button = document.getElementById("CTA2");

button.addEventListener("click", function (e) {
  document
    .getElementById("projects-disp")
    .scrollIntoView({ block: "center", behavior: "smooth" });
  e.stopPropagation();
});

//open links in new tab
function NewTab(url) {
  var win = window.open(url, "_blank");

  win.focus();
}
