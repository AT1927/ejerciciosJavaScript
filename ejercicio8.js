//Ej8: Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
//llamada numeroIncognita y que permita en 3 intentos adivinar el número...

let numeroIncognita = 8;
let intentos = 0;

console.log("*****|ADIVINA EL NUMERO|*****");
console.log(">Recuerda que tienes 3 intentos...");

var numeroIngresado1 = parseInt(prompt("Intenta adivinar el número (entre 1 y 10):"));
if (numeroIngresado1 === numeroIncognita) {
    alert("Ganaste, has adivinado el número!");
} else if (numeroIngresado1 < numeroIncognita) {
    alert("El número ingresado es menor, vuelve a intentarlo.");
    var numeroIngresado2 = parseInt(prompt("Intenta adivinar el número (entre 1 y 10):"));
    if (numeroIngresado2 === numeroIncognita) {
        alert("¡Ganaste, has adivinado el número!");
    } else if (numeroIngresado2 < numeroIncognita) {
        alert("El número ingresado es menor, vuelve a intentarlo.");
        var numeroIngresado3 = parseInt(prompt("Intenta adivinar el número (entre 1 y 10):"));
        if (numeroIngresado3 === numeroIncognita) {
            alert("¡Ganaste, has adivinado el número!");
        } else {
            alert("Ya no tienes mas intentos. El número gnador era:" + numeroIncognita);
        }
    } else {
        alert("El número ingresado es mayor, vuelve a intentarlo.");
        var numeroIngresado3 = parseInt(prompt("Intenta adivinar el número (entre 1 y 10):"));
        if (numeroIngresado3 === numeroIncognita) {
            alert("¡Ganaste, has adivinado el número!");
        } else {
            alert("Lo siento, has agotado todos tus intentos. El número era " + numeroIncognita);
        }
    }
} else {
    alert("El número ingresado es mayor, vuelve a intentarlo.");
    var numeroIngresado2 = parseInt(prompt("Intenta adivinar el número (entre 1 y 10):"));
    if (numeroIngresado2 === numeroIncognita) {
        alert("¡Ganaste, has adivinado el número!");
    } else if (numeroIngresado2 < numeroIncognita) {
        alert("El número ingresado es menor, vuelve a intentarlo.");
        var numeroIngresado3 = parseInt(prompt("Intenta adivinar el número (entre 1 y 10):"));
        if (numeroIngresado3 === numeroIncognita) {
            alert("¡Ganaste, has adivinado el número!");
        } else {
            alert("Lo siento, has agotado todos tus intentos. El número era " + numeroIncognita);
        }
    } else {
        alert("El número ingresado es mayor, vuelve a intentarlo.");
        var numeroIngresado3 = parseInt(prompt("Intenta adivinar el número (entre 1 y 10):"));
        if (numeroIngresado3 === numeroIncognita) {
            alert("¡Ganaste, has adivinado el número!");
        } else {
            alert("Lo siento, has agotado todos tus intentos. El número era " + numeroIncognita);
        }
    }
}