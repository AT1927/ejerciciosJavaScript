// Ej #12:

console.log("*****|OPERACIONES MATEMATICAS BASICAS|*****");

const num1 = parseFloat(prompt('Ingresa primer numero:'));
const num2 = parseFloat(prompt('Ingresa segundonumero:'));
const operacion = prompt('Ingresa la operación (suma, resta, multiplicacion o division):');

switch (operacion) {
    case 'suma':
      console.log(valor1 + valor2);
    case 'resta':
        console.log(valor1 - valor2);
    case 'multiplicacion':
        console.log(valor1 * valor2);
    case 'division':
      if (valor2 !== 0) {
        console.log(valor1 / valor2);
      } else {
        console.log("Error! division x 0!");
      }
    default:
      console.log("Operacion erronea!")
}