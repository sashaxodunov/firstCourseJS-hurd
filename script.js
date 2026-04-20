let title = "firstCourseJS";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 45467;
let rollback = 45;
let fullPrice = 64486846468;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость верстки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase());
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));

title = prompt("Как называется ваш проект?");
screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные",
);
screenPrice = prompt("Сколько будет стоить данная работы", "12000");
const answer = prompt("Нужен ли адаптив на сайте? (да / нет)");
if (answer && answer.toLowerCase() === "да") {
  adaptive = true;
} else if (answer && answer.toLowerCase() === "нет") {
  adaptive = false;
} else {
  alert("Ошибка: введите только 'да' или 'нет'");
}

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt("Сколько это будет стоить?");

const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt("Сколько это будет стоить?");

fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
const middlemanPercent = 10;
const servicePercentPrice = Math.ceil(
  fullPrice - (fullPrice * middlemanPercent) / 100,
);
console.log(servicePercentPrice);

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
  console.log("Даем скидку 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrise <= 0) {
  console.log("что то пошло не так");
}
