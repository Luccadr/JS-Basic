const pessoa1 = {
    nome: "Lucas",
    sobrenome: "Ribeiro",
    idade: 33

}

console.log(pessoa1.nome)
console.log(pessoa1.idade)

function criaPessoa(nome,sobrenome,idade){
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
        // funciona com apenas com return{nome,sobrenome,idade}
    }
}

const pessoa2 = criaPessoa("Ana Paula","Becker",34)

console.log(pessoa2)