// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch(' https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
// let wrap=document.createElement('div');
// wrap.classList.add("wrap");
// wrap.style.display='grid';
//
//         for (const elem of value) {
//             let divPost = document.createElement('div');
//             for (const key in value) {
//                 let h2UserId = document.createElement("h2");
//                 h2UserId.innerText = `User ID : ${value[key].userId}`;
//                 divPost.appendChild(h2UserId);
//
//                 let h2Id = document.createElement("h2");
//                 h2Id.innerText = `id : ${value[key].id}`;
//                 divPost.appendChild(h2Id);
//
//                 let pTitle = document.createElement('p');
//                 pTitle.innerText = `title : ${value[key].title}`;
//                 divPost.appendChild(pTitle);
//
//                 let h5Body = document.createElement('h5');
//                 h5Body.innerText = `body : ${value[key].body}`;
//                 divPost.appendChild(h5Body);
//             }
//             wrap.appendChild(divPost);
//         }
//         document.body.appendChild(wrap);
//     });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value  => {
        let wrapka = document.createElement('div');
        wrapka.classList.add('wrapka');
        for (const elem of value) {
            let divka = document.createElement("div");
            divka.classList.add('coment');
            divka.innerHTML = `
                        <h3>ID: ${elem.id}</h3>
                        <h4>Name: ${elem.name}</h4>
                        <h5>Email: ${elem.email}</h5>
                        <h6>Body: ${elem.body}</h6>`;
            wrapka.appendChild(divka);
        }
        document.body.appendChild(wrapka);
    });
