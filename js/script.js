"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

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
  isCalculated: false,

  init: function () {
    this.addTitle();

    startBtn.addEventListener("click", () => this.start());
    buttonPlus.addEventListener("click", () => this.addScreenBlock());
    inputRange.addEventListener("input", () => this.changeRollback());
    resetBtn.addEventListener("click", () => this.reset());

    const cmsCheckbox = document.getElementById("cms-open");
    const cmsBlock = document.querySelector(".hidden-cms-variants");

    cmsCheckbox.addEventListener("change", function () {
      cmsBlock.style.display = this.checked ? "flex" : "none";
    });
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  start: function () {
    if (!this.checkInputs()) {
      alert("Заполните все экраны корректно");
      return;
    }

    this.addScreens();
    this.addServices();
    this.addPrices();
    this.isCalculated = true;

    console.log(this);
    this.showResult();

    // Блокируем все select и input[type=text]
    const allInputs = document.querySelectorAll(
      ".screen select, .screen input[type=text]",
    );

    allInputs.forEach((item) => {
      item.disabled = true;
    });

    // скрываем кнопку Рассчитать
    startBtn.style.display = "none";

    // показываем кнопку Сброс
    resetBtn.style.display = "block";
  },

  showResult: function () {
    total.value = this.screenPrice;
    totalCount.value = this.totalScreensCount;

    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;

    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      const selectName = select.options[select.selectedIndex].textContent;
      const count = +input.value;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * count,
        count: count,
      });
    });
  },

  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  changeRollback: function () {
    const value = inputRange.value;

    inputRangeValue.textContent = value;
    this.rollback = +value;

    if (this.isCalculated) {
      this.servicePercentPrice =
        this.fullPrice - this.fullPrice * (this.rollback / 100);

      totalCountRollback.value = this.servicePercentPrice;
    }
  },

  addPrices: function () {
    let totalScreensCount = 0;

    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
      totalScreensCount += screen.count;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =
      this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    this.servicePercentPrice =
      this.fullPrice - this.fullPrice * (this.rollback / 100);

    this.totalScreensCount = totalScreensCount;
  },

  checkInputs: function () {
    screens = document.querySelectorAll(".screen");

    let isValid = true;

    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

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

  reset: function () {
    // 1. Очистка данных объекта
    this.screens = [];
    this.screenPrice = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
    this.totalScreensCount = 0;
    this.isCalculated = false;

    // 2. Очистка инпутов и селектов
    const screens = document.querySelectorAll(".screen");

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      select.selectedIndex = 0;
      input.value = "";

      // разблокировка
      select.disabled = false;
      input.disabled = false;

      // удаляем все кроме первого блока
      if (index !== 0) {
        screen.remove();
      }
    });

    // 3. Очистка чекбоксов и полей услуг
    otherItemsPercent.forEach((item) => {
      item.querySelector("input[type=checkbox]").checked = false;
      item.querySelector("input[type=text]").value = "";
    });

    otherItemsNumber.forEach((item) => {
      item.querySelector("input[type=checkbox]").checked = false;
      item.querySelector("input[type=text]").value = "";
    });

    // 4. Сброс range
    this.rollback = 10;
    inputRange.value = 10;
    inputRangeValue.textContent = 10;

    // 5. Очистка результатов
    total.value = "";
    totalCount.value = "";
    totalCountOther.value = "";
    fullTotalCount.value = "";
    totalCountRollback.value = "";

    // 6. Возвращаем кнопки
    startBtn.style.display = "block";
    resetBtn.style.display = "none";
  },
};

appData.init();
