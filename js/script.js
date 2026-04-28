"use strict";
const title = document.getElementsByTagName("h1")[0];
const btns = document.getElementsByClassName("handler_btn");
const calcBtn = btns[0]; // "Рассчитать"
const resetBtn = btns[1]; // "Сброс"
const plusBtn = document.querySelector(".screen-btn"); // кнопка +
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");
const inputTypeRange = document.querySelector('.rollback input[type="range"]');
const spanRangeValue = document.querySelector(".rollback .range-value");
const totalInput = Array.from(document.getElementsByClassName("total-input"));
let screens = document.querySelectorAll(".screen");
//

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();

    appData.logger();
  },
  isNumber: function (num) {
    return !isNaN(num) && num.trim() !== "";
  },
  isText: function (str) {
    return typeof str === "string" && str.trim() !== "" && isNaN(str);
  },
  asking: function () {
    do {
      appData.title = prompt(
        "Как называется ваш проект?",
        "Калькулятор верстки",
      );
    } while (!appData.isText(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;
      let price;

      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (!appData.isText(name));

      do {
        price = prompt("Сколько будет стоить данная работы?");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: +price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let price;

      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (!appData.isText(name));

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));

      const uniqueName = appData.getUniqueServiceName(name);
      appData.services[uniqueName] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  getUniqueServiceName: function (name) {
    let newName = name;
    let i = 1;

    while (appData.services.hasOwnProperty(newName)) {
      newName = `${name}_${i}`;
      i++;
    }

    return newName;
  },
  addPrices: function () {
    appData.screenPrice = appData.screens.reduce((sum, screen) => {
      return sum + +screen.price;
    }, 0);
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().slice(1).toLowerCase();
  },
  getRollbackMessage: function (price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price <= 30000) {
      return "Даем скидку 5%";
    } else if (price < 15000 && price > 0) {
      return "Скидка не предусмотрена";
    } else if (price <= 0) {
      return "что то пошло не так";
    }
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
};

appData.start();
