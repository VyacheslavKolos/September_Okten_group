// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// onclick = function (e) {
//     console.log(e.target.localName)
//     let clases=e.target.classList;
//     for (let clase of clases) {
//         console.log(clase);
//     }
//     let id=e.target.id
//     if(id!==""){
//         console.log(id)
//     }else {console.log("немає id")}
//     let width=e.target.offsetWidth;
//     let height=e.target.offsetHeight;
//     console.log(width,height)
// };



// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// onclick = function (e) {
//     let popUp = document.createElement("div");
//     popUp.style.background = "red";
//     popUp.style.width = "200px";
//     popUp.style.height = "auto";
//     popUp.style.position = "absolute";
//     popUp.style.top = `${e.offsetY}px`
//     popUp.style.left = `${e.offsetX}px`
//     popUp.style.display = "flex";
//     popUp.style.flexDirection="column";
//     popUp.style.justifyContent="center";
//     popUp.style.alignItems="center";
//     popUp.classList.add("popUp");
//     popUp.style.transitionDuration="920ms "
//     let name = document.createElement("p");
//     name.innerText = (e.target.localName);
//
//     let claseS = document.createElement("ul");
//     let clases = e.target.classList;
//     for (let clase of clases) {
//         let clas = document.createElement("li");
//         clas.innerText = (clase);
//         claseS.appendChild(clas);
//     }
//     let idBlock = document.createElement("h4");
//     let id = e.target.id
//     if (id !== "") {
//         idBlock.innerText = id;
//     } else {
//         idBlock.innerText = "немає id"
//     }
//
//     let widthHeight = document.createElement("div");
//     let width = e.target.offsetWidth;
//     let height = e.target.offsetHeight;
//     widthHeight.innerHTML = `<p>width-${width}</p> <p>height-${height}</p>`;
//
//     popUp.appendChild(name);
//     popUp.appendChild(claseS);
//     popUp.appendChild(idBlock);
//     popUp.appendChild(widthHeight);
//     document.body.appendChild(popUp);
// };




// -- взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// // - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
// let status = document.getElementsByName("status")[0];
// let age = document.getElementsByName("age")[0];
// let city = document.getElementsByName("city")[0];
//
// let form = document.forms.f1;
// let wrap = document.createElement("div");
// document.body.appendChild(wrap);
// form.onsubmit = function (e) {
//     e.preventDefault();
//     wrap.innerHTML = "";
//     if (status.checked && !age.checked && !city.checked) {
//         let arr = usersWithAddress.filter(value => !value.status);
//         for (const user of arr) {
//             let member = document.createElement("div");
//             member.innerHTML = `<h4>id - ${user.id}</h4> <p>name - ${user.name}, age - ${user.age}, status - ${user.status}</p>  <h5>adress: ${user.address.city}, ${user.address.street},${user.address.number}</h5> `
//             wrap.appendChild(member);
//         }
//     } else if (status.checked && age.checked && !city.checked) {
//         let arr = usersWithAddress.filter(value => !value.status && value.age >= 29);
//         for (const user of arr) {
//             let member = document.createElement("div");
//             member.innerHTML = `<h4>id - ${user.id}</h4> <p>name - ${user.name}, age - ${user.age}, status - ${user.status}</p>  <h5>adress: ${user.address.city}, ${user.address.street},${user.address.number}</h5> `
//             wrap.appendChild(member);
//         }
//     } else if (status.checked && age.checked && city.checked) {
//         let arr = usersWithAddress.filter(value => !value.status && value.age >= 29 && value.address.city === "Kyiv");
//         for (const user of arr) {
//             let member = document.createElement("div");
//             member.innerHTML = `<h4>id - ${user.id}</h4> <p>name - ${user.name}, age - ${user.age}, status - ${user.status}</p>  <h5>adress: ${user.address.city}, ${user.address.street},${user.address.number}</h5> `
//             wrap.appendChild(member);
//         }
//     } else if (status.checked && !age.checked && city.checked) {
//         let arr = usersWithAddress.filter(value => !value.status && value.address.city === "Kyiv");
//         for (const user of arr) {
//             let member = document.createElement("div");
//             member.innerHTML = `<h4>id - ${user.id}</h4> <p>name - ${user.name}, age - ${user.age}, status - ${user.status}</p>  <h5>adress: ${user.address.city}, ${user.address.street},${user.address.number}</h5> `
//             wrap.appendChild(member);
//         }
//     } else if (!status.checked && age.checked && !city.checked) {
//         let arr = usersWithAddress.filter(value => value.age >= 29);
//         for (const user of arr) {
//             let member = document.createElement("div");
//             member.innerHTML = `<h4>id - ${user.id}</h4> <p>name - ${user.name}, age - ${user.age}, status - ${user.status}</p>  <h5>adress: ${user.address.city}, ${user.address.street},${user.address.number}</h5> `
//             wrap.appendChild(member);
//         }
//     } else if (!status.checked && !age.checked && city.checked) {
//         let arr = usersWithAddress.filter(value => value.address.city === "Kyiv");
//         for (const user of arr) {
//             let member = document.createElement("div");
//             member.innerHTML = `<h4>id - ${user.id}</h4> <p>name - ${user.name}, age - ${user.age}, status - ${user.status}</p>  <h5>adress: ${user.address.city}, ${user.address.street},${user.address.number}</h5> `
//             wrap.appendChild(member);
//         }
//     } else if (!status.checked && age.checked && city.checked) {
//         let arr = usersWithAddress.filter(value => value.age >= 29 && value.address.city === "Kyiv");
//         for (const user of arr) {
//             let member = document.createElement("div");
//             member.innerHTML = `<h4>id - ${user.id}</h4> <p>name - ${user.name}, age - ${user.age}, status - ${user.status}</p>  <h5>adress: ${user.address.city}, ${user.address.street},${user.address.number}</h5> `
//             wrap.appendChild(member);
//         }
//     }
// }




// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// ____ВЖЕ РОБИВ В classwork10____


// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// let pText = document.createElement('p');
// pText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus dolor non omnis optio quibusdam quos ratione saepe vel vero. Ad esse fuga laboriosam, maxime nesciunt repudiandae vero? Animi assumenda blanditiis doloremque eaque eos fuga harum hic ipsam, minus nam odit qui, similique, totam ut voluptate. Et minima nisi repellendus.'
// document.body.appendChild(pText);
//
// pText.addEventListener('click', function () {
//     let str = getSelection().toString();
//     console.log(str);
//     let index;
//     index = pText.innerText.indexOf(str)
//     pText.innerHTML = pText.innerText.substring(0, index) + `<span style="font-weight: bold">${str}</span>` + pText.innerText.substring(index + str.length)
// });
