//Declaração do array 'hex'
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Pega o elemento HTML contido no btn e color
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//Adiciona o evento de gerar a cor hexadecimal
btn.addEventListener("click", function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++ ){
        hexColor += hex[getRandomNumber()];
    }

    //exibe a cor hexadecimal no elemento HTML
    color.textContent = hexColor;

    //Muda a cor de fundo da página
    document.body.style.backgroundColor = hexColor;
})

//Gera o número aleatório e faz com que não seja um número decimal
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}