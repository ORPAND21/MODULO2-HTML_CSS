

function login(){

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  if (username === 'admin' && password === '1234') {
    message.style.color = 'green';
    message.textContent = 'Inicio de sesión exitoso';

    setTimeout(() => {
        window.location.href = 'carrito/index.html'; // redirige a otra pagina
      }, 1000);

  } else {
    message.style.color = 'red';
    message.textContent = 'Usuario o contraseña incorrectos';
  }
};
