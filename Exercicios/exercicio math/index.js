const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `Sua raiz quadrada é:<strong> ${numero**0.5} <strong> <br />`;
texto.innerHTML += `o ${numero} o número é inteiro: <strong>  ${Number.isInteger(numero)}<strong> <br />`;
texto.innerHTML += `É NaN: <strong> ${isNaN(numero)}<strong> <br />`;
texto.innerHTML += `Arredondando para baixo: <strong> ${Math.floor(numero)}<strong> <br />`;
texto.innerHTML += `Arredondando para cima <strong> ${Math.ceil(numero)}<strong> <br />`;
texto.innerHTML += `O númeiro com duas casas decimais: <strong> ${console.log(num3.toFixed(2))}<strong> <br />`;