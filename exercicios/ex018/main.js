valores = []

function add(){
    let numInput = document.querySelector('input#num')
    let num = numInput.value
    

    if(numInput.value.length == 0 || num > 100 || num < 1 || valores.indexOf(Number(num)) != -1){
        alert('Valor invalido ou ja encontrado na lista')
    }else{
        let tab = document.querySelector('select#tab')
        let item = document.createElement('option')

        valores.push(Number(num))
        item.text = `Valor ${num} adicionado.`
        tab.appendChild(item)
    }
}

function info(){
    let res  = document.querySelector('div#res')
    let org = valores.sort()

    let maior = valores[0]
    for(let m = 1; m < valores.length; m++){
        if(valores[m] > maior){
            maior = valores[m]
        }
    }

    let soma = 0
    for(let s = 0; s < valores.length; s++){
        soma += valores[s]
    }

    let media = soma / 2

    res.innerHTML = `Ao todo, temos ${valores.length} numeros cadastrados. <br><br>O maior valor informado foi ${maior}.
    <br><br>O menor valor informado foi ${org[0]}. <br><br>Somando todo os valores, temos ${soma}. <br><br>A media dos valores digitados e ${media}.`
}