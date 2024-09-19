// set interval executa a cada X milisegundos

//let n = 0

// set time out - executa apos - milisegundos
// setTimeout(function(){
//   console.log('Executou')
// }, 5000)

// const intervalo = 
//   setInterval(function() {
//     console.clear()
//     console.log(n)
//     n++
//   }, 1000)

// clearInterval(intervalo)

// setTimeout(function) {
//   clearInterval(intervalo)
//   // redirecionar para outra pagina
//   location.href = 'https://www.google.com'
// }, 50000)


// a partir dos conceitos aprendidos, resolva:
// a) Crie uma função setInterval que receba uma função e um tempo de 3s
// b) dentro dela imprima um numero randomico de 1 a 10
// c) após percorridos 8s interrompa com setTimeout 


// gerar numeros aleatorios de 3 em 3 segundos
const intervalo2 = setInterval(function() {
  let num = Math.round(Math.random() * 19)
  console.log(num)
  location.href = "https://www.shopee.com.br"
}, 3000)
