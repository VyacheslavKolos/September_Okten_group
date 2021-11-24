// - Дано натуральное число n. Выведите все числа от 1 до n.
// const allNumb = (n) => {
//     // for (let i = n-1, h=0; i >= 0; i--, h++) {
//     //     console.log(n-h);
//     // }
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//
//     }
//
// }
// allNumb(6)


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// const AandB = (A,B) => {
//     if (A<B) {
//         for (A; A <= B; A++) {
//             console.log(A);
//         }
//     }
//    else {
//         for (A-1; A >= B; A--) {
//             console.log(A)
//         }
//     }
// }
// AandB(9,6)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// const replace = (arr, place) => {
//    if (place>=0 && place<arr.length-1){
//     let help=arr[place];
//     arr[place]=arr[place+1]
//     arr[place+1]=help;}
//    else alert("Ви ввели неправильний індекс!")
//     return arr;
// }
// let arR=[9,8,0,4];
// replace(arR,2)
// console.log(arR);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// const zerosEnd = (arr) => {
//     let newArr = [];
//     if (arr.length >= 2 && arr.length <= 100) {
//         let help = 0;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] !== 0) {
//                 newArr.push(arr[i])
//             } else help++;
//         }
//         for (let i = 0; i < help; i++) {
//             newArr.push(0);
//         }
//     } else alert("Довжина масиву повинна бути від 2 до 100!")
//     return newArr;
// }
// let ZerosInTheEnd = zerosEnd([1, 0, 6, 0, 3]);
// console.log(ZerosInTheEnd);

/*-----OR-OR-OR-OR-OR-OR-OR-OR-OR-OR--------*/
// const taskWith0es =(arr)=>{
//     let helpVar=0;
//     if (arr.length >= 2 && arr.length <= 100) {
//     for (let i=0; i<arr.length; i++) {
//         if(arr[i]===0){
//             helpVar++;
//             arr.splice(i,1);
//         }
//     }
//     for (let i = 0; i < helpVar; i++) {
//         arr.push(0)
//     }
//     } else alert("Довжина масиву повинна бути від 2 до 100!")
//     return arr;
// }
// let arrWith0es=[2,0,4,5,0,-23];
// let someTask=taskWith0es(arrWith0es);
// console.log(someTask);