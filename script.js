/*
 * Урок 4
 * Функции, анонимные функции, callback - функции, чистые функции
 * Усложненное задание
 */

const checkingString = function (str) {
  if (typeof str === "string") {
    str = str.trim().slice(0, 30) + "...";
  } else {
    console.log("В качестве аргумента передана не строка");
    return "";
  }
  return str;
};

console.log(
  checkingString(
    "  Привет мир. Эта функция принимает 1 аргумент в качестве строки обрезает пробелы вначале и в конце и выводит только 30 символов заканчивая ...         ",
  ),
);
