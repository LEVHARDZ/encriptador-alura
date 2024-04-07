const textoIngresado = document.getElementById('campoTextoED');
const textoEcripDesencrip = document.getElementById('areaTextoED');

/* Las "llaves" de encriptación que utilizaremos son las siguientes: */
const arrayKeys = [
    ['e', 'enter'], //La letra "e" es convertida para "enter"
    ['i', 'imes'], //La letra "i" es convertida para "imes"
    ['a', 'ai'], //La letra "a" es convertida para "ai"
    ['o', 'ober'], //La letra "o" es convertida para "ober"
    ['u', 'ufat'], //La letra "u" es convertida para "ufat"
];

/* No deben ser utilizados letras con acentos ni caracteres especiales */
function validarEntrada(textoValido) {
    // Expresión regular que permite letras y números solamente
    let patron = /^[a-zA-Z0-9]*$/;
    return patron.test(textoValido);
}

function btnEncrip(){
    let inpuText = textoIngresado;
    let prinText = textoEcripDesencrip;

    if (validarEntrada(inpuText.value)) {
            prinText.innerHTML = encriptarText(inpuText.value);
    
    } else {
        // El texto ingresado contiene caracteres no permitidos
        prinText.innerHTML = "El texto contiene caracteres no permitidos, favor de ingresar texto válido";
        prinText.style.fontWeight = "bold";
        prinText.style.color = "red";
        textoIngresado.addEventListener('click',function(){
            textoEcripDesencrip.value = '';
            inpuText.value = '';
        });
    }
    
}

function encriptarText(textAencriptar){

    /* Debe funcionar solo con letras minúsculas */
    textAencriptar = textAencriptar.toLowerCase();

    for (let i = 0; i < arrayKeys.length; i++){
        if(textAencriptar.includes(arrayKeys[i][0])){
            textAencriptar=textAencriptar.replaceAll(arrayKeys[i][0],arrayKeys[i][1])
        }
    }

    return textAencriptar;
}
/* Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. */