//Ej #13:

console.log("*****|DOCUMENTO NACIONAL DE IDENTIDAD|*****");

var numeroDocumento = prompt("Ingrese número de documento: ");
var nombre = prompt("Ingrese nombre: ");
var apellido = prompt("Ingrese apellido: ");
var genero = prompt("Ingrese genero: ");
var edad = prompt("Ingrese edad: ");
var estatura = prompt("Ingrese estatura: ");
var tipoSangre = prompt("Ingrese tipo de sangre: ");
var fechaNacimiento = prompt("Ingrese fecha de nacimiento (DD/MM/AAAA): ");
var lugarNacimiento = prompt("Ingrese lugar de nacimiento: ");
var fechaExpedicion = prompt("Ingrese fecha de expedicion (DD/MM/AAAA): ");
var lugarExpedicion = prompt("Ingrese lugar de expedicion: ");
var nacionalidad = prompt("Ingrese nacionalidad: ");


//Confirmas datos:
var mensajeDatos = "Los datos ingresados son...\n\n" +
                   "Número de documento: " + numeroDocumento + "\n" +
                   "Nombre: " + nombre + "\n" +
                   "Apellido: " + apellido + "\n" +
                   "Genero: " + genero + "\n" +
                   "Edad: " + edad + "\n" +
                   "Estatura: " + estatura + "\n" +
                   "Tipo de sangre: " + tipoSangre + "\n" +
                   "Fecha de nacimiento: " + fechaNacimiento + "\n" +
                   "Lugar de nacimiento: " + lugarNacimiento + "\n" +
                   "Fecha de expedicion: " + fechaExpedicion + "\n" +
                   "Lugar de expedicion: " + lugarExpedicion + "\n" +
                   "Nacionalidad: " + nacionalidad + "\n\n" +
                   "> Los datos son correctos(s/n)?";
                   var confirmacion = prompt(mensajeDatos).toLowerCase();

// Verificar la confirmación del usuario
if (confirmacion === "s") {
    
    var dni = {
        numeroDocumento: numeroDocumento,
        nombre: nombre,
        apellido: apellido,
        genero:genero,
        edad:edad,
        estatura: estatura,
        tipoSangre:tipoSangre,
        fechaNacimiento: fechaNacimiento,
        lugarNacimiento: lugarNacimiento,
        fechaExpedicion: fechaExpedicion,
        lugarExpedicion: lugarExpedicion,
        nacionalidad: nacionalidad
    };

    // Muestra los datos dni...
    console.table(dni);
    console.log("Registro exitoso.");
} else {
    alert("Vuelva a intentarlo en 1 mes.");
}