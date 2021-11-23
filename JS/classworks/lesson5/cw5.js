// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const minof3 = (a,b,c) => {
//     if (a<b && a<c){
//         console.log(a);
//     }
//     else if(b<a && b<c){
//         console.log(b);
//     }else {
//         console.log(c);
//     }
// }
// minof3(5,3,2)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const maxof3 = (a,b,c) => {
//         if (a>b && a>c){
//         console.log(a);
//     }
//     else if(b>a && b>c){
//         console.log(b);
//     }else {
//         console.log(c);
//     }
// }
// maxof3(6,2,3);


// - створити функцію яка повертає найбільше число з масиву
// const maxofArr = (arr) => {
//     let max=arr[0];
//     for (const numb of arr) {
//         if (numb>max){max=numb}
//     }
//     return max;
// }
// let arrMax=[2,3,4,1,5,10];
// console.log(maxofArr(arrMax));


// - створити функцію яка повертає найменьше число з масиву
// const minofArr = (arr) => {
//     let min=arr[0];
//     for (const numb of arr) {
//         if (numb<min){min=numb}
//     }
//     return min;
// }
// let arrMin=[2,3,4,1,5,10];
// console.log(minofArr(arrMin));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const summOfArr = (arr) => {
//     let sum=0;
//     for (const arrElement of arr) {
//         sum+=arrElement;
//     }
//     return sum;
// }
// let arrSum=[2,3,4];
// console.log(summOfArr(arrSum));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const avgOfArr = (arr) => {
//     let sum=0;
//     for (const arrElement of arr) {
//         sum+=arrElement;
//     }
//     return sum/arr.length;
// }
// let arrAvg=[2,3,4];
// console.log(avgOfArr(arrAvg));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// const retMinPrintMax = (...arguments) => {
//     min=arguments[0];
//     for (let arrElement of arguments) {
//         if (arrElement<min){
//             min=arrElement;
//         }
//     }
//     max=arguments[0];
//     for (let arrElement of arguments) {
//         if (arrElement>max){
//             max=arrElement;
//         }
//     }
//     console.log(max);
//     return min
// }
// let maxNumb=retMinPrintMax(2,3,4)
// console.log(maxNumb);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// const randArr = (arr,n) => {
//     for (let i = 0; i < n; i++) {
//         arr[i]= Math.round(Math.random()*100);
//     }
// }
// let randarR=[];
// randArr(randarR,5);
// console.log(randarR);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// const randDiap = (arr,n,lim) => {
//     for (let i = 0; i < n; i++) {
//         arr[i] = Math.random() * (lim - 0);
//         console.log(arr[i]);
//     }
// }
// let arrD=[];
// randDiap(arrD,4,10)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// const reverse = (arr) => {
//     let revArr=[];
//     for (let i = arr.length - 1 , ri=0; i >= 0; i--, ri++) {
//        revArr[i]=arr[ri];
//     }
//     return revArr;
// }
// let revesredArr=reverse([1,2,3]);
// console.log(revesredArr);