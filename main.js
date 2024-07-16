alert(`Hellow, world!`)

const num1 = Math.round(Math.random() * 10)
const num2 = Math.round(Math.random() * 10)
const sum = num1+ num2
console.log(`Resultado da soma de ${num1} + ${num2} é igual a = ${sum}`)

const isNumber = 5

if (typeof isNumber === 'number') {
  console.log('É um número')
} else {
  console.log('Não é um número!')
}

const isString = '5'

if (typeof isString === 'string') {
  console.log('É uma string')
} else {
  console.log('Não é uma string!')
}

const isBoolean = false

if (typeof isBoolean === 'boolean') {
  console.log('É um booleano')
} else {
  console.log('Não é um booleano')}


const numOne = Math.round(Math.random() * 10)
const numTwo = Math.round(Math.random() * 10)
const sub = numOne - numTwo
const mult = numOne * numTwo
const divi = (numOne / numTwo).toFixed(2)

  alert(`Considerando os números ${numOne} e ${numTwo}, aqui está o resultado das seguintes operações: \n Subtração: ${sub} \n Multiplicação: ${mult} \n Divisão: ${divi}`)

verifyNum = prompt('Insira um número e irei dizer se ele é par ou ímpar: ')

console.log("número inserido: "+ verifyNum)

if(verifyNum % 2 == 0){
  alert('O número inseiro é par!')
} else{
  alert("O número não é par...")
}

alert('sendo assim....');

if(verifyNum % 2 == 1){
  alert("O número inserido é ímpar!")
} else {
  ("O número não é ímpar...")
}


