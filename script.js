const arr = ["4168464", "6488464", "14648648", "25463854566", "4358463854", "6541641", "254964684"];
// получаем новый массив со строками начинающимися с 2 или 4
const filter = arr.filter(s => s.startsWith("2") || s.startsWith("4"));

console.log(filter); // выводим новый массив

for (i = 1; i <= 100; i++) {
  if (i < 2) continue; // 1 не является простым
  let isPrime = true;

  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
     console.log(i + " Делители этого числа: 1 и " + i);
  }
}