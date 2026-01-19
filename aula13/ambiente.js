let pizza = 20
let fatia = 1

function comerPizza(){

    function comerFatia(){
        if(pizza > 0){
            pizza -= fatia
        }
    }

    while(pizza > 0){
        comerFatia()
        console.log(`Pedacos restantes: ${pizza}`)
    }

    console.log('A pizza acabou!!!')
}

console.log(comerPizza())

/*
var c = 1
do{
    console.log(`Passo ${c}`)
    c++
}while(c <= 20)
*/