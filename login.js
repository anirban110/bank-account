document.getElementById('btn-login').addEventListener('click', function () {
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);
    if (email === 'jahidc876@gmail.com' && password === 'jahid1234') {
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user');
    }
})