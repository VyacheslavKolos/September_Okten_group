// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// //     1. перебрати його циклом while
// let arrWhile=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arrWhile.length){
//     console.log(arrWhile[i])
//     i++
// }

// //     2. перебрати його циклом for
// let arrFor=[2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arrFor.length; i++) {
//     console.log(arrFor[i]);
// }


// //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arrWhileNP=[2,17,13,6,22,31,45,66,100,-18];
// let i=1;
// while (i<arrWhileNP.length){
//     console.log(arrWhileNP[i]);
//     i+=2;
// }


// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arrForNP=[2,17,13,6,22,31,45,66,100,-18];
// for (let i = 1; i < arrForNP.length; i+=2) {
//     console.log(arrForNP[i]);
// }


// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arrWhileP=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arrWhileP.length){
//     console.log(arrWhileP[i]);
//     i+=2;
// }


// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arrForP=[2,17,13,6,22,31,45,66,100,-18];
// for (let i =0; i < arrForP.length; i+=2) {
//     console.log(arrForP[i]);
// }


// // 7. замінити кожне число кратне 3 на слово "okten"
// let arr7 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr7.length; i++) {
//     if (arr7[i] % 3 === 0) {
//         arr7[i] = 'okten';
//     }
//     console.log(arr7[i]);
// }

// // 8. вивести масив в зворотньому порядку.
// let arrReverse=[2,17,13,6,22,31,45,66,100,-18];
// for (let i =  arrReverse.length; i>0; i--) {
//  console.log(arrReverse[i]);
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// //     1. перебрати його циклом while
// let arrWhileReverse=[2,17,13,6,22,31,45,66,100,-18];
// let i=arrWhileReverse.length-1;
// while (i>0){
//     console.log(arrWhileReverse[i]);
//     i--;
// }


// //     2. перебрати його циклом for
// let arrForReverse=[2,17,13,6,22,31,45,66,100,-18];
// for (let i =arrForReverse.length; i>=0; i--) {
//     console.log(arrForReverse[i]);
// }


// //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arrWhileNPReverse=[2,17,13,6,22,31,45,66,100,-18];
// let i=arrWhileNPReverse.length-1;
// while (i>=0){
//     console.log(arrWhileNPReverse[i]);
//     i-=2;
// }


// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arrForNPReverse=[2,17,13,6,22,31,45,66,100,-18];
// for (let i= arrForNPReverse.length-1; i >=0; i-=2) {
//     console.log(arrForNPReverse[i]);
// }


// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arrWhilePReverse=[2,17,13,6,22,31,45,66,100,-18];
// let i=arrWhilePReverse.length-2;
// while (i>=0){
//     console.log(arrWhilePReverse[i]);
//     i-=2;
// }


// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arrForPReverse=[2,17,13,6,22,31,45,66,100,-18];
// for (let i =arrForPReverse.length-2; i>=0; i-=2) {
//     console.log(arrForPReverse[i]);
// }


// // 7. замінити кожне число кратне 3 на слово "okten"
// let arr7Reverse = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i =arr7Reverse.length-1; i>=0; i--) {
//     if (arr7Reverse[i] % 3 === 0) {
//         arr7Reverse[i] = 'okten';
//     }
//     console.log(arr7Reverse[i]);
// }


// /*Використовуючи данні з масиву, за допомоги document.write та циклу
//     побудувати структуру по шаблону template1.1
//     */
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (let listOfItem of listOfItems) {
//     document.write('<ul>')
//     document.write(`<li>${listOfItem}</li>`)
//     document.write('</ul>')
//
// }


/* Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
//     Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
// Шаблон застосувати до кожного об'єкта в масиві
// */



// <!------------------template 2.1------------------->
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// for (let i = 0; i < simpsons.length; i++) {
//     document.write('<div>')
//     document.write(`NAME - ${simpsons[i]['name']} `)
//     document.write(`SURNAME - ${simpsons[i]['surname']} `)
//     document.write(`AGE - ${simpsons[i]['age']} `)
//     document.write(`<p>INFO - ${simpsons[i]['info']} </p>`)
//     document.write(`<img src="${simpsons[i]['photo']}" alt="sd"/>`)
//     document.write('</div>')
// }



// <!------------------template 2.2------------------->
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// for (let i = 0; i < simpsons.length; i++) {
//     document.write('<div>')
//     document.write(`<h2>${simpsons[i]['name']} ${simpsons[i]['surname']}. age is - ${simpsons[i]['age']} </h2>`)
//     document.write(`<p>${simpsons[i]['info']} </p>`)
//     document.write(`<img src="${simpsons[i]['photo']}" alt="sd"/>`)
//     document.write('</div>')
// }



// <!------------------template 2.3------------------->
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// document.write('<div>')
// for (let i = 0; i < simpsons.length; i++) {
//     document.write('<div>')
//     document.write(`<h2>${simpsons[i]['name']} ${simpsons[i]['surname']}. age is - ${simpsons[i]['age']} </h2>`)
//     document.write(`<p>${simpsons[i]['info']} </p>`)
//     document.write(`<img src="${simpsons[i]['photo']}" alt="sd"/>`)
//     document.write('</div>')
// }
// document.write('</div>')



// <!------------------template 3.1------------------->
//
// 			Використовуючи данні з масиву, за допомоги document.write та циклу
//             побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
//             Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write('<div>')
for (const product of products) {
    document.write('<div class="product-card">')
    document.write(`<h3 class="product-title">${product['title']}. Price - ${product['price']}</h3>`)
    document.write(`<img src="${product['image']}" alt="sd"/>`)
    document.write('</div>')
}
document.write('</div>')