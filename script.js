const button = document.getElementById("btn");
const text = document.getElementById("text");
const square = document.getElementById("square");
const eBtn = document.getElementById("e_btn");

button.addEventListener("click", function () {
  const color = text.value;
  square.style.backgroundColor = color;
});

eBtn.style.display = "none";
console.log(eBtn);
console.dir(eBtn);
