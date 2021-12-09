// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let favoritesArr=[];

for (let i = 0; i < users.length; i++) {
    let wrap = document.createElement("div");
    let div = document.createElement('div')
    let button = document.createElement("button");
    button.style.marginBottom='15px';
    div.innerText = `${users[i].name}, ${users[i].age} years old, status: ${users[i].status}`
    button.innerText = "Add to favorites"

    button.onclick=function () {
        favoritesArr.push(users[i]);
            localStorage.setItem('favorite', JSON.stringify(favoritesArr))
    }
    document.body.appendChild(wrap);
    wrap.appendChild(div);
    wrap.appendChild(button);
}
let a=document.createElement("a");
document.body.appendChild(a);
a.href="http://localhost:63342/September_Okten_group/JS/homeworks/lesson11/favorites.html?_ijt=5s0k2buk5h2u855h4eom9pm0j2&_ij_reload";
a.innerText="your favorites";
