document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (!email || !password) {
        errorMessage.textContent = "Both fields are required.";
        return;
    }
    errorMessage.textContent = "";
    fetch('/access/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, password: password })
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));
});
