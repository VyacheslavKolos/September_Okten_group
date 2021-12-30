// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let btn=document.getElementById("btn");

btn.onclick=function (e) {
    e.preventDefault();
    let name=document.forms.form.name.value;
    let kilk=document.forms.form.kilk.value;
    let price=document.forms.form.price.value;
    let image=document.forms.form.image.value;

    let tovar={id:new Date(),name,kilk,price,image};
    let tovarList=JSON.parse(localStorage.getItem("list")) || [];
    tovarList.push(tovar);
    localStorage.setItem('list', JSON.stringify(tovarList));
}
