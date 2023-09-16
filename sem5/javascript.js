// Задание 1:
//
// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.
//
// const object = {
//     1:"Понедельник",
//     2:"Вторник",
//     3:"Среда",
// };
//
// console.log(object[2]);

// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.
//
// const user = {
//     name: 'Oleg',
//     surname: 'Vinogradov',
//     age:45,
// };
//
// console.log(`Name: ${user.name}, surname: ${user.surname}, age: ${user.age}`);


// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.

// const user = {
//     name: 'Oleg',
//     surname: 'Vinogradov',
//     age:45,
// };
//
// user.secondName = prompt("Please enter your secondName:");
//
// console.log(`Name: ${user.name}, surname: ${user.surname}, secondName: ${user.secondName}, age: ${user.age}`);


// 4. Удалите свойство surname.
// //
// const user = {
//     name: 'Oleg',
//     surname: 'Vinogradov',
//     age:45,
// };
//
// delete user.surname;
//
// console.log(user);
//     Тайминг: 20 минут.
//
//
// Задание 2:
//
// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
//     `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
//         `[1, 2, 3, 4, 5, 6, 7]`

// const numberArray = [1, 2, 3, 4, 5, 6, 7];
// const arrayDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];


// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
//     а значениями - их номера.
// const days = {};
//
// for (let i = 0; i < numberArray.length; i++) {
//     days[arrayDays[i]] = numberArray[i];
// }
// console.log(days)

// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.
//
// const object = {x: 1, y: 2, z: 3}
//
// for (const objectKey in object) {
//     object[objectKey] = object[objectKey]**2;
// }
// console.log(object)

//
//     Тайминг: 25 минут.
//
// Задание 3:
//
// ```
// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// }
// ```
//
// Найдите сумму всех чисел, приведенного объекта.
//
//     Тайминг: 20 минут.

// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: {
//         column:5,
//     },
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
//     raw: 5,
// }
//
// function f(obj) {
//     let sum = 0;
//     for (const objKey in obj) {
//         if (typeof obj[objKey] === "number") {
//             sum += obj[objKey];
//         } else {
//             sum += f(obj[objKey]);
//         }
//     }
//     return sum;
// }
//
// console.log(f(obj));

//
// Задание 4:
//
// 1. Создайте объект riddle.

// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
//     В случае верного ответа, необходимо поздравить пользователя.
//     В случае, если пользователь ответил неверно, необходимо подсказать,
//     подсказок может быть несколько.
//     Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”.
//
// Тайминг: 25 минут.

//
// const riddle = {
//     question: "Text",
//     answer: "Answer",
//     hints: ['hint1', 'hint2', 'hint3'],
//     riddle: function f() {
//         let count = 0;
//         do {
//             const answer = prompt(`${this.question}`);
//             if (answer === this.answer) {
//                 alert("You win");
//                 return;
//             } else {
//                 alert(`${this.hints[count]}`);
//                 count++;
//             }
//         } while (count < this.hints.length);
//         alert("You loose");
//     }
// };
//
// riddle.riddle();

/*
Мы разрабатываем банкомат.
В банкомате купюры могут быть разного номинала, например - 50, 100,
500, 1000, 5000 руб.
Есть ограничение на количество каждой из купюр (объект limitsObj).
Нужно вернуть купюры и их количество, которыми можно выдать
запрашиваемую сумму, в виде строки указанного формата. Начинать с
самой крупной.
Если выдать запрашиваемую сумму не получается, выбросить ошибку.
// */
// const getMoney = function (sum, limits) {
//     let result = '';
//     for (const [value, valueLimit] of Object.entries(limits).reverse()) {
//         if (sum >= value) {
//             const tempLimit = Math.min(Math.floor(sum / value), valueLimit);
//             sum -= value * tempLimit;
//             result += `${tempLimit}x${value} `;
//         }
//     }
//     if (sum !== 0) {
//         throw new Error('Not enough bank notes.');
//     }
//     return result.trim();
// };
//
// const limitsObj = {
//     5000: 4,
//     1000: 5,
//     500: 2,
//     100: 7,
//     50: 100,
// };
// //
// console.log(getMoney(3600, limitsObj)); // 3x1000 1x500 1x100
// console.log(getMoney(6650, limitsObj)); // 1x5000 1x1000 1x500 1x100 1x50
// console.log(getMoney(22000, limitsObj)); // 4x5000 2x1000
// console.log(getMoney(100000, limitsObj)); // Uncaught Error: Not enough bank notes.



