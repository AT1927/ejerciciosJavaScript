// Ej #10: Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre 
//en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla 
//que uno de los jugadores ha hecho trampa.

console.log("*****|PIEDRA PAPEL O TIJERAS|*****");

var jugador1 = prompt("Jugador 1 - (PIEDRA, PAPEL o TIJERAS): ").toUpperCase();
// Validar la opción del jugador 1
if (jugador1 !== "PIEDRA" && jugador1 !== "PAPEL" && jugador1 !== "TIJERAS") {
    alert("¡Jugador 1 ha hecho trampa!");
} else {
    // Pedir al segundo jugador que ingrese su opción
    var jugador2 = prompt("Jugador 1 - (PIEDRA, PAPEL o TIJERAS): ").toUpperCase();
    // Validar la opción del jugador 2
    if (jugador2 !== "PIEDRA" && jugador2 !== "PAPEL" && jugador2 !== "TIJERAS") {
        alert("¡Jugador 2 ha hecho trampa!");
    } else {
        // Determinar el ganador o si hay empate
        if (jugador1 === jugador2) {
            alert("¡Empate!");
        } else if (
            (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
            (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
            (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
        ) {
            alert("¡Jugador 1 ha ganado!");
        } else {
            alert("¡Jugador 2 ha ganado!");
        }
    }
}
  