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
screenPrice = +prompt("Сколько будет стоить данная работы", "12000");
const answer = prompt("Нужен ли адаптив на сайте? (да / нет)");
if (answer && answer.toLowerCase() === "да") {
  adaptive = true;
} else if (answer && answer.toLowerCase() === "нет") {
  adaptive = false;
} else {
  alert("Ошибка: введите только 'да' или 'нет'");
}

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");

const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");

fullPrice = screenPrice + servicePrice1 + servicePrice2;
const middlemanPercent = 10;
let getServicePercentPrices = function () {
  return Math.ceil(fullPrice - (fullPrice * middlemanPercent) / 100);
};
let servicePercentPrice = getServicePercentPrices();
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

// Функция возвращает сумму всех дополнительных услуг
let allServicePrices = function getAllServicePrices() {
  return servicePrice1 + servicePrice2;
};
console.log(allServicePrices());

// Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг
function getFullPrice() {
  return (fullPrice = screenPrice + allServicePrices());
}
console.log(getFullPrice());

// Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой".
let getTitle = function () {
  title = title.trim();
  return title[0].toUpperCase() + title.slice(1).toLowerCase();
};
console.log(getTitle());
