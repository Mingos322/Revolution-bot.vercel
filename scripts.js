// Configuração do Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDQbD2vHYwcYYecauydrBzBTc9WmZkzD7o",
  authDomain: "dark-bot-pro.firebaseapp.com",
  databaseURL: "https://dark-bot-pro-default-rtdb.firebaseio.com",
  projectId: "dark-bot-pro",
  storageBucket: "dark-bot-pro.appspot.com",
  messagingSenderId: "492516270850",
  appId: "1:492516270850:web:3adbe1322accd37b64981b",
  measurementId: "G-DVSWPN5919"
};

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);


// Referência à autenticação do Firebase
const auth = firebase.auth();

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Autenticando o usuário
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login bem-sucedido
      showNotification('Login bem-sucedido', 'success');
      // Redirecionando para o dashboard após login bem-sucedido
      window.location.href = 'page1.html';
    })
    .catch((error) => {
      // Erros no login
      const errorCode = error.code;
      const errorMessage = error.message;
      showNotification(`Erro: ${errorMessage}`, 'error');
    });
});

function showNotification(message, type) {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notification-message');
  notificationMessage.textContent = message;
  if (type === 'success') {
    notification.style.backgroundColor = '#28a745';
  } else if (type === 'error') {
    notification.style.backgroundColor = '#dc3545';
  }
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}
