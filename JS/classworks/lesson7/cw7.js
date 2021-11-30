// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, maker, year, maxSpeed, vEngine, driver) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.vEngine = vEngine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed}км на годину`)
    }
    this.info = function () {
        console.log(`Model-${model}, Maker-${maker}, Year-${year}, Max Speed-${maxSpeed}, V engine-${vEngine}, `)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed+=newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year=newValue;
    }
    this.addDriver = function (obj) {
        this.driver=obj;
    }
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Carr {
    constructor(model, maker, year, maxSpeed, vEngine, driver) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.vEngine = vEngine;
        this.driver = driver;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${maxSpeed}км на годину`)
    }
    info () {
        console.log(`Model-${model}, Maker-${maker}, Year-${year}, Max Speed-${maxSpeed}, V engine-${vEngine}, `)
    }
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed+=newSpeed;
    }
    changeYear (newValue) {
        this.year=newValue;
    }
    addDriver (obj) {
        this.driver=obj;
    }
}


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let popelbki=[];
for (let i = 0; i < 10; i++) {
    popelbki.push(new Popelushka(`Anka${i+1}`,18+i,34+i))
}
console.log(popelbki);

class Prince extends Popelushka{
    find(){
        console.log(popelbki.find(value => value.footSize === prince.footSize));
    }
}
let prince=new Prince("Max",18,37)
console.log(prince);
prince.find();



class Class {
    constructor(name, age, work) {
        this.name = name;
        this.age = age;
        this.work = work;
    }
}

