// OPERADOR TERNARIO
// são usados para simplificar o processode tomadade decisao
// e eventualmente substituir if/else

const idade = 18;
if (idade >= 18) {
  console.log("permitida a entrada");

}else{
  console.log("proibido para menores");
}

//com operador ternario

const passe = idade >= 18 ? "permitida a entrada" : "proibido para menores"
console.log(passe)