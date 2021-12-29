// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(Users => {
        console.log(Users);
        let wrap = document.createElement("div");
        wrap.classList.add("wrap");

        for (const user of Users) {
            let div = document.createElement("div");
            div.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
            div.classList.add("user");

            let id = document.createElement("h4");
            id.innerText = `USER id- ${user.id}`;

            let name = document.createElement("h4");
            name.innerText = `name-${user.name} `;

            let username = document.createElement("h4");
            username.innerText = `username- ${user.username}`;

            let email = document.createElement("h4");
            email.innerText = `email- ${user.email}`;

            div.appendChild(id);
            div.appendChild(name);
            div.appendChild(username);
            div.appendChild(email);
            let phone = document.createElement("h4");
            phone.innerText = `phone-${user.phone} `;
            div.appendChild(phone);

            let website = document.createElement("h4");
            website.innerHTML = ` <a href="${user.website}">website</a>`;
            div.appendChild(website);

            let buttonUser = document.createElement("button");
            buttonUser.innerText = "show posts";
            div.appendChild(buttonUser);

            wrap.appendChild(div);

            buttonUser.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(value => value.json())
                    .then(posts => {
                        let wrapka = document.createElement('div');
                        wrapka.classList.add('wrapka');
                        for (const elem of posts) {
                            let divka = document.createElement("div");
                            divka.classList.add('coment');
                            divka.innerHTML = `
                        <h3>POST ID: ${elem.id}</h3>
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
                                            commentDiv.classList.add("comentz")
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
                        div.appendChild(wrapka)
                    });
                buttonUser.style.display = "none";
            }
        }
        document.body.appendChild(wrap);
    });


