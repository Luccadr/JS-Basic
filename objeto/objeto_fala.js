const pessoa1 = {
    nome: "Lucas",
    sobrenome: "Ribeiro",
    idade: 33,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi`)  // this referencia as variantes dentro do objeto
    }
}

pessoa1.fala()