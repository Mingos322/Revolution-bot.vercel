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

// Verificando se o usuário está autenticado e se veio do dashboard
auth.onAuthStateChanged(user => {
  const fromDashboard = sessionStorage.getItem('fromDashboard');
  if (!user || !fromDashboard) {
    // Se o usuário não estiver logado ou não veio do dashboard, redirecione para a tela de login
    window.location.href = 'page1.html';
  } else {
    // Remova a flag de sessionStorage para garantir que precise passar pelo dashboard novamente
    sessionStorage.removeItem('fromDashboard');
    // Se o usuário estiver logado, inicializar as funcionalidades
    initializePage();
  }
});

// Função para inicializar a página
function initializePage() {
  hideFunctionsContainer();
  setupClock();
  setupLogoutButton();
  setupDragElement(document.querySelector(".floating-functions-container"));
  setupToggleFunctions();
  loadExternalSite();
  startCountdown();
  startRandomNumberGenerators();
}

// Função para esconder o contêiner de funcionalidades inicialmente
function hideFunctionsContainer() {
  const functionsContainer = document.getElementById('functions-container');
  functionsContainer.style.display = 'none';
  
  // Mostra o contêiner de funcionalidades após 30 segundos
  setTimeout(() => {
    functionsContainer.style.display = 'block';
  }, 30000);
}

// Função para atualizar a hora atual em tempo real
function setupClock() {
  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateClock, 1000);
  updateClock();
}

// Função para configurar o botão de logout
function setupLogoutButton() {
  document.getElementById('logout-btn').addEventListener('click', () => {
    auth.signOut().then(() => {
      window.location.href = 'bot.html';
    });
  });
}

// Função para permitir arrastar o contêiner flutuante
function setupDragElement(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Função para configurar a alternância de mostrar/ocultar funcionalidades
function setupToggleFunctions() {
  document.querySelector(".drag-header").addEventListener("click", function() {
    const container = document.querySelector(".floating-functions-container");
    if (container.classList.contains("occupied")) {
      container.classList.remove("occupied");
      container.querySelectorAll('.functions-subdivision').forEach(sub => {
        sub.style.display = 'none';
      });
    } else {
      container.classList.add("occupied");
      container.querySelectorAll('.functions-subdivision').forEach(sub => {
        sub.style.display = 'block';
      });
    }
  });
}

// Função para carregar a URL no iframe
function loadExternalSite() {
  const siteUrl = "https://record.elephantbet.com/_6hVkEw1ncrcWqcfzuvZcQGNd7ZgqdRLk/1/"; // Coloque a URL desejada aqui
  document.getElementById('external-site').src = siteUrl;
}

// Funcionalidade de contagem regressiva
function startCountdown() {
  const countdownElement = document.getElementById('countdown');
  let timeLeft = 4 * 60;

  function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      timeLeft = 4 * 60;
    }
  }

  setInterval(updateCountdown, 1000);
}

// Função para gerar tempo de atualização aleatório entre 50 e 90 segundos
function getRandomUpdateInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

// Funções para iniciar os geradores de números aleatórios
function startRandomNumberGenerators() {
  generateRandomNumber('random-number', 'update-info', 50, 90, 1.5, 2.3);
  generateRandomNumber('random-number-3', 'update-info-3', 50, 90, 3.0, 10.0);
  generateRandomNumber('random-number-4', 'update-info-4', 300, 600, 10.0, 100.0);
}

// Função genérica para geração de números aleatórios e atualização de elementos
function generateRandomNumber(numberId, infoId, minInterval, maxInterval, minValue, maxValue) {
  const numberElement = document.getElementById(numberId);
  const updateInfoElement = document.getElementById(infoId);

  function getRandomNumber() {
    const random = Math.random();
    return (minValue + random * (maxValue - minValue)).toFixed(2);
  }

  function updateNumber() {
    updateInfoElement.textContent = "Analizando...";
    numberElement.textContent = '';

    setTimeout(() => {
      numberElement.textContent = `${getRandomNumber()}x`;
      updateInfoElement.textContent = "Duas tentativas";
    }, 2000);

    const nextUpdateInterval = getRandomUpdateInterval(minInterval, maxInterval);
    setTimeout(updateNumber, nextUpdateInterval);
  }

  updateNumber();
}
