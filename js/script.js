let btn = document.getElementById("btn");
let txt = document.getElementById("txt");
let colorDrawer = document.querySelector("#changeClr");
let colorsBtn = document.querySelector(".ColorTab");

function changeColor(color) {
  document.body.style.background = color;
  btn.style.background = color;
  txt.style.borderColor = color;

  //mark as active when

  document.querySelectorAll("span").forEach(function (item) {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
}

colorsBtn.addEventListener("click", () => {
  colorDrawer.classList.toggle("active");
  colorsBtn.classList.toggle("active");
});
