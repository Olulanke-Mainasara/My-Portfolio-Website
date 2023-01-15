/*---------------AOS API--------------*/

AOS.init();

/*---------------Changing the "about me" tabs--------------*/

let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
  tablinks.forEach(tablink => {
    tablink.classList.remove("active-link");
  });

  tabcontents.forEach(tabcontent => {
    tabcontent.classList.remove("active-content");
  });

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-content");
}

/*---------------Toggling the Nav-menu for mobile---------------*/

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-280px";
}

/*--------------Changing the animation flow for mobile--------------*/

let works = document.querySelectorAll(".work");
let abouttext = document.getElementById("about-text");

if (window.innerWidth <= 1000) {
  changeworkflow();
}

function changeworkflow() {
  works.forEach(work => {
    work.setAttribute("data-aos", "fade-right");
  });

  abouttext.setAttribute("data-aos", "fade-right");
}
