var navIcon = document.querySelector(".main-nav__icon");
var navBar = document.querySelector(".main-nav__collapse");
var navToggle = document.querySelector(".main-nav__toggler");

if (navBar.classList.contains("show")) {
  navIcon.classList.remove("main-nav__icon--collapsed");
  navIcon.classList.add("main-nav__icon--opened");
}

navToggle.addEventListener("click", function() {
  if (navIcon.classList.contains("main-nav__icon--collapsed")) {
    navIcon.classList.remove("main-nav__icon--collapsed");
    navIcon.classList.add("main-nav__icon--opened");
  } else {
    navIcon.classList.add("main-nav__icon--collapsed");
    navIcon.classList.remove("main-nav__icon--opened");
  }
});

