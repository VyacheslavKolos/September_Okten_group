    // - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// const validName = (str, symb) => {
//     let NewArr = [];
//     if (str.includes(symb)) {
//         let split = str.split(symb)
//         split.forEach(item => {
//             if (item !== "") {
//                 NewArr.push(item);
//             }
//         })
//         console.log(NewArr.join(" "))
//     }
// }
// validName(n2, "-");


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// const randArr = (arr, n) => {
//     for (let i=0;i<n;i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
// let arr=[];
// console.log(randArr(arr,10));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// const randArr = (arr, n) => {
//     for (let i=0;i<n;i++) {
//         arr.push(Math.round(Math.random() * 100));
//         arr.sort((a, b) => a-b)
//     }
//     return arr;
// }
// let arr=[];
// console.log(randArr(arr,10));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// const randArr = (arr, n) => {
//     for (let i = 0; i < n; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr.filter(value => value % 2 === 0);
// }
// let arr = [];
// console.log(randArr(arr, 10));


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// const randArr = (arr, n) => {
//     for (let i = 0; i < n; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr.map(value => value.toString());
// }
// let arr = [];
// console.log(randArr(arr, 10));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// const sortNums = (arr, direction) => {
//     for (let i = 0; i < arr.length; i++) {
//
//         if (direction === "ascending") {
//             arr.sort((a, b) => a - b)
//         } else {
//             arr.sort((a, b) => b - a)
//         }
//     }
//     return arr;
// }
// let arr = [11,21,3];
// console.log(sortNums(arr,  "descending"));


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// let sorteD = coursesAndDurationArray.sort((u1, u2) => {
//     return u2.monthDuration-u1.monthDuration;
// })
// console.log(sorteD);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filtereD = coursesAndDurationArray.filter(value => value.monthDuration>5)
// console.log(filtereD);


