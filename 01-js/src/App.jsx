import './App.css'

function App() {

function PeErnanBuco() {
  let custo, doacoes

  custo = Number(prompt('Quanto foi o custo mensal: '))
  doacoes = Number(prompt('Quanto foi recebido de doações e dízimos no dia: '))
  

  let quantoFalta = custo - doacoes

  alert('Quanto falta para pagar completamente os custos mensais: ' + quantoFalta)
}

function trajetoPomar() {
  let qtdLaranjasf, qtdLaranjasi

  qtdLaranjasi = Number(prompt('Qual é a quantidade de laranjas no inicio:'))
  qtdLaranjasf = Number(prompt('Qual é a quantidade de laranjas no final:'))

  let laranjasVendidas = qtdLaranjasi - qtdLaranjasf

  alert('Qual foi o total de laranjas vendidas ao final das vendas:' + laranjasVendidas)
} 
//adicionar um botão toda vez que fizer um ex novo.
function vendedorDePortoes() {
  let estagiarios, pjs, clts 
  
  estagiarios = Number(prompt('Quantos estagiários tem na empresa:'))
  pjs = Number(prompt('Quantos pj tem na empresa:'))
  clts = Number(prompt('Quantos clts tem na empresa:'))

let devsTotal = estagiarios + pjs + clts

alert('Total de pessoas na empresas:' + devsTotal)
}

function trocarSapatos() {
  let qtdPares, precoPar, valorTotal
  qtdPares = Number(prompt('Quantidade de pares:'))
  precoPar = Number(prompt('Preço de cada par:'))

  valorTotal = qtdPares * precoPar

  alert('Valor total da troca: R$' + valorTotal.toFixed(2))
}

function calcularPontos() {
  let vitorias = Number(prompt('Número de vitórias:'))
  let empates = Number(prompt('Número de empates:'))

  let pontos = vitorias * 3 + empates //*1
  alert('O seu time tem ' + pontos + ' pontos')
}

 function testar (){
 let nome = prompt('Qual o seu nome: ')
 let bocaDoSapo = nome
 alert(nome + ', seu nome está na boca do sapo 🐸 ')
 }

  return (
    <div className="cont-app">
    <h1>JavaScript no React</h1>

    <h2>Exercicios supimpas</h2>

    <button onClick={calcularPontos}>campeonato</button>
    <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
    <button onClick={vendedorDePortoes}>vendedorDePortoes</button>
    <button onClick={trajetoPomar}>trajetoPomar</button>
    <button onClick={PeErnanBuco}>PeErnanBuco</button>
    <hr />

    <button onClick={testar}>Testar</button>
    <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

function calcularMedia (){
let nota1 = Number((prompt("Qual o valor da primeira nota:")))
let nota2 = Number((prompt("Qual o valor da segunda nota:")))
let media = (nota1 + nota2) /2;
alert('Sua média final: ' + media)
}

export default App