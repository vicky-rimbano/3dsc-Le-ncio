//array -> estrutura de dados indexada
// () , {} , []
//são iteraveis ou seja, podem ser percorridos ate seu limites
// loops / ciclos de repetição -> for, for in, for of, foreach
//for > inicialização, condição de parada, incremento (passo ou step)

// array são um tipo de objeto
const pokemonList = ["pikachu", "bulbassauro", "charmander", "squirtle"];
//                        0           1            2            3

//console.log(pokemon[2])
for (let i = 0; i < pokemonList.length; i++) {
  console.log(pokemonList[i])
}
for (let pokemon in pokemonList){
  console.log(pokemonList[pokemon]);
}
for (let pokemon of pokemonList){
  console.log(pokemon);
}