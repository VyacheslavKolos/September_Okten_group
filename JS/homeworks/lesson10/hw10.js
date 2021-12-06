// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div =document.createElement('div');
// div.style.height='200px';
// div.id='text';
// div.style.backgroundColor='coral'
// document.body.appendChild(div);
// let btn=document.createElement('button');
// document.body.appendChild(btn);
// btn.innerText='hide element'
// btn.onclick=function (){
//     div.style.display='none';
// };


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let buttn=document.createElement('button');
// buttn.innerText='Hide'
// document.body.appendChild(buttn)
// buttn.onclick=function (){
//     buttn.style.display='none';
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.createElement('form');
// form.action = '/someaction';
// form.id = 'form';
// document.body.appendChild(form);
// let inputAge = document.createElement('input');
// inputAge.type = 'number';
// form.appendChild(inputAge);
// let button = document.createElement('button');
// form.appendChild(button);
// button.innerText = 'Confirm';
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let age=inputAge.value;
//     if (age<18){
//         alert('Your age <18!');
//     }
// };


// - Создайте меню, которое раскрывается/сворачивается при клике
// let divka = document.createElement('div');
// document.body.appendChild(divka);
// let btnMenu = document.createElement('button');
// btnMenu.innerText = 'hide';
// divka.style.backgroundColor = 'coral';
// divka.appendChild(btnMenu);
// btnMenu.onclick = function () {
//     if (divka.clientHeight < 40) {
//         divka.style.height='200px';
//     }else{
//         divka.style.height='30px';
//     }
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [{title1: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title2: 'lorem2312313', body: 'lorem ipsum dolo sit ametiqweqeqwe123'}];
// for (const comment of comments) {
//     let ul = document.createElement("ul");
//     for (const divKey in comment) {
//         let li = document.createElement("li");
//         let btn = document.createElement('button');
//         let pWrapText = document.createElement("p");
//         btn.innerText = 'hide';
//         pWrapText.innerText = comment[divKey];
//
//         li.appendChild(pWrapText);
//         ul.appendChild(li);
//         li.appendChild(btn);
//         btn.onclick = function () {
//             if (pWrapText.style.display !== 'none') {
//                 pWrapText.style.display = 'none';
//             } else {
//                 pWrapText.style.display = 'block';
//             }
//         }
//     }
//     document.body.appendChild(ul);
// }


//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

let pText = document.createElement('p');
pText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus dolor non omnis optio quibusdam quos ratione saepe vel vero. Ad esse fuga laboriosam, maxime nesciunt repudiandae vero? Animi assumenda blanditiis doloremque eaque eos fuga harum hic ipsam, minus nam odit qui, similique, totam ut voluptate. Et minima nisi repellendus.'
document.body.appendChild(pText);

pText.addEventListener('click', function () {
    let str = getSelection().toString();
    console.log(str);
    let index;
    index = pText.innerText.indexOf(str)
    pText.innerHTML = pText.innerText.substring(0, index) + `<span style="font-weight: bold">${str}</span>` + pText.innerText.substring(index + str.length)


});

