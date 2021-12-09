let favor=JSON.parse(localStorage.getItem("favorite"));
console.log(favor);
for (const elem of favor) {
    let div=document.createElement("div");
    div.innerText=`${elem.name}, ${elem.age} years old, status: ${elem.status}`
    document.body.appendChild(div);
}