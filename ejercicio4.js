//Ej4: Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más chico.

const numero1 = 2;
const numero2 = 3;
const numero3 = 4;

if (numero1 <= numero2 && numero1 <= numero3) {
    console.log(numero1+ " Es el numero más pequeño!");
} else if (numero2 <= numero1 && numero2 <= numero3) {
    console.log(numero2+ " Es el numero más pequeño!");
} else {
    console.log(numero3+ " Es el numero más pequeño!");
}