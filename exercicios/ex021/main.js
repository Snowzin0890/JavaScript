let produtos = []
let quantidade = []
let lista = {
    banana:2,
    maca:1,
    pera:4,
    manga:7,
    abacaxi:10
}

function add(){
    let prod = document.querySelector('input#prod')
    let quant = document.querySelector('input#quant')
    let res = document.querySelector('div#res')
    let n = Number(quant.value)
    let p = prod.value.toLowerCase()

    res.innerHTML = ''

    if(prod.value.length == 0 || quant.value.length == 0 || produtos.indexOf(p) != -1){
        alert('Insira produto e quantidade para adicionar! E nao repita um produto ja adicionado')
    }else if(lista[p] === undefined){
        alert('Produto nao encontrado na lista')
    }else{
        produtos.push(`${p}`)
        quantidade.push(n)
        res.innerHTML += 'Itens adicionados a lista!'
        console.log(produtos)
        console.log(quantidade)
    }
}

function calc(){
    let res = document.querySelector('div#res')

    if(produtos.length == 0 || quantidade.length ==0){
        alert('Adicione itens a lista antes de calcular!')
        return
    }

        res.innerHTML = '' 
        let totalGeral = 0

        for(let i = 0; i < produtos.length; i++){
            let produto = produtos[i]
            let quant = quantidade[i]
            let precoUnitario = lista[produto]
            let total = precoUnitario * quant
            totalGeral += total

            res.innerHTML += `<p>Voce adicionou ${quant} ${produto} que ficou R$ ${total}</p>`
        }
        res.innerHTML += `<p><strong>Total gasto: R$ ${totalGeral}<strong></p>`
}