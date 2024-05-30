document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    console.log('Register:', { name, email, password });

    alert('Registro bem-sucedido! Você pode fazer login agora.');
    window.location.href = 'login.html';
});

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log('Login:', { email, password });

    // Simulação de login bem-sucedido
    if (email === 'jhony@gmail.com' && password === '1265') {
        window.location.href = 'home.html'
        alert('Login bem-sucedido!');
        window.location.href = 'home.html';
    } else {
        alert('Email ou senha incorretos.');
    }
});