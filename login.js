document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform login (this is a placeholder, implement actual API call)
    if (username === 'user' && password === 'pass') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
});