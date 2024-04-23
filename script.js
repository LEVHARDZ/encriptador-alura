const inpuText = document.getElementById('campoTextoED');
const prinText = document.getElementById('areaTextoED');

//Las "llaves" de encriptación que utilizaremos son las siguientes:
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
const arrayKeysOne = ['e','i','a','o','u'];
const arrayKeysTwo = ['enter','imes','ai','ober','ufat'];

function btnEncrip(){
    for (let i = 0; i < arrayKeysTwo.length; i++){
        if (inpuText.value.includes(arrayKeysTwo[i])){
            valueInvalid();
        }
    }
    prinText.innerHTML = encriptarText(inpuText.value);
    document.querySelector('.content__inputText--btndesencrip').setAttribute('disabled',true);
    document.querySelector('.content__inputText--btndesencrip').style.cursor = "auto";
}

function btnDesencrip(){
    for (let i = 0; i < arrayKeysOne.length; i++){
        if (inpuText.value.includes(arrayKeysOne[i]) && inpuText.value.includes(arrayKeysTwo[i])){
                prinText.innerHTML = desencriptarText(inpuText.value);
                document.querySelector('.content__inputText--btnencrip').setAttribute('disabled',true);
                document.querySelector('.content__inputText--btnencrip').style.cursor = "auto";
                break;
        } else{
            document.querySelector('.content__inputText--btnencrip').setAttribute('disabled',true);
            document.querySelector('.content__inputText--btnencrip').style.cursor = "auto";
            valueInvalid();
            }
    }    
}

function encriptarText(word){
    //Debe funcionar solo con letras minúsculas
    word = word.toLowerCase();

    for (let i = 0; i < arrayKeysOne.length; i++){
        if(word.includes(arrayKeysOne[i])){
            word = word.replaceAll(arrayKeysOne[i],arrayKeysTwo[i]);
        }
    }
    return word;
}
//Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

function desencriptarText(word){
    //Debe funcionar solo con letras minúsculas
    word = word.toLowerCase();
    
    for (let i = 0; i < arrayKeysTwo.length; i++){
        if(word.includes(arrayKeysTwo[i])){
            word = word.replaceAll(arrayKeysTwo[i],arrayKeysOne[i]);
        }
    }
    return word;
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

//No deben ser utilizados letras con acentos ni caracteres especiales
function validarEntrada(textoValido) {
    // Expresión regular que permite letras y números solamente
    let patron = /^[a-zA-Z0-9]*$/;
    return patron.test(textoValido);
}

function copiarTexto() {
    var textarea = document.getElementById('areaTextoED');
    var texto = textarea.value;

    navigator.clipboard.writeText(texto).then(function() {
        // Cambiar el texto del botón
        var boton = document.querySelector('.content__printText--btncopy');
        boton.textContent = "¡Texto copiado!";
        
        // Restaurar el texto del botón después de un tiempo
        setTimeout(function() {
            boton.textContent = "Copiar";
        }, 5000); // Cambiar el texto de vuelta después de 2 segundos
    }, function(err) {
        mostrarMensaje("Error al copiar el texto.");
    });
}

function mostrarMensaje(mensaje) {
    // Muestra un mensaje al usuario
    alert(mensaje);
}

inpuText.addEventListener('click',function(){
    valuesDefault();
    });