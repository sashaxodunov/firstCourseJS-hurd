// Функция склонения
function declension(number, forms) {
  const cases = [2, 0, 1, 1, 1, 2];
  return forms[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)]
  ];
}

// Добавление ведущего нуля
function addZero(num) {
  return num < 10 ? "0" + num : num;
}

// Названия дней недели
const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

// Названия месяцев
const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

// Основная функция обновления времени
function updateTime() {
  const now = new Date();

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Формат (а)
  const formatA =
    `Сегодня ${dayName}, ${day} ${month} ${year} года, ` +
    `${hours} ${declension(hours, ["час", "часа", "часов"])} ` +
    `${minutes} ${declension(minutes, ["минута", "минуты", "минут"])} ` +
    `${seconds} ${declension(seconds, ["секунда", "секунды", "секунд"])}`;

  // Формат (б)
  const formatB =
    `${addZero(day)}.${addZero(now.getMonth() + 1)}.${year} - ` +
    `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

  document.getElementById("formatA").textContent = formatA;
  document.getElementById("formatB").textContent = formatB;
}

// Обновление каждую секунду
setInterval(updateTime, 1000);

// Запуск сразу
updateTime();
