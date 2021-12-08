// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let btn=document.getElementById("btn");
// btn.onclick=function (){
//     let f11=+document.forms.f1.f11.value;
//     let f12=+document.forms.f1.f12.value;
//     let f21=+document.forms.f2.f21.value;
//     let f22=+document.forms.f2.f22.value;
//     console.log(`${f11}___${f12}___${f21}___${f22}`);
// }


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// let btnTable=document.getElementById('CreteTable');
// let form=document.forms['TableCreator'];
// let table=document.createElement("table");
//     form.onsubmit=function (e){
//         e.preventDefault();
//
//         let rows=form.i1.value;
//         let cols=form.i2.value;
//         for (let i = 0; i < rows; i++) {
//            let trKa= document.createElement("tr")
//             for (let j = 0; j < cols; j++) {
//                 let tdKa=document.createElement("td");
//                 tdKa.innerText=form.i3.value;
//                 trKa.appendChild(tdKa);
//             }
//         table.appendChild(trKa);
//         }
//
//     }
// document.body.appendChild(table);


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let arr=["Скинь модуль", "скинь лаби"];
// let inp=document.getElementById('inputBadWord');
// let buttonCheck=document.getElementById('badWord');
// buttonCheck.onclick=function (){
//     let text=inp.value;
//     for (const elem of arr) {
//         if (text.toLowerCase().includes(elem.toLowerCase())){
//             alert("Айяйяй!")
//         }
//     }
// }


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let btn_prev = document.querySelector('#gallery .buttons .prev');
// let btn_next = document.querySelector('#gallery .buttons .next');
// let images = document.querySelectorAll('#gallery .photos img');
// let i = 0;
//
// btn_prev.onclick = function(){
//     images[i].style.display = 'none';
//     i = i - 1;
//     if(i < 0){
//         i = images.length - 1;
//     }
//     images[i].style.display = 'block';
// }
//
// btn_next.onclick = function(){
//     images[i].style.display = 'none';
//     i = i + 1;
//     if(i > 3){
//         i = 0;
//     }
//     images[i].style.display = 'block';
// }
