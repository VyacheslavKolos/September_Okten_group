// // --створити масив з:
// //     - з 5 числових значень
// let numbArr=[1,2,-3,0,100];
// console.log(numbArr);
// // - з 5 стічкових значень
// let numbStr=['sdsd',"qwerty", 'HELLO','Pizza','21'];
// console.log(numbStr);
// // - з 5 значень стрічкового, числового та булевого типу
// let arr=[true,"qwerty", false,'Pizza',21];
// console.log(arr);
// // - та вивести його в консоль


// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArr=[];
// emptyArr[0]='Hi';
// emptyArr[1]=false;
// emptyArr[2]=30;
// emptyArr[3]=true;
// emptyArr[4]="laptop";
// emptyArr[5]='JS';
// console.log(emptyArr);


// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
// document.write(`<div><h1>number</h1></div>`)
// }


// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
// document.write(`<div><h1>number index:${i}</h1></div>`)
// }


// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let j=0;
// while(j<20){
//     document.write('<h1>Hello</h1>')
//     j++
// }


// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let g=0;
// while(g<20){
//     document.write(`<h1>Hello index:${g}</h1>`)
//     g++
// }


// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr1=[];
// for (let i = 0; i < 10; i++) {
//     arr1[i]=Math.floor(Math.random() * 10);
//     console.log(arr1[i]);
// }


// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr2=[];
// for (let i = 0; i < 10; i++) {
//     arr2[i]=`hello${i}`;
//     console.log(arr2[i]);
// }


// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr3=[true,"qwerty", false,'Pizza',21,-100,'hello',true,'mouse',10000];
// for (let i = 0; i < arr3.length; i++) {
//     console.log(arr3[i]);
// }


// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr4=[true,"qwerty", false,'Pizza',21,-100,'hello',true,'mouse',10000];
// for (let i = 0; i < arr4.length; i++) {
//     if (typeof arr4[i]==="boolean")
//     console.log(arr4[i]);
// }


// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr5=[true,"qwerty", false,'Pizza',21,-100,'hello',true,'mouse',10000];
// for (let i = 0; i <arr5.length; i++) {
//     if (typeof arr5[i]==="number")
//     console.log(arr5[i]);
// }


// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr6=[true,"qwerty", false,'Pizza',21,-100,'hello',true,'mouse',10000];
// for (let i = 0; i < arr6.length; i++) {
//     if (typeof arr6[i]==="string")
//         console.log(arr6[i]);
// }


// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let emptyArr1=[];
// emptyArr1[0]='Hi';
// emptyArr1[1]=false;
// emptyArr1[2]=30;
// emptyArr1[3]=true;
// emptyArr1[4]="laptop";
// emptyArr1[5]='JS';
// emptyArr1[6]=214;
// emptyArr1[7]=false;
// emptyArr1[8]="like";
// emptyArr1[9]=-100;
// for (let i = 0; i < emptyArr1.length; i++) {
//     console.log(emptyArr1[i]);
// }


// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(`Поточний номер кроку: ${i}`);
//     document.write(`<h1>Поточний номер кроку: ${i}</h1>`)
// }


// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`Поточний номер кроку: ${i}`);
//     document.write(`<h1>Поточний номер кроку: ${i}</h1>`)
// }


// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(`Поточний номер кроку: ${i}`);
//     document.write(`<h1>Поточний номер кроку: ${i}</h1>`)
// }


// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// /******Перший Варіант********/
// for (let i = 0; i < 100; i++) {
//     if (i%2===0){
//     console.log(`Поточний номер кроку: ${i}`);
//     document.write(`<h1>Поточний номер кроку: ${i}</h1>`)}
// }
// /******Другий Варіант********/
// for (let i = 0; i < 100; i=i+2) {
//         console.log(`Поточний номер кроку: ${i}`);
//         document.write(`<h1>Поточний номер кроку: ${i}</h1>`)
// }


// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i+=2) {
//         console.log(`Поточний номер кроку: ${i}`);
//     document.write(`<h1>Поточний номер кроку: ${i}</h1>`)
// }