let num = [5, 8, 2, 9, 3]

console.log(num)
console.log(num.length)


num.sort()

console.log(num)
console.log(num.length)

num.push(20)

console.log(num)
console.log(num.length)

for(let pos = 0; pos < num.length; pos++){
    console.log(`Elemento ${pos}: ${num[pos]}`)
}

for(let pos in num){
    console.log(`${pos} : ${num[pos]}`)
}

let pos = num.indexOf(20)
let pos2 = num.indexOf(0)

console.log(`${pos} e ${pos2}`)