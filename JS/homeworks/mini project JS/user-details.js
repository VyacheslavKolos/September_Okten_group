let urla = window.location.search;
let index = urla.indexOf("=");
let postId = +urla.slice(index + 1);


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(Users => {
        let wrap = document.createElement("div");
        wrap.classList.add("wrap");

        for (const user of Users) {
            if (user.id === postId) {
                let div = document.createElement("div");
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
                buttonUser.innerText = "post of current user";
                div.appendChild(buttonUser);

                wrap.appendChild(div);

                buttonUser.onclick = function (e) {

                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(value => value.json())
                        .then(posts => {

                            let wrapPost = document.createElement('div');
                            wrapPost.classList.add("wrapPost");

                            for (const post of posts) {
                                if (post.userId === postId) {
                                    let divPost = document.createElement('div');
                                    divPost.classList.add("post");

                                    divPost.innerHTML = `
                        <h3>User ID: ${post.userId}</h3>
                        <h4>ID: ${post.id}</h4>
                        <h5>${post.title}</h5>
                        <h6> ${post.body}</h6>`;
                                    wrapPost.appendChild(divPost);
                                    let postBtn = document.createElement("button");
                                    postBtn.innerText = "Show comments";

                                    postBtn.onclick = function (e) {
                                        e.preventDefault();
                                        location.href = `post-details.html?Comment_Id=${post.id}`;
                                    }
                                    divPost.appendChild(postBtn);
                                }

                            }
                            wrap.appendChild(wrapPost);
                        });
                    buttonUser.disabled=true;
                }

            }
            document.body.appendChild(wrap);
        }
    });


