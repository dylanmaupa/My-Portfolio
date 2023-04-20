const hire = document.getElementById("hire");
const hireMe = document.getElementById("hire-me");
const cancel = document.getElementById("cancel");

hire.onclick = function () {
  hireMe.style.right = 0;

  cancel.onclick = function () {
    hireMe.style.right = -150 + "%";
  };
};

