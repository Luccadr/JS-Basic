const alunos = ['Lucas','Ana', 'Jurema','Juremo',10,true]

console.log (alunos)
console.log (alunos[0])
console.log (alunos.length)


// Trocar variavel

alunos[0] = 'Lucas Ribeiro'

// Adicionando final
alunos[alunos.length] = 'Pedro'
alunos[alunos.length] = 'Joao'

alunos.push('Otavio')
alunos.unshift('Teresa') //* Adiciona no começo */

console.log (alunos)


alunos.pop() //Remover o ultimo
delete alunos[1] // delete mas deixa vazio a posição escolhida

console.log (alunos)


//Slice
console.log(alunos.slice(0,5))

// confirmar o tipo

console.log(typeof(alunos)) // não funciona
console.log(alunos instanceof Array) // jeito correto