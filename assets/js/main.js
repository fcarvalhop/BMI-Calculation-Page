function main() {
    const form = document.querySelector('#form');
     
    function eventReceiveForm (evento) {
        evento.preventDefault();
        const weightInput = evento.target.querySelector('#weight');
        const heightInput = evento.target.querySelector('#height');
        
        const weight = Number(weightInput.value);
        const height = Number(heightInput.value);

        if (weight < 1 || !weight ){
            setResult('Invalid Weight.', false);
            return;
        }
        if (height < 1 || !height ){
            setResult('Invalid Height.', false);
            return;
        }
        
        const bmi = calculateBmi(weight, height);
        const index = indexBmi(bmi);

        const msg = `Your BMI is ${bmi} (${index}).`;
        setResult(msg, true);

    }

    form.addEventListener('submit', eventReceiveForm);
}

function createP(){
    const p = document.createElement('p');
    return p;
}

function calculateBmi(weight, height){
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
}

function indexBmi(bmi){
    const index = ['Underweight', 'Normal', 'Overweight', 'Obesity First Degree', 
    'Obesity Second Degree', 'Obesity Third Degree'];

    if (bmi < 18.5) return index[0];
    if (bmi <= 24.9) return index[1];
    if (bmi <= 29.9) return index[2];
    if (bmi <= 34.9) return index[3];
    if (bmi <= 39.9) return index[4];
    if (bmi >= 40) return index[5];
}

function setResult(msg, isValid){
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const p = createP();

    if (isValid){
        p.classList.add('paragraph-result');
    }
    else {
        p.classList.add('paragraph-error');
    }
    p.innerHTML = msg;
    result.appendChild(p);
}

main();
