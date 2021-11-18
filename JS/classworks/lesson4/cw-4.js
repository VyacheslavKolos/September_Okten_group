// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a, b ,c) {
//     if (a<b && a<c){
//         console.log(a);
//     }
//     else if(b<a && b<c){
//         console.log(b);
//     }else {
//         console.log(c);
//     }
// }


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a, b ,c) {
//     if (a>b && a>c){
//         console.log(a);
//     }
//     else if(b>a && b>c){
//         console.log(b);
//     }else {
//         console.log(c);
//     }
// }


// - створити функцію яка повертає найбільше число з масиву
// function maxArr(arr) {
//     max=arr[0];
//     for (let arrElement of arr) {
//         if (arrElement>max){
//             max=arrElement;
//         }
//     }
//     return max
// }
// maxNumb=maxArr([2,3,-3,104,1,5])
// console.log(maxNumb);


// - створити функцію яка повертає найменьше число з масиву
// function minArr(arr) {
//     min=arr[0];
//     for (let arrElement of arr) {
//         if (arrElement<min){
//             min=arrElement;
//         }
//     }
//     return min
// }
// minNumb=minArr([2,3,-3,104,1,5])
// console.log(minNumb);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function summElements(arr) {
//     let summ=0;
//     for (const arrElement of arr) {
//         summ+=arrElement;
//     }
//     return summ;
// }
// let summArr=summElements([10,20,30]);
// console.log(summArr);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function avgElements(arr) {
//     let summ=0;
//     for (const arrElement of arr) {
//         summ+=arrElement;
//     }
//     return summ/arr.length;
// }
// let avgArr=avgElements([10,20,30]);
// console.log(avgArr);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function returnMinPrintMax() {
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
// let maxNumb=returnMinPrintMax(2,3,4)
// console.log(maxNumb);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function rand(arr,n) {
//     for (let i = 0; i < n; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//         console.log(arr[i]);
//     }
// }
// let arr1=[];
// rand(arr1,5);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
// function rand(arr,n,limit) {
//     for (let i = 0; i < n; i++) {
//         arr[i] = Math.random() * (limit - 0);
//         console.log(arr[i]);
//     }
// }
// let arr2=[];
// rand(arr2,5,40);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(arr) {
//     let reverseArr=[];
//     for (let i = arr.length - 1, ri=0; i >= 0; i--, ri++) {
//         reverseArr[i]= arr[ri];
//     }
//     return reverseArr;
// }
// let arr=reverse([1,2,3]);
// console.log(arr);

