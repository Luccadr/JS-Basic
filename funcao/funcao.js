function saudacao(){
    console.log('Bom dia!!')
}
saudacao()

function saudacaoNome(nome){
    console.log(`Bom dia ${nome}!!!`)
    
}
saudacaoNome('Lucas')

function soma(x,y){
    const resultado = x + y
    return resultado // return encerra a função
}

soma (2,2) // não aparece pelo return, mas se colocar como console ele aparece

console.log(soma(2,2))

