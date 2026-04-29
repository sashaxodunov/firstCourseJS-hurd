const books = document.querySelectorAll(".book");
const title = document.querySelectorAll("h2");
const adv = document.querySelectorAll(".adv");
books[0].before(books[1]);
books[2].before(books[4]);
books[2].before(books[3]);
books[2].before(books[5]);

document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

console.log(books);

title[2].innerHTML = "<a>Книга 3. this и Прототипы Объектов</a>";

adv[0].remove();

console.log(title);
console.log(adv);
