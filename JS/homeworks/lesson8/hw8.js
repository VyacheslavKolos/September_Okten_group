// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let idContent=document.getElementById("content");
let textIdContent=idContent.innerText;
// console.log(textIdContent);


// -- отримує текст з блоку з id "rules"
let idRules=document.getElementById("rules");
let textIdRules=idRules.innerText;


// -- замініть текст параграфа з id 'content' на будь-який інший
idContent.innerText="Some Text"


// -- замініть текст параграфа з id 'rules' на будь-який інший
idRules.innerText="My own rules"


// -- змініть кожному елементу колір фону на червоний
let allElements= document.body.children;
for (const allElement of allElements) {
    allElement.style.backgroundColor="red"
}


// -- змініть кожному елементу колір тексту на синій
for (const elem of allElements) {
    elem.style.color="blue"
}


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let clasListRules=document.getElementById("rules")
let list=clasListRules.classList;
for (const listElement of list) {
    console.log(listElement);
}


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let redFcRules=document.getElementsByClassName("fc_rules");
for (const rule of redFcRules) {
    rule.style.color="red"
}