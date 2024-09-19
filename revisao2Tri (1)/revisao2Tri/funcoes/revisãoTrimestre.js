// função nativa que recebe argumentos
// controla dados a partir de um intervalo

const intervalo1 = setInterval(function () {
  console.log("Olá");
}, 200);
// limpar intervalo
clearInterval(intervalo1);
const timeOut1 = setTimeout(function () {
  console.log("Olá");
}, 200);
//limpar intervalo
clearTimeout(timeOut1);

//estrutura de dados
//array -> estrutura de dados indexada

const nomes = ["Maria", "João", "José"];
nomes[2];
nome[33] = undefined;

//objetos literais -> estrutura chave/valor

const cachorro = {
  patas: 4,
  cor: "caramelo",
  raca: "vira-lata",
  castrado: false,
};

console.log(cachorro);
console.log(cachorro.cor);

Object.keys(cachorro);
Object.value(cachorro);
// funções -> estrutura de dados que recebe argumentos
ss