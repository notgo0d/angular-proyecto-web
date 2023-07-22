const users = [
  { username: 'usuario1', password: 'contrasena1' },
  { username: 'usuario2', password: 'contrasena2' },
];

function loginUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verificar si los campos no están vacíos.
  if (!username || !password) {
    alert('Por favor, ingresa tu nombre de usuario y contraseña.');
    return false;
  }

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert('¡Inicio de sesión exitoso!');
  } else {
    alert('Credenciales incorrectas. Intenta nuevamente.');
  }

  return false;
}

function registerUser() {
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Verificar si los campos no están vacíos.
  if (!newUsername || !newPassword || !confirmPassword) {
    alert('Por favor, completa todos los campos del formulario.');
    return false;
  }

  const userExists = users.some(user => user.username === newUsername);

  if (userExists) {
    alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
    return false;
  }

  if (newPassword !== confirmPassword) {
    alert('Las contraseñas no coinciden. Intenta nuevamente.');
    return false;
  }

  users.push({ username: newUsername, password: newPassword });
  alert('¡Registro exitoso! Ahora puedes iniciar sesión con tu nuevo usuario.');

  return false;
}

// Agregar eventos de envío a los formularios.
document.getElementById('loginForm').addEventListener('submit', loginUser);
document.getElementById('registerForm').addEventListener('submit', registerUser);


const loginContainer = document.getElementById('loginContainer');
const registerContainer = document.getElementById('registerContainer');

function showRegisterForm() {
  loginContainer.style.display = 'none';
  registerContainer.style.display = 'block';
}

function showLoginForm() {
  registerContainer.style.display = 'none';
  loginContainer.style.display = 'block';
}

document.getElementById('loginForm').addEventListener('submit', loginUser);
document.getElementById('registerForm').addEventListener('submit', registerUser);
