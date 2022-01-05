let urla = window.location.search;
let index = urla.indexOf("=");
let postId = +urla.slice(index + 1);
console.log(postId);

fetch('https://jsonplaceholder.typicode.com/posts/' + `${postId}`)
    .then(value => value.json())
    .then(post => {

        let wrapPostComments = document.createElement("div");
        wrapPostComments.classList.add("CommentsWrap");
        let postInfo = document.createElement("div");
        postInfo.classList.add("postWrap");
        postInfo.innerHTML = `<h4>user ID : ${post.userId} , id: ${post.id}</h4> <h5>${post.body}</h5> <h5>${post.title}</h5>`

        let comentId = post.userId;
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comments => {
                for (let comment of comments) {
                    if (comment.postId === comentId) {
                        let commentWrap = document.createElement("div");
                        commentWrap.classList.add("comment");
                        commentWrap.innerHTML = `
                        <h3>post ID: ${comment.postId}</h3>
                        <h4>ID: ${comment.id}</h4>
                        <h5>name: ${comment.name}</h5>
                        <h6>email: ${comment.email}</h6>
                        <p>${comment.body}</p>`;

                        wrapPostComments.appendChild(commentWrap);
                    }
                }
            });


        document.body.appendChild(postInfo);
        document.body.appendChild(wrapPostComments);
            // wrapPostComments.appendChild(postInfo);

    });