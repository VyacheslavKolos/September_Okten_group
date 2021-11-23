// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// const square = (a,b) => a*b;
// let squarE=square(3,4);
// console.log(squarE);


// - створити функцію яка обчислює та повертає площу кола
// let squareRound = (r) => Math.PI*r**2;
// squareRounD=squareRound(3);
// console.log(squareRounD);


// - створити функцію яка обчислює та повертає площу циліндру
// const squareCylinder = (r,h) => 2*Math.PI*r*(r+h);
// squareCylindeR=squareCylinder(2,3);
// console.log(squareCylindeR);


// - створити функцію яка приймає масив та виводить кожен його елемент
// const everyElement = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// let arR=[1,2,3,"Hello"];
// everyElement(arR);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// const text = (text) => {
//     document.write(`<p>${text}</p>`)
// }
// text("sdsdsdsd")


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const ulLi = (text) => {
//     document.write("<ul>")
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write("</ul>")
// }
// ulLi("hiiiii")


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const ulLi3 = (text, n) => {
//     document.write("<ul>")
//     for (let i = 0; i <n; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write("</ul>")
// }
// ulLi3("hiioioioiooioi",4);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const mix = (arr) => {
//     document.write("<ul>");
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write("</ul>");
// }
// mix([true,232,'Hello']);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const objectsArr = (arr) => {
//     for (const arrElement of arr) {
//         document.write("<div>");
//         document.write(`id - ${arrElement.name}, name- ${arrElement.age}, age- ${arrElement.profession} `);
//         document.write("</div>");
//     }
// }
// let objS=[{name:"Vasya", age:22, profession:"Programmer"},
//     {name:"Vova", age:18, profession:"Programmer"},
//     {name:"Sofia", age:32, profession:"Doctor"}]
// objectsArr(objS);