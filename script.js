const inpuText = document.getElementById('campoTextoED');
const prinText = document.getElementById('areaTextoED');

//Las "llaves" de encriptación que utilizaremos son las siguientes:
const arrayKeys = [
    ['e', 'enter'], //La letra "e" es convertida para "enter"
    ['i', 'imes'], //La letra "i" es convertida para "imes"
    ['a', 'ai'], //La letra "a" es convertida para "ai"
    ['o', 'ober'], //La letra "o" es convertida para "ober"
    ['u', 'ufat'], //La letra "u" es convertida para "ufat"
];


//No deben ser utilizados letras con acentos ni caracteres especiales
function validarEntrada(textoValido) {
    // Expresión regular que permite letras y números solamente
    let patron = /^[a-zA-Z0-9]*$/;
    return patron.test(textoValido);
}

function btnEncrip(){

    if (validarEntrada(inpuText.value)) {
            prinText.innerHTML = encriptarText(inpuText.value);
            document.querySelector('.content__inputText--btndesencrip').setAttribute('disabled',true);
            document.querySelector('.content__inputText--btndesencrip').style.cursor = "auto";
    
    } else {
        // El texto ingresado contiene caracteres no permitidos
        valueInvalid();
    }
}

function encriptarText(textAencriptar){

    //Debe funcionar solo con letras minúsculas
    textAencriptar = textAencriptar.toLowerCase();
    
    for (let i = 0; i < arrayKeys.length; i++){
        if(textAencriptar.includes(arrayKeys[i][0])){
            textAencriptar=textAencriptar.replaceAll(arrayKeys[i][0],arrayKeys[i][1]); 
        }
    }
    return textAencriptar;
}
//Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

function btnDesencrip(){

    if (validarEntrada(inpuText.value)) {
            prinText.innerHTML = desencriptarText(inpuText.value);
            document.querySelector('.content__inputText--btnencrip').setAttribute('disabled',true);
            document.querySelector('.content__inputText--btnencrip').style.cursor = "auto";
    } else {
        // El texto ingresado contiene caracteres no permitidos
        valueInvalid();
    }

}

function desencriptarText(textAdesencriptar){

    //Debe funcionar solo con letras minúsculas
    textAdesencriptar = textAdesencriptar.toLowerCase();
    
    for (let i = 0; i < arrayKeys.length; i++){
        if(textAdesencriptar.includes(arrayKeys[i][1])){
            textAdesencriptar=textAdesencriptar.replaceAll(arrayKeys[i][1],arrayKeys[i][0])
        }
    }

    return textAdesencriptar;
}

function valueInvalid(){
    document.querySelector('.content__printText--notfoundText').style.display = "grid";
    document.querySelector('.content__printText--encripDescrip').style.display = "none";
}

function valuesDefault(){
    document.querySelector('.content__printText--notfoundText').style.display = '';
    document.querySelector('.content__printText--encripDescrip').style.display = '';
    document.querySelector('.content__inputText--btndesencrip').removeAttribute('disabled');
    document.querySelector('.content__inputText--btndesencrip').style.cursor = '';
    document.querySelector('.content__inputText--btnencrip').removeAttribute('disabled');
    document.querySelector('.content__inputText--btnencrip').style.cursor = '';
    prinText.innerHTML = '';
}

inpuText.addEventListener('click',function(){
    valuesDefault();
    });