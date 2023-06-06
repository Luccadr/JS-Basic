/*
Primitivos (imutaveis)- string, number, boolean, undefined, null - Valor

Referencia (mutaveis) - array, object, function
*/

let nome = "Lucas"
nome[0] = 'Z' // não muda por ser imutavel

console.log(nome)

let a = 'A';

let b = a; // copia

console.log(a,b)

a = 'outra coisa'

console.log(a,b)


let c = [0,1,2];
let d = c;

console.log(d,c)


c.push(3) // altera c e d

console.log('depois do push',d,c)

d.pop() // altera d e c

console.log('depois do pop',d,c)




// O jeito correto para copiar

let e = {...d}

d.push('lucas')

console.log('depois da copia certa, d c e "e"',d,c,e)
