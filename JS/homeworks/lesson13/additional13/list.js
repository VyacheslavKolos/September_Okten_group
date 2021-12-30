const renderList = () => {
    let tovars = JSON.parse(localStorage.getItem("list"));

    const container = document.getElementById('list');
    container.innerHTML = "";

    let wrap = document.createElement("div");
    wrap.id = "wrap";

    wrap.classList.add("wrap");

    for (const singleTovar of tovars) {
        const {id: currentTovarId, name, kilk, price, image} = singleTovar;

        let tovar = document.createElement("div");

        tovar.classList.add('tovar');
        tovar.innerHTML = `<h4>${name}, amount - ${kilk}, price : ${price}</h4> <img src=${image} alt="sd">`

        let deleteTovar = document.createElement("button");
        deleteTovar.innerText = "delete";
        deleteTovar.id = "deleteTovar";

        deleteTovar.onclick = function (e) {
            e.preventDefault();
            const clearArr = JSON.parse(localStorage.getItem('list')).filter(i => i.id !== currentTovarId)

            localStorage.setItem('list', JSON.stringify(clearArr))

            renderList();
        }

        wrap.appendChild(tovar);
        wrap.appendChild(deleteTovar);
    }

    container.appendChild(wrap);
}

let deleteBtn = document.getElementById("delete");
deleteBtn.onclick = function (e) {
    e.preventDefault();
    localStorage.clear();
    wrap.innerHTML = "";
}

renderList();