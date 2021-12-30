let tovars = JSON.parse(localStorage.getItem("list"));
let wrap = document.createElement("div");
wrap.classList.add("wrap");
for (const item of tovars) {
    let tovar = document.createElement("div");
    tovar.classList.add('tovar');
    tovar.innerHTML = `<h4>${item.name}, amount - ${item.kilk}, price : ${item.price}</h4> <img src=${item.image} alt="sd">`
    let deleteTovar = document.createElement("button");
    deleteTovar.innerText = "delete";
    deleteTovar.id="deleteTovar";

    deleteTovar.onclick=function (e) {
        e.preventDefault();
        let newTovars=tovars.filter(i => i.id !== item.id)
        console.log(newTovars);
        localStorage.setItem(JSON.stringify(newTovars));
    }


    wrap.appendChild(tovar);
    wrap.appendChild(deleteTovar);
}
document.body.appendChild(wrap);

let deleteBtn = document.getElementById("delete");
deleteBtn.onclick = function (e) {
    e.preventDefault();
    localStorage.clear();
    wrap.innerHTML = "";
}

// let deleteTovar=document.getElementById("deleteTovar");



// const deleteFunc = (arr) => {
//     for (const elem of arr) {
//         let date=new Date();
//         if (.getTime()){
//             console.log("true")
//         }else console.log("not")
//     }
// }
// deleteFunc(tovars);
