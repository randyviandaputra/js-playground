const button = document.getElementById('btn');
button.addEventListener('click', (event) => {
    const commentContent = document.getElementById('commentContent').value;
    const comments = document.getElementById('comments');
    comments.insertAdjacentHTML('beforeend', `<p class="comment">${commentContent}</p>`);
});

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((data) => {
        const users = document.getElementById('list-user');
        data.forEach((val, key) => {
            const html = `
                <h5>Nama : ${val.name}</h5>
                <h5>Email : ${val.email}</h5>
                <h5>Company : ${val.company.name}</h5>
                <p>Alamat : ${val.address.street}, ${val.address.city}</p>
            `;
            users.insertAdjacentHTML('beforeend', `<div class="card">${html}</div>`);
        })
    });