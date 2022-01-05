// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let wrap = document.createElement("div");
        wrap.classList.add("wrap");

        for (let user of users) {
            let userDiv = document.createElement("div");
            userDiv.classList.add("user");
            let id = document.createElement("h4");
            id.innerText = `id- ${user.id}`;

            let name = document.createElement("h5");
            name.innerText = `name: ${user.name}`

            let username = document.createElement("h5");
            username.innerText = `username: ${user.username}`

            let btn = document.createElement("button");
            btn.innerText = 'details';

            btn.onclick = function (e) {
                e.preventDefault();
                location.href = `user-details.html?Post_Id=${user.id}`;
            }

            userDiv.appendChild(id);
            userDiv.appendChild(name);
            userDiv.appendChild(username);
            userDiv.appendChild(btn);
            wrap.appendChild(userDiv);
        }

        document.body.appendChild(wrap);
    });
