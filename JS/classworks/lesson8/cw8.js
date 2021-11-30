// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// // a) змінює клас тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let classlistIdMainHeader=document.getElementById("main_header")
// classlistIdMainHeader.classList.toggle("sep-2021");


// b) робить шириниу елементу ul 400px
// let wdthUl=document.getElementsByTagName("ul")
// wdthUl[0].style.width="400px";


// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let widthLinkList=document.getElementsByClassName("linkList");
// for (const elem of widthLinkList) {
//     elem.style.width="50%";
// }


// d) отримує текст який зберігається в елементі з класом listElement2
// let textListElement2=document.getElementsByClassName("listElement2");
// let textEl2=textListElement2[0].innerText;


// e) отримує всі елементи li та змінює ім колір фону на сірий
// let liColor=document.getElementsByTagName("li")
// for (const colEl of liColor) {
//     colEl.style.backgroundColor="gray"
// }


// f) отримує всі елементи 'a' та додає їм клас anchor
// let aClassAnchor=document.getElementsByTagName("a");
// console.log(aClassAnchor);
// for (let aClassAnchorElement of aClassAnchor) {
//     aClassAnchorElement.classList.add("anchor");
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aTextLink3=document.getElementsByTagName("a");
// for (const elem of aTextLink3) {
//     if (elem.innerText==="link3"){
//         elem.style.fontSize="40px";
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aXXX=document.getElementsByTagName("a");
// for (let elem of aXXX) {
// let className=elem.innerText;
//     elem.classList.add(`element_${className}`);
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeader=document.getElementsByClassName("sub-header");
// let color=prompt("color: ")
// for (let subHeaderElement of subHeader) {
//     subHeaderElement.style.backgroundColor=color;
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
// let subHeaderContent2=document.getElementsByClassName("sub-header");
// let color1=prompt("color: ")
// for (let subHeaderElement of subHeaderContent2) {
//     if (subHeaderElement.innerText==="content 2 segment") {
//         subHeaderElement.style.color = color1;
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let cont1=document.getElementsByClassName("content_1");
// for (const cont1Element of cont1) {
//     cont1Element.innerText=prompt("your text");
// }


// l) отримати елементи p та змінити їм padding на 20px
// let peshki=document.getElementsByTagName("p");
// for (const peshkiElement of peshki) {
//     peshkiElement.style.padding="20px";
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let text2=document.getElementsByClassName("text2");
// for (const text2Element of text2) {
//     text2Element.innerText="sep-2021";
// }