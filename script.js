const books = document.querySelectorAll(".book");
books[0].before(books[1]);
books[2].before(books[4]);
books[2].before(books[3]);
books[2].before(books[5]);

document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

console.log(books);
