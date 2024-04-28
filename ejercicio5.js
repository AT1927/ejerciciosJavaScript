//Ej5: Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura 
//imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.

// Objetos personas:
const persona1 = {
    nombre: "Andres",
    edad: 30,
    altura: 165
};

const persona2 = {
    nombre: "Ana",
    edad: 30,
    altura: 160
};

// Condicionales para la altura de las personas:
if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es la persona más alta!");
} else if (persona2.altura > persona1.altura) {
    console.log(persona2.nombre + " es la persona más alta!");
} else {
    console.log(persona1.nombre+" y "+persona2.nombre+" tienen la misma altura!");
}

// Condicionales para la edad de las personas:
if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es la persona de mayor edad!");
} else if (persona2.edad > persona1.edad) {
    console.log(persona2.nombre + " es la persona de mayor edad!");
} else {
    console.log(persona1.nombre+" y "+persona2.nombre+" tienen la misma edad!");
}