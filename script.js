let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;

title = "firstCourseJS";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 45467;
rollback = 45;
fullPrice = 64486846468;
adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость верстки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase());
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));
