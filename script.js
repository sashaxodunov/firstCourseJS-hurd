const button = document.getElementById("btn");
const text = document.getElementById("text");
const square = document.getElementById("square");

button.addEventListener("click", function () {
  const color = text.value;
  square.style.backgroundColor = color;
});
