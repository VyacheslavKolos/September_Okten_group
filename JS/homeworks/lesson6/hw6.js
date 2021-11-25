// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let helloWorld='hello world'
// console.log(helloWorld.length);
// let loremIpsum='lorem ipsum';
// console.log(loremIpsum.length);
// let javascriptIsCool='javascript is cool';
// console.log(javascriptIsCool.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let toUpperhelloWorld='hello world';
// console.log(toUpperhelloWorld.toUpperCase());
// let toUpperloremIpsum='lorem ipsum';
// console.log(toUpperloremIpsum.toUpperCase());
// let toUpperjavascriptIsCool='javascript is cool';
// console.log(toUpperjavascriptIsCool.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let toLoverhelloWorld = 'HELLO WORLD';
// console.log(toLoverhelloWorld.toLowerCase());
// let toLoverloremIpsum = 'LOREM IPSUM';
// console.log(toLoverloremIpsum.toLowerCase());
// let toLoveravascriptIsCool = 'JAVASCRIPT IS COOL';
// console.log(toLoveravascriptIsCool.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// const stringToarray = (str) => str.split(" ");
// let splited=stringToarray(str);
// document.writeln(splited);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// // document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// const delete_characters = (str,length) => str.slice(0,length);
// sliced=delete_characters(str,7);
// console.log(sliced);


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// const insert_dash = str => str.replaceAll(" ","-");
// document.writeln(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = " sadasdaADAD"
// const firstToUpper = str => {
//     if (str[0] !== " ") {
//         return str[0].toUpperCase() + str.slice(1);
//     }else console.log("на першій позиції щось не те");
//     return str
// }
// console.log(firstToUpper(str));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capit="hello Im fine and you?";
// const capitalize = str => {
// return str.split(" ").map(value => value[0].toUpperCase() + value.slice(1)).join(" ");
// }
// console.log(capitalize(capit));



