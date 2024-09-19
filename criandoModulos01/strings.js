const meuNome = "Gabriel";

function imprimeNome() {
  console.log("meu nome é ${meuNome}");
}
export function caixaAlta(nome) {
  return nome.toUpperCase();
}
export function caixaBaixa(nome) {
  return nome.toLowerCase();
}

// exportação posterior de valores
export { meuNome, imprimeNome };
