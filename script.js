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
