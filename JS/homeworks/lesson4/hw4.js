// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square (a, b){
//     return a*b
// }
// let squarE=square(5,4)
// console.log(squarE);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareRound(r){
//     return Math.PI*Math.pow(r,2)
// }
// let Round=squareRound(2)
// console.log(Round);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function squareCylinder(h,r) {
//     return 2*Math.PI*r*(h+r);
// }
// let cylinder=squareCylinder(2,3);
// console.log(cylinder);


// - створити функцію яка приймає масив та виводить кожен його елемент
// function logarr(arr) {
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// let arrLog=[2,3,4,5];
// logarr(arrLog);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(text) {
//     document.write(`<p>${text}</p>`)
// }
// paragraph(prompt('Введіть текст:'))


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ulLi(text) {
//     document.write('<ul>')
//     document.write('<li>text</li>')
//     document.write('<li>text</li>')
//     document.write('<li>text</li>')
//     document.write('</ul>')
// }
// ulLi(prompt('ВВедіть текст:'))


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ulLiTimes(text, times) {
//     document.write('<ul>')
//     for (let i = 0; i < times; i++) {
//         document.write('<li>text</li>')
//     }
//     document.write('</ul>')
// }
// ulLiTimes(prompt('ВВедіть текст:'),5)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function printMix(arr) {
//     document.write('<ul>')
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write('</ul>')
// }
// printMix([true,232,'Hello'])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function printObj(arr) {
//     for (let arrElement of arr) {
//         document.write("<div>");
//         document.write(`id - ${arrElement.id}, name- ${arrElement.name}, age- ${arrElement.age} `);
//         document.write("</div>");
//     }
// }
// printObj([
//     {id: 21, name: 'Vasya', age: 27},
//     {id: 31, name: 'Olya', age: 23}]);
