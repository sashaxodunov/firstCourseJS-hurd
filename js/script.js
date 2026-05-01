"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];
// const calcBtn = btns[0]; // "Рассчитать"
// const resetBtn = btns[1]; // "Сброс"
// const plusBtn = document.querySelector(".screen-btn"); // кнопка +
const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");
//

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    appData.addTitle();

    startBtn.addEventListener("click", appData.start);
    buttonPlus.addEventListener("click", appData.addScreenBlock);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    if (!appData.checkInputs()) {
      alert("Заполните все экраны корректно");
      return;
    }

    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    // appData.getServicePercentPrices();

    // appData.logger();
    console.log(appData);
    appData.showResult();
  },

  showResult: function () {
    total.value = appData.screenPrice;

    totalCount.value = appData.totalScreensCount;

    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;

    fullTotalCount.value = appData.fullPrice;

    totalCountRollback.value = appData.servicePercentPrice;
  },

  addScreens: function (screen, index) {
    screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      const count = +input.value;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * count,
        count: count,
      });
    });
    console.log(appData.screens);
  },

  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  init: function () {
    appData.addTitle();

    startBtn.addEventListener("click", appData.start);
    buttonPlus.addEventListener("click", appData.addScreenBlock);

    inputRange.addEventListener("input", appData.changeRollback);
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen);
  },

  changeRollback: function () {
    const value = inputRange.value;

    inputRangeValue.textContent = value; // обновляем span
    appData.rollback = +value; // сохраняем в объект (число!)
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
    let totalScreensCount = 0;

    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
      totalScreensCount += screen.count;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesNumber +
      appData.servicePricesPercent;

    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);

    appData.totalScreensCount = totalScreensCount;
  },

  checkInputs: function () {
    screens = document.querySelectorAll(".screen");

    let isValid = true;

    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      // если не выбран тип или не введено количество
      if (
        select.value === "" ||
        input.value.trim() === "" ||
        +input.value <= 0
      ) {
        isValid = false;
      }
    });

    return isValid;
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
};

appData.init();
