let num = 266219;

const digits = String(num).split("").map(Number); // Перевел в строку, разбил на символы, преобразовал в цифры
console.log(digits);

let result = 1;

for (let i = 0; i < digits.length; i++) {
  result *= digits[i];
}
console.log(result);

result = result ** 3;
console.log(result);

const firstTwo = String(result).slice(0, 2);
console.log(Number(firstTwo));
