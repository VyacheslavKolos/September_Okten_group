// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// let arrP=[];
// for (let i = 0; i < 50; i++) {
//     let help=Math.round( Math.random() * 100);
//     if (help%2===0){
//     arrP[i]=help;}
//     else{
//         arrP[i]=help+1;
//     }
//     console.log(arrP[i]);
// }


//     b. заповнити його 50 непарними числами за допомоги циклу.
// let arrNP=[];
// for (let i = 0; i < 50; i++) {
//     let help=Math.round( Math.random() * 100);
//     if (help%2!==0){
//         arrNP[i]=help;}
//     else{
//         arrNP[i]=help+1;
//     }
//     console.log(arrNP[i]);
// }


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arrRand = [];
// for (let i = 0; i < 20; i++) {
//     arrRand[i] = Math.round(Math.random() * 100);
//     console.log(arrRand[i]);
// }


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arrRandDiap = [];
// for (let i = 0; i < 20; i++) {
//   let min=8;
//   let max=732;
//   arrRandDiap[i] = Math.round(Math.random() * (max-min))+min;
//     console.log(arrRandDiap[i]);
// }


// 2. Вивести за допомогою console.log кожен третій елемен
// let arrEveryThird = [];
// for (let i = 1; i <=15 ; i++) {
//     arrEveryThird[i] = Math.round(Math.random() * 100);
//     if (i % 3 === 0) {
//         console.log(arrEveryThird[i]);
//     }
// }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arrEveryThirdP = [];
// for (let i = 1; i <= 15; i++) {
//     arrEveryThirdP[i] = Math.round(Math.random() * 100);
//     if (i % 3 === 0 && arrEveryThirdP[i] % 2 === 0) {
//         console.log(arrEveryThirdP[i]);
//     }
// }
// console.log(arrEveryThirdP);


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arrEveryThirdPNew = [];
// let arrEveryThirdPNew1 = [];
// for (let i = 1; i <= 15; i++) {
//     arrEveryThirdPNew[i] = Math.round(Math.random() * 100);
//     if (i % 3 === 0 && arrEveryThirdPNew[i] % 2 === 0) {
//         console.log(arrEveryThirdPNew[i]);
//         arrEveryThirdPNew1.push(arrEveryThirdPNew[i])
//     }
// }
// console.log(arrEveryThirdPNew);
// console.log(arrEveryThirdPNew1);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr= [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i+1]%2===0){console.log(arr[i])}
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arrAvg=[100,250,50,168,120,345,188];
// let avg=0;
// let summ=0;
// for (const number of arrAvg) {
//   summ+=number;
// }
// avg=summ/arrAvg.length;
// console.log(summ);
// console.log(avg);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arrRandx5 = [];
// let arrRandx5New = [];
// for (let i = 0; i < 10; i++) {
//     arrRandx5[i] = Math.round(Math.random() * 10);
//     arrRandx5New[i]=arrRandx5[i]*5;
//     console.log(arrRandx5[i]);
// }
// console.log(arrRandx5New);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arrMix = ["sdsdds", true, 142, 'Hi', 65, -31];
// let arrMix1 = [];
// for (const arrMixElement of arrMix) {
// if ( typeof arrMixElement=== "number"){
//     arrMix1.push(arrMixElement)
// }
// }
// console.log(arrMix1);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//


//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
//
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.address = city;
//         }
//     }
// }
// console.log(usersWithId);


//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arrPZ=[100,250,50,168,120,345,188,21,-3,-10];
// for (let number of arrPZ) {
//     if (number%2===0){
//         console.log(number);
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arrCopy = [100, 250, 50, 168, 120, 345, 188, 21, -3, -10];
// let arrForCopy = [];
// let help = arrCopy[0];
// for (let i = 0; i < arrCopy.length; i++) {
//     help = arrCopy[i];
//     arrForCopy[i] = help;
// }
// console.log(arrForCopy);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arrLettersFor=[ 'a', 'b', 'c'];
// let word='';
// for (let i = 0; i < arrLettersFor.length; i++) {
// word+=arrLettersFor[i]
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arrLettersWhile=[ 'a', 'b', 'c'];
// let word1='';
// let i=0;
// while(i<arrLettersWhile.length){
//     word1+=arrLettersWhile[i];
//     i++;
// }
// console.log(word1);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arrforOF=[ 'a', 'b', 'c'];
// let word2="";
// for (const string of arrforOF) {
//     word2+=string;
// }
// console.log(word2);

