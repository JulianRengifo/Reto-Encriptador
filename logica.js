var botonEncriptar = document.querySelector(".btn-encriptar"); /* recupera la informacion atraves de la clase */
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muñeco = document.querySelector(".muñeco");
var mensaje = document.querySelector(".mensaje"); /* Aparecen al recargar la imagen */
var mensajeIngresa = document.querySelector(".mensaje-ingresa");
var resultado = document.querySelector(".texto__resultado");
var botonCopiar = document.querySelector(".btn-copiar");
var txtEntrada = document.querySelector(".txt-area");


botonEncriptar.onclick = encriptar; /* Cuando se de click en el boton va a cumplir la funcion declarada */
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;


function encriptar() {
    ocultarAdelante();
    resultado.textContent = encriptarTexto(recuperarMensaje()); /* Al dar click en el boton encripar llama la funcion encriptarTexto ejecutando esta funcion y luego llama la funcion recuperarMensaje para que el mensaje encriptado aparezca en el campo del textarea */
}

function desencriptar(){
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(recuperarMensaje());
}

function copiarTexto(){
    
    navigator.clipboard.writeText(resultado.innerHTML);
    
}

function recuperarMensaje() {
  /* Recupera el texto del area */
    var area = document.querySelector(".txt-area");
    return area.value; /* Retorna el valor del area */
}

function ocultarAdelante() {
  /* Cuando se llame esta funcion, agregar la clase ocultar para el muñeco y los dos mensajes, para ocultarlos */
    muñeco.classList.add("ocultar");
    mensaje.classList.add("ocultar");
    mensajeIngresa.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
  var texto = mensaje; /* Mensaje recuperado de txt area */
  var textoFInal = ""; /* Retorna en texto encriptado */

    for (var i = 0; i < texto.length; i++) {
    /* corta deacuerdo a la longuitud del texto, itera cuatro veces con "hola", e incrementa en 1 hasta que llegue a 4 con "hola" */
    if (texto[i] == "a") {
      /* En cada vuelta de iteracion si la primera letra es igual a "a" sera igual a textoFInal se acumulan en textoFinal + la letra que se debe encriptar por ejemplo "a"  */
        textoFInal = textoFInal + "ai";
    }

    else if (texto[i] == "e") {             /* Se usa else if para que al encriptar la letra solo aparezca la alteracion de dicha letra sin la letra original, sin else if apareceria hola = "hoberolaia" */
        textoFInal = textoFInal + "enter";
    }

    else if (texto[i] == "i") {
        textoFInal = textoFInal + "imes";
    }

    else if (texto[i] == "o") {
        textoFInal = textoFInal + "ober";
    }

    else if (texto[i] == "u") {
        textoFInal = textoFInal + "ufat";
    } 
    else {
        textoFInal = textoFInal + texto[i]; /* Si no encuntra vocales agregar esa letra tal cual al textoFInal */
    }
    }
  return textoFInal; /* Envia el mensaje ya encriptado */
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFInal ="";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a") {
            /* En cada vuelta de iteracion si la primera letra es igual a "a" sera igual a textoFInal se acumulan en textoFinal + la letra que se debe encriptar por ejemplo "a"  */
            textoFInal = textoFInal + "a";
            i = i + 1;   /* Se salta las otras letras apartir de 1, recordando que para a es = ai y se empieza a contar desde 0 que es igual 0 = "a" y 1 = "i", dejando solo a  */
        }

        else if (texto[i] == "e") {
            textoFInal = textoFInal + "e";
            i = i + 4;    /* omite las las letras 1,2,3,4 dejando solo 0 = e */
        }

        else if (texto[i] == "i") {
            textoFInal = textoFInal + "i";
            i = i + 3;
        }

        else if (texto[i] == "o") {
            textoFInal = textoFInal + "o";
            i = i + 3;
        }

        else if (texto[i] == "u") {
            textoFInal = textoFInal + "u";
            i = i + 3;
        } 
        else {
              textoFInal = textoFInal + texto[i]; /* Si no encuntra vocales agregar esa letra tal cual al textoFInal */
        }
    }

    return textoFInal;
}


