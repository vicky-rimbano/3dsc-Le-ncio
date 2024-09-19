
//desafio 1
//1) crie um loop que rode enquanto o usuario nao estiver logado verifique usuario e senha
//se ps dados estiverem errados: informe o erro 
//senão de boas vindas 
//window.promp("oii")

 const usuario = "anna"
 const senha = "4321"
 let estaLogado = false 
 let u, s = ""
  while(!estaLogado) {

   u = prompt("digite o usuario")
    s = prompt("digite a senha")
    if (u == usuario && s == senha) {
      estaLogado = true
     alert("Ola, seja bem vindo", usuario)
    } else {
      alert("usuario ou senha invalidos")
    }
  }


//Desafio 2
//2) crie um programa que peça ao ususario  para advinhar meu numero da sorte:
//crie um loopWhile, meu numero: math.random()* 50 numero de tentativas == 3 (condição de para)
//chegar com if/else

numeroDaSorte = Math.round(Math.random() * 50)