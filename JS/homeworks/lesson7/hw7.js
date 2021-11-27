// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let userArr1=[];
// for (let i = 0; i < 10; i++) {
//     userArr1.push(new User(i+1,`"Vasya"${i+"sd"}`,"Kamenb","sadsadad@mail.com",+3123123123))
// }
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filtred=userArr1.filter(value => value.id%2===0)
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sorted=filtred.sort((a, b) =>a.id-b.id)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [{id: 1, name: 'Sofa', surname: 'Sonce', email: 'sofasonce0@gmail.com', phone: '+38095224120', order: ["kokos","banana"]},
    {id: 2, name: 'Sofa', surname: 'Sonce', email: 'sofasonce1@gmail.com', phone: '+38095224121', order: ["kokos","banana","apple","apple"]},
    {id: 3, name: 'Sofa', surname: 'Sonce', email: 'sofasonce2@gmail.com', phone: '+38095224122', order: ["kokos",]},
    {id: 4, name: 'Sofa', surname: 'Sonce', email: 'sofasonce3@gmail.com', phone: '+38095224123', order: ["kokos",]},
    {id: 5, name: 'Sofa', surname: 'Sonce', email: 'sofasonce4@gmail.com', phone: '+38095224124', order: ["kokos",]},
    {id: 6, name: 'Sofa', surname: 'Sonce', email: 'sofasonce5@gmail.com', phone: '+38095224125', order: ["kokos","banana"]},
    {id: 7, name: 'Sofa', surname: 'Sonce', email: 'sofasonce6@gmail.com', phone: '+38095224126', order: ["kokos",]},
    {id: 8, name: 'Sofa', surname: 'Sonce', email: 'sofasonce7@gmail.com', phone: '+38095224127', order: ["kokos","banana","apple"]},
    {id: 9, name: 'Sofa', surname: 'Sonce', email: 'sofasonce8@gmail.com', phone: '+38095224128', order: ["kokos",]},
    {id: 10, name: 'Sofa', surname: 'Sonce', email: 'sofasonce9@gmail.com', phone: '+38095224129', order: ["kokos",]}];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clientsSorted=clients.sort((a, b) => a.order.length-b.order.length)
console.log(clientsSorted);