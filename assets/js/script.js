// const scrollreveal = require("scrollreveal");

const hire = document.getElementById("hire");
const cancel = document.getElementById("cancel");

navLink = document.querySelector(".nav-links");
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  nav = document.querySelector(".nav");
  nav.classList.toggle("navActive");
  console.log("clicked");
  navLink.onclick = function() {
    nav = document.querySelector(".nav");
    nav.classList.remove("navActive")
}
};

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader")

  loader.classList.add("loader-hidden")
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader")
  })
})

const hireMe = document.querySelector(".hire-me");
hire.onclick = function(){
  hireMe.style.left = 10 + "px";
  hireMe.style.right = 10 + "px";

  cancel.onclick = function(){
    hireMe.style.right = -200 + "%";
    hireMe.style.left = 200 + "%";
  }
}

ScrollReveal().reveal("#my-skills, #projects", slideUp, { reset: true });

ScrollReveal().reveal("#contact", {
  rotate: {
    x: 20,
    z: 20,
  },
  delay: 200,
  easing: "ease-out",
});
