// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let arr = [];
function recClases(start) {
    // console.log(start);
    if (start.classList.value !== "") {
        arr.push(start.classList.value);
    }
    if (start.children.length) {
        for (const element of start.children) {
            recClases(element);
        }
    }
}
recClases(document.body);
console.log(arr);