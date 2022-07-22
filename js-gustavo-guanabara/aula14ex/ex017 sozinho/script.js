function gerar() {
    let num = document.getElementById('txtn')
    let tab = document.querySelector('select#seltab')
    if (num.value == 0) {
        window.alert('Por digite um valor diferente de zero')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}