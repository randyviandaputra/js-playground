const button = document.getElementById('btn');
button.addEventListener('click', () => {
    const commentContent = document.getElementById('commentContent').value;
    const comments = document.getElementById('comments');
    comments.insertAdjacentHTML('beforeend', `<p class="comment">${commentContent}</p>`);
});

async function getUser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
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
}

getUser();