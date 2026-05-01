const button = document.getElementById("btn");
const text = document.getElementById("text");
const square = document.getElementById("square");
const eBtn = document.getElementById("e_btn");
const range = document.getElementById("range");
const circle = document.getElementById("circle");

button.addEventListener("click", function () {
  const color = text.value;
  square.style.backgroundColor = color;
});

eBtn.style.display = "none";

range.addEventListener("input", () => {
  const value = range.value;
  circle.style.width = value + "%";
  circle.style.height = value + "%";
});
