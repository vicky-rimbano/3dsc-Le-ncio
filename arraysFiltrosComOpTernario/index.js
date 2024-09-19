const { error } = require("console");

const pessoas = [
  {nome: "Arthur", sexo: "M"},
 {nome: "Tuk", sexo: "M"},
 {nome: "Rory", sexo: "F"},
 {nome: "Nani", sexo: "F"},
  {nome: "Gerald", sexo: "M"}
]
//console.log(pessoas[2].nome)

//for(pessoa of pessoas) {
 // console.log(pessoa.nome) // . = dentro de (algo)
//}

const meninas = []; // vazio
const meninos = []; // vazio

function filtroPessoas(arrpessoas){
  if (typeof arrpessoas == "object"){ // checa se é um objeto/array
    for (pessoa of arrpessoas){ //itera sobre cada item de pessoas
      pessoas.sexo == "F" // checa a propriedade "sexo"
        
      ? meninas.push(pessoa) //caso feminino
       : meninos.push(pessoa) // caso masculino
    }
  } else {
    console.error(arrPessoas); // senao imprime um erro
  }
}

filtroPessoas(pessoas); // função para reaproveitamento de codigo

// for (pessoa of pessoas){
//   (pessoa.sexo === "F")
//    ? meninas.push(pessoa)
//   : meninos.push(pessoa) 

 console.log("-----meninas-----")
console.log(meninas);
console.log("-----meninos-----")
 console.log(meninos);


