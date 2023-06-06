let umaString = 'Ola tudo bem com você?'


//Index
console.log(umaString[2])
console.log(umaString[-1])

console.log(umaString.charAt(2))


// Concat
console.log(umaString.concat(' ','sim e voce'))
console.log(umaString + ' nao e voce')
console.log(`${umaString} nao e voce`)


console.log(umaString.indexOf('bem')) // saber qual index começa a palavra

console.log(umaString.indexOf('bem', 10)) // saber qual index começa a palavra começando da posição 10

console.log(umaString.lastIndexOf('bem')) // saber qual index começa a palavra de tras para frente (começa procurar)



console.log(umaString.search('bem')) // saber qual index começa a palavra


console.log(umaString.replace('bem','mal')) // replace

console.log(umaString.replace(/o/g,'#')) // replace todas as letras o


console.log(umaString.length) // tamanho da string

console.log(umaString.slice(2,8)) // slice
console.log(umaString.slice(-5)) // slice
console.log(umaString.slice(-5, umaString.length - 1))
console.log(umaString.slice(-5,  - 1))


console.log(umaString.split(' ')[0]) // split
console.log(umaString.split(' ',2)) // split