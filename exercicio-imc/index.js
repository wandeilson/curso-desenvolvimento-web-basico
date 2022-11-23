const formulario = document.querySelector('#form');
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const altura = Number(inputAltura.value);
    const peso = Number(inputPeso.value);

    if(!altura && !peso){
        setResultado("Altura e peso inválidos", false);
        return;
    }else if(!peso){
        setResultado("Peso inválido.", false);
        return;
    }else if(!altura){
        setResultado("Altura inválido.", false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivel = getNivel(imc);
    setResultado(nivel,true);


});


function getNivel(imc){
    if(imc < 17){
        return("Seu IMC deu: " + imc +" - Muito abaixo do peso");
    }
    else if(imc >= 17 && imc <= 18.49 ){
        return("Seu IMC deu: " + imc +" -Abaixo do peso");
    }
    else if(imc >= 18.5 && imc <=24.99){
        return("Seu IMC deu: " + imc +" - Peso normal");
    }
    else if(imc >= 25 && imc <=29.99 ){
        return("Seu IMC deu: " + imc +" - Acima do peso");
    }
    else if(imc >= 30 && imc <=34.99){
        return("Seu IMC deu: " + imc +" - Obesidade I");
    }
    else if(imc >= 35 && imc <=39.99){
        return("Seu IMC deu: " + imc +" - Obesidade II");
    }
    else {
        return("Seu IMC deu: " + imc +" - Obesidade III");
    }

}

function getIMC(peso, altura){
    const result = peso / altura ** 2;
    console.log(result)
    return result.toFixed(2);

}

function setResultado(msg, valido){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";

    const p = document.createElement('p');
    p.innerHTML = msg;
    if(!valido){
        p.classList.add('paragrafo-bad');
    }else{
        p.classList.add('paragrafo-resultado');
    }
    resultado.appendChild(p);
}
  