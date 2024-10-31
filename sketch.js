let campoIdade;
let campoComedia;
let campoAcao;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("12");
  campoComedia= createCheckbox("Gosta de Comedia?");
  campoAcao = createCheckbox("Gosta de acao?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeAcao = campoAcao.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeComedia, gostaDeAcao);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeComedia, gostaDeAcao) {
  if (idade >= 14) {
    if (idade >= 16) {
      return " Gente Grande ";
    } else {
      if (idade >= 12) {
        if(gostaDeComedia || gostaDeAcao ) {
          return "O menino do pijama listrado";          
        } else{
         return "Ta rindo do que? ";
        }
      } else {
        if (gostaDeComedia) {
          return "As aventuras de pi";
        } else {
          return "Meu malvado favorito ";
        }
      }
    }
  } else {
    if (gostaDeAcao ) {
      return " Divertidamente ";
    } else {
      return " Juntos e Misturados ";
    }
  }
}
