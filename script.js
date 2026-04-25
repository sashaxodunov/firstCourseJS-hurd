"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные",
    );

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работы?");
    } while (!isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

// Функция возвращает сумму всех дополнительных услуг
const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let price = 0;

    if (i === 0) {
      appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
    }
    do {
      price = prompt("Сколько это будет стоить?");
    } while (!isNumber(price));
    sum += +price;
  }
  return sum;
};

// Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг
const getFullPrice = function () {
  return +appData.screenPrice + appData.allServicePrices;
};

// Функция возвращает итоговую стоимость за вычетом процента отката.
const getServicePercentPrices = function () {
  return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
};

// Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой".
const getTitle = function () {
  appData.title = appData.title.trim();
  return appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase();
};

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price <= 30000) {
    return "Даем скидку 5%";
  } else if (price < 15000 && price > 0) {
    return "Скидка не предусмотрена";
  } else if (price <= 0) {
    return "что то пошло не так";
  }
};

appData.asking();
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice();
appData.servicePercentPrice = getServicePercentPrices();
appData.title = getTitle();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
