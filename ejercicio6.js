//Ej6: Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar 
//si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y 
//tener una visión de 8 de 10 como mínimo.

// Capturamos datos por teclado:
const nombre = prompt("Ingresa nombre: ");
const edad = parseInt(prompt("Ingresa edad: "));
const altura = parseInt(prompt("Ingresa altura (cm): "));
const vision = parseFloat(prompt("Ingresa tu visión (0-10): "));

// Condicionales:
if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log(">Resultado...")
    console.log(nombre + " --> Está capacitado para conducir!");
} else {
    console.log(">Resultado...")
    console.log(nombre + " --> No está capacitado para conducir!");
}