"use strict";

const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

week.forEach(function (item) {
  console.log(item);
});

const today = new Date().getDay();

const currentDayIndex = today === 0 ? 6 : today - 1;

for (let i = 0; i < week.length; i++) {
  const dayText = week[i];
  let style = "";

  // выходные (суббота и воскресенье)
  if (i === 5 || i === 6) {
    style += "font-style: italic;";
  }

  // текущий день
  if (i === currentDayIndex) {
    style += "font-weight: bold;";
  }

  if (style) {
    console.log(`%c${dayText}`, style);
  }
}
