//Ej7: Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase(vip o normal), si posee entrada
//(si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.

console.log(">>> INGRESO A EVENTO XYZ <<<")
const nombre = prompt("Ingrese su nombre: ")
const pase = prompt("Ingrese tipo de pase (vip o normal): ");
const tieneEntrada = prompt("Posee entrada? (si o no): ").toLowerCase();

if (nombre === "Andres" || pase === "vip") {
    console.log("¡Bienvenid@, "+nombre);
    if (tieneEntrada === "si" || tieneEntrada === "s" || tieneEntrada === "true") {
        const usarEntrada = prompt("¿Desea utilizar su entrada? (si o no):").toLowerCase();
        if (usarEntrada === "si" || usarEntrada === "s" || usarEntrada === "true") {
            console.log("¡Bienvenid@, "+nombre + "...Disfruta del evento.");
        } else {
            console.log("¡Bienvenido/a, " + nombre + "!");
        }
    } else {
        console.log("¡Bienvenido/a, " + nombre + "!");
    }
} else {
    const comprarEntrada = prompt("¿Desea comprar una entrada? (si o no):").toLowerCase();
    if (comprarEntrada === "si" || comprarEntrada === "s" || comprarEntrada === "true") {
        const dineroDisponible = parseFloat(prompt("Ingrese la cantidad de dinero disponible:"));
        if (dineroDisponible >= 1000) {
            console.log("¡Venta de entrada exitosa! ¡Bienvenido/a, " + nombre + "!");
        } else {
            console.log("Lo siento, " + nombre + ", no tienes suficiente dinero para comprar una entrada.");
        }
    } else {
        console.log("Gracias por tu visita, ¡hasta luego!");
    }
}