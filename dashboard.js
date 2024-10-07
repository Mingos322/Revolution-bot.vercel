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

// Verificando se o usuário está autenticado
auth.onAuthStateChanged(user => {
  if (!user) {
    // Se o usuário não estiver logado, redirecione para a tela de login
    window.location.href = 'index.html';
  }
});



// Evento de clique no botão 1
document.getElementById('button1').addEventListener('click', () => {
  window.location.href = 'page1.html';
});
document.getElementById('button2').addEventListener('click', () => {
  window.location.href = 'page2.html';
});
document.getElementById('button3').addEventListener('click', () => {
  window.location.href = 'page3.html';
});
document.getElementById('button4').addEventListener('click', () => {
  window.location.href = 'page4.html';
});
document.getElementById('button5').addEventListener('click', () => {
  window.location.href = 'page5.html';
});
document.getElementById('button6').addEventListener('click', () => {
  window.location.href = 'page6.html';
});


document.getElementById('button1').addEventListener('click', () => {
  // Adiciona uma flag no sessionStorage indicando que a navegação foi a partir do dashboard
  sessionStorage.setItem('fromDashboard', 'true');
  window.location.href = 'page1.html';
});

// Adicionando evento de logout
document.getElementById('logout-btn').addEventListener('click', () => {
  auth.signOut().then(() => {
    window.location.href = 'index.html';
  });
});


// Verificando se o usuário está autenticado
auth.onAuthStateChanged(user => {
  if (!user) {
    // Se o usuário não estiver logado, redirecione para a tela de login
    window.location.href = 'index.html';
  }
});

// Evento de clique nos botões
document.querySelectorAll('.dashboard-button').forEach((button, index) => {
  button.addEventListener('click', () => {
    const pageNum = index + 1;
    sessionStorage.setItem('fromDashboard', 'true');
    window.location.href = `page${pageNum}.html`;
  });
});

// Adicionando evento de logout
document.getElementById('logout-btn').addEventListener('click', () => {
  auth.signOut().then(() => {
    window.location.href = 'index.html';
  });
});
