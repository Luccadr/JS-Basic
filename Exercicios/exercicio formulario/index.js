function escopoGlobal() {
    const form = document.querySelector('.form');  // usando ponto puxa a class, # puxa o id
    const resultado = document.querySelector('.resultado');  // usando ponto puxa a class, # puxa o id
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault(); // ele limita a ação desse evento 
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value

        });


        console.log(pessoas);

        resultado.innerHTML += `<p> nome ${nome.value} sobrenome ${sobrenome.value} peso ${peso.value} altura ${altura.value}</p>`}

    form.addEventListener('submit', recebeEventoForm);



}

escopoGlobal()