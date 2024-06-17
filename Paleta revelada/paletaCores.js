//Pega elementos HTML de determinadas váriaveis
const imageUpload = document.getElementById("imageUpload");
const colorGradient = document.getElementById("colorGradient");
const uploadedImage = document.getElementById("uploadedImage"); 


//o código dentro da função será executado quando o usuário selecionar um arquivo no input.
imageUpload.addEventListener("change", function(event) {
  //Verifica se o arquivo foi realmente selecionado
  if (event.target.files && event.target.files[0]) {

    //Verifica se um arquivo foi realmente selecionado e cria um novo objeto FileReader para ler o conteúdo do arquivo.
    const imageFile = event.target.files[0];
    const reader = new FileReader();

    //Cria um novo objeto Image e define sua source (src) como a URL da imagem carregada.
    reader.onload = function(e) {
      const img = new Image();
      img.src = e.target.result;

    //Cria uma instância da biblioteca ColorThief, que será usada para extrair a paleta de cores.
      img.onload = function() {
        const colorThief = new ColorThief();
        const colors = colorThief.getPalette(img, 5); 
      
        //Extrai as cores predominantes da imagem
        displayPalette(colors);
        uploadedImage.src = e.target.result; // Exibe a imagem
      }
    }
    reader.readAsDataURL(imageFile);
  }
});

//Recebe a paleta extraída de (colors) e itera pelo array colors, transformando cada cor (que provavelmente está em um formato como [r, g, b]) em uma string no formato rgb(r, g, b)
function displayPalette(colors) {
  const gradientString = `linear-gradient(to right, ${colors.map(color => `rgb(${color.join(',')})`).join(', ')})`;
  //Colore o retângulo com as cores da paleta
  colorGradient.style.backgroundImage = gradientString;
}