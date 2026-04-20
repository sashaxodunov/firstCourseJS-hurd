let num = 266219;

const digits = String(num).split("").map(Number); // Перевел в строку, разбил на символы, преобразовал в цифры
console.log(digits);

let result = 1;

for (let i = 0; i < digits.length; i++) {
  result *= digits[i];
}
console.log(result);

result = result ** 3;
console.log(result);

const firstTwo = String(result).slice(0, 2);
console.log(Number(firstTwo));

/*
 * Урок 03.
 * Динамическая типизация данных в Javascript. Условия, ветвления.
 * Усложненное задание
 */

// Задание 1

let lang = "ru";

if (lang === "ru") {
  console.log(
    "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье",
  );
} else if (lang === "en") {
  console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

switch (lang) {
  case "ru":
    console.log(
      "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье",
    );
    break;
  case "en":
    console.log(
      "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
    );
    break;
}

let days = [
  [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
];

let index = lang === "en" ? 1 : 0;

console.log(days[index]);

// Задание 2

let namePerson = "Артем";

let status =
  namePerson === "Артем"
    ? console.log("Директор")
    : namePerson === "Александр"
      ? console.log("Преподаватель")
      : console.log("Студент");
