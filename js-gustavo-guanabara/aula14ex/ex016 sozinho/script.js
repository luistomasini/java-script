function contar() {
    let ini = Number(document.getElementById('txti').value)
    let fim = Number(document.getElementById('txtf').value)
    let passo = Number(document.getElementById('txtp').value)
    let res = document.querySelector('div#res')

    res.innerHTML = ''
    if (ini == 0 || fim == 0 || passo == 0) {
        res.style.color = 'red'
        res.innerHTML = 'Impossível contar!'
    } else {
        if (passo == 0) {
            window.alert = 'Passo errado, considerando passo 1'
            passo = 1
        }
        if (ini < fim) {
            for (let c = ini; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449}`
            }          
        } else {
            for (let c = ini; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }    
    }
}