// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
// let time = +prompt('Введіть значення змінної time:');
// if (time>=0 && time <= 60) {
//     if (time <= 15) {
//         console.log('time потрапляє в 1 чверть години ')
//     } else if (time <= 30) {
//         console.log('time потрапляє в 2 чверть години ')
//     } else if (time <= 45) {
//         console.log('time потрапляє в 3 чверть години ')
//     } else {
//         console.log('time потрапляє в 4 чверть години ')
//     }
// } else {
//     console.log('time має бути <61!.Спробуйте ще раз')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day=+prompt('введіть день місяця:')
// if (day>0 && day<=31) {
//     if (day <= 10) {
//         console.log('Число потрапляє у першу декаду місяця')
//     } else if (day <= 20) {
//         console.log('Число потрапляє у другу декаду місяця')
//     } else {
//         console.log('Число потрапляє у третю декаду місяця(напевно, не впевнений як там з 31 днем))')
//     }
// }
// else{
//     console.log('У місяці максимум 31 день!. Спробуйте ще раз');
// }

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test=true;
// if(test){
//     console.log('Неправильно')
// }
// else{
//     console.log('Вірно')
// }
//
// let test1=false;
// if(test1){
//     console.log('Неправильно')
// }
// else{
//     console.log('Вірно')
// }
//
// let test2 = false !== true ? console.log('Вірно') : console.log('Неправильно');
// let tes3 = true !== true ? console.log('Вірно') : console.log('Неправильно');

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a=1;
// if(a!==0){
//     console.log('Вірно')}
// else{
//     console.log('Невірно')}
//
// let a1=0;
// if(a1!==0){
//     console.log('Вірно')}
// else{
//     console.log('Невірно')}
//
// let a2=-3;
// if(a2!==0){
//     console.log('Вірно')}
// else{
//     console.log('Невірно')}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let daY = +prompt('Ведіть номер дня:')
// switch (daY) {
//     case 1:
//         console.log('Понеділок! Лекції в універі -> зал -> лекція Okten :)')
//         break;
//     case 2:
//             console.log('Вівторок! Пари в універі -> classwork Okten -> лекція Okten :)')
//         break;
//     case 3:
//             console.log('Середа! Лекції/пари в універі -> зал -> лекція Okten :)')
//         break;
//     case 4:
//             console.log('Четвер! Пари в універі -> classwork okten -> лекція Okten :)')
//         break;
//     case 5:
//             console.log(`П'ятниця! Лекції в універі -> зал -> лекція Okten :)`)
//         break;
//     case 6:
//             console.log('Субота! homework/classwork okten -> лаболаторні роботи універу -> chillовий суботній вечір :)')
//         break;
//     case 7:
//             console.log('Неділя! Лаболаторні роботи універу -> chill -> preview Okten :)')
//         break;
//     default:
//         console.log('Ви ввели невірно день тижня! Введіть число від 1 до 7!')
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = +prompt('Введіть кількість днів Лютого місяця(28 або 29)')
// if (year >= 28 && year <= 29) {
//     if (year % 4 === 0) {
//         console.log('Звичайний рік')
//     } else {
//         console.log('Високосний рік')
//     }
// }
// else{
//     console.log('Ви ввели некоректні дані!Спробуйте ще раз');
// }
// /*-----OR-----*/
// let year1 = +prompt('Введіть кількість днів Лютого місяця(28 або 29)') % 4 === 0 ? console.log('Звичайний рік') : console.log('Високосний рік');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let result = prompt('„Яка «офіційна» назва JavaScript?“');
// if (result === 'ECMAScript' || result === 'ecmascript') {
//     alert('«Правильно!»')
// } else {
//     alert('Не знаєте? ECMAScript!')
// }