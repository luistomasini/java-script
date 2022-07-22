var result = document.getElementById('result')

function imc () {
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let calcular = document.getElementById('calcular')
    
    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificacao =''
        
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!'
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.'
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I'
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II'
        } else {
            classificacao = 'com obesidade grau III. Cuidado!'
        }

        resultado.innerHTML = `${nome}, seu IMC é ${valorIMC}. Você está ${classificacao}`

    } else {
        resultado.innerHTML = 'Preencha todos os campos'
    }
}


calcular.addEventListener('click', imc)
