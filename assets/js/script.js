// const scrollreveal = require("scrollreveal");

const hire = document.getElementById("hire");
const hireMe = document.getElementById("hire-me");
const cancel = document.getElementById("cancel");

hire.onclick = function () {
  hireMe.style.right = 0;

  cancel.onclick = function () {
    hireMe.style.right = -200 + "%";
  };
};

var slideUp = {
    distance: '400%',
    origin: 'left',
    opacity: null
};

window.matchMedia("")

ScrollReveal().reveal("#my-skills, #projects", slideUp, {reset:true});

ScrollReveal().reveal("#contact",{
    rotate: {
        x: 20,
        z: 20
    },
    delay: 200, easing: "ease-out"
});