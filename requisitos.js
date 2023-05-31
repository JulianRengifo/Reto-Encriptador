
function validarTexto(textarea) {
    //Guarda el valor actual del <textarea> en la variable valor.
    var valor = textarea.value;
    //Utiliza la función quitarAcentos para eliminar los acentos del texto ingresado.
    var valorSinAcentos = quitarAcentos(valor);
    //Convierte el texto sin acentos a minúsculas utilizando el método toLowerCase().
    var valorEnMinusculas = valorSinAcentos.toLowerCase();

    // Remover caracteres especiales
    //Remueve todos los caracteres que no sean letras minúsculas ni espacios utilizando la expresión regular /[^a-z\s]/g.
    var valorFinal = valorEnMinusculas.replace(/[^a-z\s]/g, '');

    // Actualizar el valor del textarea
    textarea.value = valorFinal;
}


function quitarAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
