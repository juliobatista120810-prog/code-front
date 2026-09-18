import './App.css'

//adicionar um botão novo toda vez que fizer um exercicio novo.

function App() {

  function kowalski(){
    
  let relatoriosPF = Number(prompt('Quantos relatórios PF?'));
let relatoriosPJ = Number(prompt('Quantos relatórios PJ?'));

let tempoPF = Number(prompt('Quantas horas nos relatórios PF?'));
let tempoPJ = Number(prompt('Quantas horas nos relatórios PJ?'));

let valorPF = Number(prompt('Valor recebido de PF?'));
let valorPJ = Number(prompt('Valor recebido de PJ?'));

let totalRelatorios = relatoriosPF + relatoriosPJ;
let tempoTotal = tempoPF + tempoPJ;
let valorTotal = valorPF + valorPJ;

let mediaValorPF = valorPF / relatoriosPF;
let mediaValorPJ = valorPJ / relatoriosPJ;

let mediaTempoPF = tempoPF / relatoriosPF;
let mediaTempoPJ = tempoPJ / relatoriosPJ;

alert(
    'RELATÓRIO KOWALSKI\n\n' +
    'Total de relatórios: ' + totalRelatorios + '\n' +
    'Tempo total: ' + tempoTotal + ' horas\n' +
    'Valor total: R$' + valorTotal + '\n\n' +
    'Média valor PF: R$' + mediaValorPF.toFixed(2) + '\n' +
    'Média valor PJ: R$' + mediaValorPJ.toFixed(2) + '\n' +
    'Média tempo PF: ' + mediaTempoPF.toFixed(2) + ' horas\n' +
    'Média tempo PJ: ' + mediaTempoPJ.toFixed(2) + ' horas'
);
  }

  function juninFreela(){
   
    let qtdhoras = Number(prompt('Quanto é a quantidade de horas estimada: '))
    let precoConsultor = Number(prompt('Quanto foi pago para o consultor: '))

    let precoCobrado = 500 + (qtdhoras * 350) 
    let lucroFreela = precoCobrado - precoConsultor

    alert('Este foi o lucro do freela: $' + lucroFreela);
  }

function InteligenciaArtificial(){
    let tokensGastos, numeroDeCaracteres, custoDoToken, tokensUsados, custoTotal

    numeroDeCaracteres = Number(prompt('Quantidade de caracteres: '))
    custoDoToken = Number(prompt('Qual foi o custo dos tokens: '))
    tokensUsados = Number(prompt('Quantos tokens foram usados: '))
    
    tokensGastos = 5 + numeroDeCaracteres
    custoTotal = tokensGastos * custoDoToken
    
    alert('Esse foi gasto dos tokens: $' + custoTotal)
  }

function gaeleSeusJacares(){

  let caminhoes = Number(prompt('Quantos caminhões foram vendidos?'));

  let jacares = caminhoes * 50;
  let custo = caminhoes * 450;
  let venda = jacares * 90;

  jacares = Number(prompt('Quantos jacares foram vendidos: '))
  custo = Number(prompt('Quanto foi o custo: '))
  venda = Number(prompt('Quanto foi o valor da venda: '))
  
  let lucro = venda - custo;

  alert('Lucro da temporada: R$' + lucro);

}

function seuGildao(){
    let pessoas = Number(prompt('Quantas pessoas vão participar do churrasco?'));

  let carne = pessoas * 0.5;
  let cerveja = pessoas * 1;
  let agua = pessoas * 0.5;
  let refri = pessoas * 0.2;

alert('Quantidade de carne: ' + carne + ' kg');
alert('Quantidade de cerveja: ' + cerveja + ' L');
alert('Quantidade de água: ' + agua + ' L');
alert('Quantidade de refrigerante: ' + refri + ' L');
}

function PetShopRonBernardo(){
  
  let pesoGramas = Number(prompt('Digite o peso da ração em gramas: '))

    let pesoKg = pesoGramas / 1000

    let preco = pesoKg * 10

    alert('O preço da ração é R$' + preco.toFixed(2))

}

function romeroBrique(){
  
  let precoCusto = Number(prompt('Quanto seu romero pagou na obra de arte: '))
  let lucro = precoCusto * 2;
  let precoVenda = precoCusto + lucro

  alert('Preço de venda recomendado: R$' + precoVenda.toFixed(2));
}

function manoJuca() {
  let salario, moradia, agua, luz, internet, gasolina, streamings, telefone, outros

  salario = Number(prompt('Quanto é seu salario: '))
  moradia = Number(prompt('Quanto é a moradia: '))
  agua = Number(prompt('Quanto é a agua: '))
  luz = Number(prompt('Quanto é a luz: '))
  internet = Number(prompt('Quanto é a internet: '))
  gasolina = Number(prompt('Quanto é a gasolina: '))
  streamings = Number(prompt('Quanto é a streamings: '))
  telefone = Number(prompt('Quanto é a telefone: '))
  outros = Number(prompt('Quanto é a outros: '))

  let sobra = salario - moradia - agua - luz - internet - gasolina - streamings - telefone - outros

  alert('Sua sobra foi de: R$' + sobra)
}

  function saruMano(){
    let showsMarcados, precoBomba, qtdFumaca

    showsMarcados = Number(prompt('QWuantos shows tem marcados: '))
    precoBomba = Number(prompt('Qual é o preço de uma unidade de bomba: '))
    qtdFumaca = Number(prompt('Qual é a quantida unitaria da bomba: '))
    
    let calculo = qtdFumaca * showsMarcados
    let desafio = qtdFumaca * precoBomba

    alert('Está é a quantidade de bombas que precisam ser compradas: ' + calculo)
    alert('Você precisa mobilizar está quantidade de dinheirinho: ' + desafio)
  }

function capitaoPatolino(){
  let gastoSuprimento, faturamentoIngressos, faturamentoItens

  gastoSuprimento = Number(prompt('Quanto foi gasto em suprimentos e mercadorias para operar seu navio: '))
  faturamentoIngressos = Number(prompt('Quanto foi o faturamento em venda de ingressos: '))
  faturamentoItens = Number(prompt('Quando foi o faturamento em venda de ítens: '))

  let lucroReais = faturamentoIngressos + faturamentoItens - gastoSuprimento 

  alert('Seu lucro tem um total de: ' + lucroReais)
}

function DonaBetinha() {
  let BrutalTotal, premiacoes, presentes, comissoes

  BrutalTotal = Number(prompt('Qual é o dinheirinho bruto de hoje: '))
  premiacoes = Number(prompt('Quanto você pagou as premiações: '))
  presentes = Number(prompt('Quanto pagou pelos presentes/agrados de hoje: '))
  comissoes = Number(prompt('Quanto você gastou com comissões para os operadores dos seus jogos: '))

  let lucroBrutal = BrutalTotal - premiacoes - comissoes - presentes

  alert('Este foi o lucro "BRUTAL!" de hoje: ' + lucroBrutal)
}

  function TellesTransportes2() {
  let peso, distancia, volume

  peso = (prompt('Qual é o peso: '))
  distancia = Number(prompt('Qual é a distancia: '))
  volume = Number(prompt('Qual é o volume: '))

  let frete = 15+(2*peso)+(0.05*distancia)+(10*volume)

  alert('Este é o valor do frete: ' + frete)
  }

function Mônika() {
  let chance, n
  
  n = Number(prompt('Quantas vezes ele(a) usou o celular: '))
  chance = Number(prompt('Quais são as chances de sucesso: '))

  let chancesHumanos = (0.1/(1 + 500 * n)) * 100
  
  alert('Chances para humanos: ' + chancesHumanos)
}

function tellesTransportes() {
  let peso, tara

  peso = Number(prompt('Qual é o peso: '))
  tara = Number(prompt('Qual é a tara: '))
   

  let carga = peso - tara

  alert('Este é o peso da carga: ' + carga)
}

function junin() {
  let salarioMensal, diasTrabalhados, salarioSemanal

  salarioMensal = Number(prompt('Quanto você recebeu neste mês: '))
  diasTrabalhados = Number(prompt('Quantos dias você trabalhou: '))
  salarioSemanal = Number(prompt('Quanto você recebeu na semana: '))

  let salarioDia = salarioMensal / diasTrabalhados;
  salarioSemanal = salarioMensal * 5

  alert('Isso é quanto você ganha por dia: ' + salarioDia, salarioSemanal)
}

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
    <button onClick={junin}>junin</button>
    <button onClick={tellesTransportes}>tellesTransportes</button>
    <button onClick={Mônika}>Mônika</button>
    <button onClick={TellesTransportes2}>TellesTransportes2</button>
    <button onClick={DonaBetinha}>DonaBetinha</button>
    <button onClick={capitaoPatolino}>capitaoPatolino</button>
    <button onClick={saruMano}>saruMano</button>
    <button onClick={manoJuca}>manoJuca</button>
    <button onClick={romeroBrique}>romeroBrique</button>
    <button onClick={PetShopRonBernardo}>PetShopRonBernardo</button>
    <button onClick={seuGildao}>seuGildao</button>
    <button onClick={InteligenciaArtificial}>InteligenciaArtificial</button>
    <button onClick={juninFreela}>juninFreela</button>
    <button onClick={kowalski}>kowalski</button>

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