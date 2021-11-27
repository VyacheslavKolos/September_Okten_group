// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// const cutString = (str, n) => {
// let helpArr=[];
// while(str.length){
//     let help=str.substring(0,n)
//     helpArr.push(help);
//    str=str.slice(n);
//
// }
// return helpArr}
// console.log(cutString('наслаждение', 3));
// //вирізати перших n букв => запушити їх в інший масив => видалити зі строки


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
// const postValidator = (str) => {
//     str = str.toLowerCase();
//     let includesSobachka = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].includes("@")) {
//             includesSobachka++;
//         }
//     }
//
//     if (includesSobachka === 1) {
//         let twoParts = str.split("@");
//         if (twoParts[0].length >= 2) {
//             let includesTochka = 0;
//             for (let i = 0; i < twoParts[1].length; i++) {
//                 if (twoParts[1][i].includes(".")) {
//                     includesTochka++;
//                 }
//             }
//             if (includesTochka === 1) {
//                 let secondPart = twoParts[1].split(".")
//                 if (secondPart[1].length >= 2) {
//                     console.log("з поштою все окей")
//                 } else {
//                     console.log("Щось не те! символів ПІСЛЯ .(крапки) має бути >2")
//                 }
//             } else {
//                 console.log("Щось не те! знаків . >1")
//             }
//         } else {
//             console.log("Щось не те! частинка перед знаком @ містить<2 символів")
//         }
//     } else console.log("Щось не те! @>1")
// }
// postValidator("sdsd@sdd.com")


// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ]
// // відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// console.log(coursesArray.sort((c1, c2) => c2.modules.length - c1.modules.length));


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// const count = (str, stringsearch) => {
//     let counter = 0;
//
//     // for (let i = 0; i < str.length; i++) {
//     //     if (str[i] === stringsearch) {
//     //         counter++
//     //     }
//     // }
//
//     /*_OR__OR__OR__OR__OR__OR__OR__OR__OR__OR__OR_*/
//
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt([i]) !== stringsearch) {
//             continue;
//         }
//         counter++
//     }
//     return counter;
// }
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// const cutString = (str, n) => str.split(" ").slice(0,n).join(" ");
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
