const books = document.querySelectorAll(".book");
const title = document.querySelectorAll("h2");
const adv = document.querySelectorAll(".adv");
const books3 = document.querySelectorAll(".chapter");
const book2 = books[0].querySelectorAll("li");
const book5 = books[5].querySelectorAll("li");
books[0].before(books[1]);
books[2].before(books[4]);
books[2].before(books[3]);
books[2].before(books[5]);

document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

// console.log(books);

title[4].innerHTML = "<a>Книга 3. this и Прототипы Объектов</a>";

adv[0].remove();

book2[3].after(book2[6]);
book2[6].after(book2[8]);
book2[5].after(book2[7]);
book2[7].after(book2[9]);
book2[9].after(book2[2]);

book5[1].after(book5[9]);
book5[4].after(book5[2]);
book5[7].after(book5[5]);

const book6 = books[2]; // индекс 2 — это 6-я книга

// находим список глав
const list = book6.querySelector("ul");

// создаём новую главу
const newChapter = document.createElement("li");
newChapter.textContent = "Глава 8: За пределами ES6";

// находим "Приложение A"
const appendix = Array.from(list.children).find((li) =>
  li.textContent.includes("Приложение A"),
);

// вставляем перед приложением
list.insertBefore(newChapter, appendix);

// console.log(book2);
// console.log(book5);

// console.log(title);
// console.log(adv);
// console.log(books3);
