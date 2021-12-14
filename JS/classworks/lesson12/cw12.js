// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        let wrapka = document.createElement('div');
        wrapka.classList.add('wrapka');
        for (const elem of value) {
            let divka = document.createElement("div");
            divka.classList.add('coment');
            divka.innerHTML = `
                        <h3>ID: ${elem.id}</h3>
                        <h4> ${elem.title}</h4>
                        <h5>Body: ${elem.body}</h5>
                        `;
            wrapka.appendChild(divka);
            let btn = document.createElement("button");
            divka.appendChild(btn);
            btn.innerHTML = "More info";
            btn.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/posts/' + elem.id + '/comments')
                    .then(response => response.json())
                    .then(elements => {

                        for (const element of elements) {

                            let commentDiv = document.createElement('div');
                            commentDiv.innerHTML = `
                        <h3>Comment : ${element.id}</h3>
                        <h4> ${element.name}</h4>
                         <h5> ${element.email}</h5>
                        <h6>Body: ${element.body}</h6>`;
                            divka.style.height = "auto";
                            divka.appendChild(commentDiv);
                            btn.style.display = "none";


                        }
                    });
            }
        }
        document.body.appendChild(wrapka);
    });