class Calculadora{
    soma(n1, n2){
        return n1+n2
    }
    subtracao(n1, n2){
        if(n1>n2){
            return n1-n2
        }
        return n2-n1
    }
    multiplicacao(numero1, numero2){
        return numero1*numero2
    }
    divisao(numero1, numero2){
        if(numero1>numero2){
            return numero1/numero2
        }
        return numero2/numero1
    }
}
const nossaCalculadora = new Calculadora()
function calcular(){
    const numero1 = parseInt(document.querySelector('input#num1').value)
    const numero2 = parseInt(document.querySelector('input#num2').value)
    const operacao = document.querySelector('select#operadores').value
    const valorResultado = document.querySelector('div#resultado')
    let resultado;

    switch(operacao){
        case 'soma':
            resultado = nossaCalculadora.soma(numero1, numero2)
            break
        case 'subtracao':
            resultado = nossaCalculadora.subtracao(numero1, numero2)
            break
        case 'multiplicacao':
            resultado = nossaCalculadora.multiplicacao(numero1, numero2)
            break
        case 'divisao':
            resultado = nossaCalculadora.divisao(numero1, numero2)
            break
    }

    valorResultado.innerHTML = resultado
}
