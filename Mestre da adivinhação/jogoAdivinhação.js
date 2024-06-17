
//Pega elementos HTML de determinadas váriaveis
const colorDisplay = document.getElementById("colorDisplay");
const optionsContainer = document.getElementById("options");
const resetButton = document.getElementById("resetButton");
const messageDisplay = document.getElementById("message");

//Armazena a cor que deverá ser adivinhada
let targetColor;
//Array que guarda as cores dos quadrados
let colors = [];
//Número de quadrados com suas cores
const numSquares = 6;

//Gera uma cor RGB que retorna em forma de uma string na página
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(generateRandomColor());
  }
  return arr;
}

//Escolhe aleatoriamente uma cor do array colors para ser a cor "correta"
function pickTargetColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function setColors() {
  colors = generateColors(numSquares);
  targetColor = pickTargetColor();
  colorDisplay.textContent = targetColor;

  for (let i = 0; i < colors.length; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor = colors[i];
    
    // Adiciona os ícones dentro da div.marks
    square.innerHTML = `
      <div class="marks">
        <span class="wrong-mark">X</span>
        <span class="correct-mark">✓</span>
      </div>
    `; 

    square.addEventListener("click", function() {
      checkGuess(this);
    });
    optionsContainer.appendChild(square);
  }
}

function checkGuess(square) {
  const clickedColor = square.style.backgroundColor;
  const wrongMark = square.querySelector(".wrong-mark");
  const correctMark = square.querySelector(".correct-mark");

  //Verificação se o clique foi na cor correta
  if (clickedColor === targetColor) {
    messageDisplay.textContent = "Correto! Você adivinhou!";
    messageDisplay.style.visibility = "visible";
    correctMark.style.visibility = "visible";
    setTimeout(resetGame, 3000);
  } else {
    square.style.backgroundColor = "#f0f0f0";
    wrongMark.style.visibility = "visible";
  }
}


/*Remove os quadrados antigos.
Chama setColors() para gerar novas cores e quadrados.
Esconde a mensagem de acerto ou erro */
function resetGame() {
  optionsContainer.innerHTML = "";
  setColors();
  messageDisplay.style.visibility = "hidden";
}

//Reinicia o jogo
resetGame();
resetButton.addEventListener("click", resetGame);