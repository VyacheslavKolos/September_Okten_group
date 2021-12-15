// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
// class User {
//     constructor(id, name, username, email, adress, phone, website, company, street, suite, city, zipcode, geo, lat, lng, COname, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.geo = {lat: lat, lng: lng};
//         this.adress = {street: street, suite: suite, city: city, zipcode: zipcode, geo: geo};
//         this.company = {name: COname, catchPhrase: catchPhrase, bs: bs};
//         this.phone = phone;
//         this.website = website;
//     }
// }
//
// const user = new User(2, "Olya", "Olyaa", "Olya228@gmail.com", "Ostroh", "+097534314", "https/olya.com", "NLTU", "ostrozhka", "212a", "ostroh", '92998-3874', '-37.3159', '81.1496', '31231231', "qwerty", "I will find you", "harness real-time e-markets");
// console.log(user);



// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// class Teg{
//     constructor(titleOfTag, action,attrs ){
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs =attrs;
//     }
// }
// let tag1=new Teg("a","тег <a> устанавливает ссылку или якорь",[{coords:"Устанавливает координаты активной области"},{href:"Задает адрес документа, на который следует перейти."}]);
// console.log(tag1);
//
// let tag2=new Teg("div","Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.",[{align:"Задает выравнивание содержимого тега <div>",title:"Добавляет всплывающую подсказку к содержимому"}]);
// console.log(tag2);
//
// let tag3=new Teg("h1","тег <h1> представляет собой наиболее важный заголовок первого уровня",[{align:"Определяет выравнивание заголовка"}]);
// console.log(tag3);
//
// let tag4=new Teg("span","Тег <span> предназначен для определения строчных элементов документа",[{class:"Определяет имя класса, которое позволяет связать тег со стилевым оформлением."}]);
// console.log(tag4);
//
// let tag5=new Teg("input"," <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков",[{alt:"Альтернативный текст для кнопки с изображением.",border:"Толщина рамки вокруг изображения"},{disabled:"Блокирует доступ и изменение элемента."}]);
// console.log(tag5);
//
// let tag6=new Teg("option","Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.",[{disabled:"Заблокировать для доступа элемент списка.",label:"Указание метки пункта списка."}]);
// console.log(tag6);
//
// let tag7=new Teg("form","Тег <form> устанавливает форму на веб-странице",[{action:"Адрес программы или документа, который обрабатывает данные формы.",target:"Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат."}]);
// console.log(tag7);
//
// let tag8=new Teg("select","Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ",[{autofocus:"Устанавливает, что список получает фокус после загрузки страницы.",size:"Количество отображаемых строк списка."}]);
// console.log(tag8);

