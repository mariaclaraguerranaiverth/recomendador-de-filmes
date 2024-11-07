let campoPreco;
let campoCaro;
let campoBarato;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de maquiagem");
  createSpan("Preco:");
  campoPreco = createInput("5");
  campoCaro = createCheckbox("Prefere Caro?");
  campoBarato= createCheckbox("Prefere Barato?");
}

function draw() {
  background("rgb(219,142,212)");
  let preco = campoPreco.value();
  let prefereCaro = campoCaro.checked();
  let prefereBarato = campoBarato.checked();
  let recomendacao = geraRecomendacao(preco, prefereCaro, prefereBarato);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(preco, prefereCaro, prefereBarato) {
  if (preco >= 200) {
    if (preco >= 400) {
      return "Dior";
    } else {
      if (preco>= 300) {
        if(prefereCaro || prefereBarato) {
          return "Nars";          
        } else{
         return "Franciny Ehlke";
        }
      } else {
        if (prefereCaro) {
          return "Rare Beauty";
        } else {
          return "Mac";
        }
      }
    }
 } else {
    if (prefereBarato) {
      return "Nina Secrets";
    } else {
      return "Mari Maria Makeup";
    }
  }
}

