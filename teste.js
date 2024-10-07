
const randomTimeSquare = document.getElementById("randomTime");
const generateInfoBtn = document.getElementById("generateInfoBtn");
const randomInfoDisplay = document.getElementById("randomInfo");
const backBtn = document.getElementById("backBtn");
const iframe = document.querySelector("iframe");

// Atualiza o URL do site dentro do iframe quando a navegação ocorre
iframe.addEventListener("load", () => {
  document.getElementById("siteUrl").textContent = iframe.contentWindow.location.href;
});

backBtn.addEventListener("click", () => {
  window.history.back();
});
// Função para gerar informações aleatórias
function generateRandomInfo() {
  const randomInfoArray = [
    '2X', '7X', '3X', '2X','3X ', '2X', '2X','3X ', 'Rosa','3X ', 'Rosa', '2X', '4X', '5X', '4X', '5X', '3X','3X ', '5X','6X', '7X', '5X', '8X', '5X', '2X', '5X', 'Rosa', 'Rosa', 'Rosa',
    '3X', '2X', '2X', '6X','2X', '5X', 'Rosa','3X ', '2X', '3X','3X ', 'Rosa', '2X','3X ', '2X','3X ', '2X','3X ', '2X','3X ', '2X','3X ', '2X','3X ', '3X', '2X','3X ', '2X','3X ', '2X','3X ', '2X','Rosa', '2X','3X ', '2X', '1.50X',
  ];
  const randomIndex = Math.floor(Math.random() * randomInfoArray.length);
  return randomInfoArray[randomIndex];
}

// Atualiza o horário atual
function updateCurrentTime() {
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById("currentTime").textContent = currentTime;
}
const randomTimeDisplay = document.getElementById("randomTime");
randomTimeDisplay.textContent = randomTime;


// Atualiza informações aleatórias
function updateRandomInfo() {
  const randomInfo = generateRandomInfo();
  document.getElementById("randomInfo").textContent = randomInfo;
}

// Função para gerar um horário aleatório com um intervalo de 2 minutos
function generateRandomTime() {
  const currentTime = new Date();
  const randomSeconds = Math.floor(Math.random() * 30); // Número entre 0 e 29
  currentTime.setSeconds(currentTime.getSeconds() + randomSeconds);
  return `${currentTime.toLocaleTimeString()}`;
}

// Atualiza o horário aleatório e as informações a cada 2 minutos
function updateRandomTimeAndInfo() {
  const randomTime = generateRandomTime();
  const randomInfo = generateRandomInfo();

  document.getElementById("randomTime").textContent = randomTime;
  document.getElementById("randomInfo").textContent = randomInfo;
}

// Atualiza o tempo a cada segundo
setInterval(updateCurrentTime, 1000);

// Atualiza as informações aleatórias a cada 5 segundos
setInterval(updateRandomInfo, 60000);

// Atualiza o horário aleatório e as informações a cada 2 minutos
setInterval(updateRandomTimeAndInfo, 60000); // 2 minutos em milissegundos

const overlay = document.getElementById("overlay");
const verifyButton = document.getElementById("verifyButton");

verifyButton.addEventListener("click", () => {
  const verificationCode = document.getElementById("verificationCode").value;
  
  // Verificar se o código inserido é válido (coloque sua lógica de verificação aqui)
  if (verificationCode === "12121212") {
    // Código de verificação correto, remova a sobreposição
    overlay.style.display = "none";
  } else {
    // Código de verificação incorreto, você pode exibir uma mensagem de erro aqui
    alert("Voucher incorreto. Tente novamente.");
  }
});
// ...
function updateProgressBar() {
  const progressBar = document.getElementById("progressBar");
  const percentageLabel = document.getElementById("percentageLabel");

  // Gere uma porcentagem aleatória entre 30 e 80
  const randomPercentage = Math.floor(Math.random() * (100 - 30 + 1)) + 30;

  // Atualize a largura da barra de progresso
  progressBar.style.width = `${randomPercentage}%`;

  // Atualize o rótulo de porcentagem
  percentageLabel.textContent = `${randomPercentage}%`;

  // Agende a próxima atualização após 30 minutos (1800000 milissegundos)
  setTimeout(updateProgressBar, 60000);
}

// Inicialize a atualização da barra de progresso
updateProgressBar();

function updateMarketPercentage() {
  const marketPercentageBar = document.getElementById("marketPercentageFill");
  const marketPercentageLabel = document.getElementById("marketPercentageLabel");

  // Gere uma porcentagem aleatória entre 20 e 80
  const randomPercentage = Math.floor(Math.random() * (80 - 20 + 1)) + 20;

  // Atualize a largura da barra de porcentagem
  marketPercentageBar.style.width = `${randomPercentage}%`;

  // Atualize o rótulo de porcentagem
  marketPercentageLabel.textContent = `${randomPercentage}%`;

  // Agende a próxima atualização após 10 minutos (600000 milissegundos)
  setTimeout(updateMarketPercentage, 600000);
}

// Inicialize a atualização da porcentagem do mercado
updateMarketPercentage();

// Adicione isso ao seu script JavaScript existente
const infoBtn = document.getElementById("infoBtn");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModalBtn");

infoBtn.addEventListener("click", () => {
  modalOverlay.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// Adicione isso ao seu script JavaScript existente
const infoContent = document.getElementById("infoContent");

function updateInfoContent() {
  const currentMinute = new Date().getMinutes();

  if (currentMinute >= 0 && currentMinute < 2) {
    infoContent.textContent = "Possível 100X";
  } else if (currentMinute >= 2 && currentMinute < 5) {
    infoContent.textContent = "Possível 100X";
  } else if (currentMinute >= 5 && currentMinute < 7) {
    infoContent.textContent = "Possível 10/20/100X";
  } else if (currentMinute >= 5 && currentMinute <= 6) {
    infoContent.textContent = "Possível 10/20/100X";
  } else if (currentMinute >= 16 && currentMinute <= 17) {
    infoContent.textContent = "Possível 20X";
  } else if (currentMinute >= 21 && currentMinute <= 22) {
    infoContent.textContent = "Possível 10/30X";
  } else if (currentMinute >= 26 && currentMinute <= 27) {
    infoContent.textContent = "Possível 10/30X";
  } else if (currentMinute >= 28 && currentMinute <= 29) {
    infoContent.textContent = "Possível 10/20/100X";
  } else if (currentMinute >= 31 && currentMinute <= 32) {
    infoContent.textContent = "Possível 10/30X";
  } else if (currentMinute >= 36 && currentMinute <= 37) {
    infoContent.textContent = "Possível 10/20/50X";
  } else if (currentMinute >= 41 && currentMinute <= 42) {
    infoContent.textContent = "Possível 20/100X";
  } else if (currentMinute >= 45 && currentMinute <= 46) {
    infoContent.textContent = "Possível 10/100X";
  } else if (currentMinute >= 48 && currentMinute <= 49) {
    infoContent.textContent = "Possível 18/50X";
  } else if (currentMinute >= 50 && currentMinute <= 51) {
    infoContent.textContent = "Possível 10/18X";
  } else if (currentMinute >= 53 && currentMinute <= 54) {
    infoContent.textContent = "Possível 18X";
  } else if (currentMinute >= 56 && currentMinute <= 57) {
    infoContent.textContent = "Possível 28/100X";
  } else {
    // Outra lógica se necessário para outros intervalos
    infoContent.textContent = "Analizando...";
  }
}

// Atualiza a informação inicial
updateInfoContent();

// Atualiza a informação a cada minuto (60 segundos)
setInterval(updateInfoContent, 60000);
