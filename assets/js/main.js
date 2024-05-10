function main() {
    const form = document.querySelector('#form');
     
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const pesoInput = evento.target.querySelector('#peso');
        const alturaInput = evento.target.querySelector('#altura');
        
        const peso = Number(pesoInput.value);
        const altura = Number(alturaInput.value);

        if (peso < 1 || !peso ){
            setResultado('Peso inválido.', false);
            return;
        }
        if (altura < 1 || !altura ){
            setResultado('Altura inválida.', false);
            return;
        }
        
        const imc = calculoImc(peso, altura);
        const nivel = nivelImc(imc);

        const msg = `Seu IMC é ${imc} (${nivel}).`;
        setResultado(msg, true);

    }

    form.addEventListener('submit', recebeEventoForm);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function calculoImc(peso, altura){
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function nivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 
    'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc < 18.5) return nivel[0];
    if (imc <= 24.9) return nivel[1];
    if (imc <= 29.9) return nivel[2];
    if (imc <= 34.9) return nivel[3];
    if (imc <= 39.9) return nivel[4];
    if (imc >= 40) return nivel[5];
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid){
        p.classList.add('paragrafo-resultado');
    }
    else {
        p.classList.add('paragrafo-error');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

main();
