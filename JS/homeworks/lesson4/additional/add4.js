// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function someFunction() {
//     let res;
//     if (typeof arguments[0] === 'number' && typeof arguments[1] === "number") {
//         res = 0;
//     } else {
//         res = "";
//     }
//
//     if (arguments.length === 1) {
//         console.log(arguments[0]);
//     } else {
//         for (let argument of arguments) {
//             res += argument;
//         }
//     }
//     console.log(res);
// }
//
// someFunction(2, "Hi")


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// function concatArr(arr, arr1) {
//     let newArr = [];
//     let n = arr.length
//     if (arr.length<arr1.length){
//         n=arr1.length;
//         for (let i = 0; i <= arr1.length; i++) {
//             if (arr.length!==arr1.length){
//                 arr.push(0);
//             }
//         }
//     }
//     if (arr.length>arr1.length){
//         n=arr.length;
//         for (let i = 0; i <= arr.length; i++) {
//             if (arr1.length!==arr.length){
//                 arr1.push(0);
//             }
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         newArr[i] = arr[i] + arr1[i];
//     }
//     return newArr;
// }
//
// arr = [1, 2, 3, 4,4];
// arr1 = [2, 3, 4, 5,2,9,10];
// let resultConcatArr = concatArr(arr, arr1);
// console.log(resultConcatArr);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function returnKeys(arr) {
//     let arrKeys=[];
//     for (const arrElement of arr) {
//         for (const key in arrElement) {
//             arrKeys.push(key);
//         }
//     }
//     return arrKeys;
// }
// let arrObj= [{name: 'Dima', age: 13}, {model: 'Camry'}];
// resultReturnKeys=returnKeys(arrObj);
// console.log(resultReturnKeys);


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function returnValues(arr) {
//     let arrValues=[];
//     for (const arrElement of arr) {
//         for (const key in arrElement) {
//             arrValues.push(arrElement[key]);
//         }
//     }
//     return arrValues;
// }
// let arrObj= [{name: 'Dima', age: 13}, {model: 'Camry'}];
// resultReturnValues=returnValues(arrObj);
// console.log(resultReturnValues);