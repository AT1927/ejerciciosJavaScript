//Presentado por: Edgar Andres Torres Muñoz
//ENTREGA EJERCICIOS DE BUCLES - JAVA SCRIPT
//----------------------------------------------------------------------------------------------------
//Ejercicio #1:
console.log("°**|Ej#1. TABLA DE MULTIPLICAR|**°");
var numero = 0;
var resultado = 0;
numero = prompt("Cual es su numero: ");

for (i = 1; i <= 10; i++) {
    resultado = numero * i;
    console.log("A continuación la Tabla del " + numero);
    console.log(numero + " x " + i + " = " + resultado);
}
//----------------------------------------------------------------------------
//Ejercicio #2:
console.log("°**|Ej#2. NUMEROS ACUMULADO|**°");
var numero;
var acumulado = 0;

if(numero === 0){
    console.log("Acumulado: "+acumulado);
    console.log("El programa a terminado!")
} else {
    acumulado += numero;
    console.log("Acumulado actual: "+acumulado);
}
//----------------------------------------------------------------------------
//Ejercicio #3:
console.log("°**|Ej#3. ADIVINA EL NUMERO|**°");
var numero = 0;
let numeroGanador = 88;
var intentos = 0;

do {
    numero = prompt("Cual es su numero: ");
    if(numero < numeroGanador){
        console.log("El numero ingresado esta por debajo!");
        numero = prompt("Cual es su numero: ");
        intentos++;
    } else if(numero > numeroGanador){
        console.log("El numero ingresado esta por encima!");
        numero = prompt("Cual es su numero: ");
        intentos++;
    }
    console.log("Felicitaciones! Adivinaste el numero en "+intentos+" intentos");
    break
} while (numero != numeroGanador);

//----------------------------------------------------------------------------
//Ejercicio #4:
console.log("°**|Ej#3. NUMEROS PRIMOS|**°");
var numero = parseInt(prompt("Ingresa un número:"));
// Verificar si el número es primo
let esPrimo = true;

// Un número primo solo tiene divisores hasta su mitad
for (let i = 2; i <= numero / 2; i++) {
    // Si el número es divisible por algún otro número que no sea 1 o él mismo, no es primo
    if (numero % i === 0) {
        esPrimo = false;
        break; // Salir del bucle tan pronto como se encuentre un divisor
    }
}
// Mostrar resultado:
if (esPrimo) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}

//----------------------------------------------------------------------------

//Ejercicio #5:
console.log("°**|Ej#5. DIVISORES DE NUMEROS|**°");
var numero = prompt("Ingrese un numero: ");

console.log(`Divisores de ${numero}:`);
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }


//----------------------------------------------------------------------------

//Ejercicio #6:
console.log("°**|Ej#6. ELEMENTOS ARRAY|**°");    
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Recorrer el array e imprimir cada elemento en la consola
for (let i = 0; i < array.length; i++) {
    console.log("Elemento " + (i + 1) + ": " + array[i]);
}

//----------------------------------------------------------------------------

//Ejercicio #7:
console.log("°**|Ej#7. ELEMENTOS ARRAY|**°");    
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Recorrer el array e imprimir cada elemento en la consola
for (let i = 0; i < array.length; i++) {
    i=i*i;
    console.log("Elemento " + (i + 1) + ": " + array2[i]);
}

//----------------------------------------------------------------------------

//Ejercicio #8:
console.log("°**|Ej#8. ARRAY DE OBJETOS|**°");

const arrayFamilia = [
    {
        nombre: "Edgar",
        edad: 70,
        relacion: "Padre",
        residencia: "San Juan de Pasto"
    },
    {
        nombre: "Patricia",
        edad: 60,
        relacion: "Madre",
        residencia: "Cali"
    },
    {
        nombre: "Camilo",
        edad: 27,
        relacion: "Hermano",
        residencia: "San Juan de Pasto"
    },
    {
        nombre: "Rosana",
        edad: 80,
        relacion: "Abuela",
        residencia: "Cali"
    },
    {
        nombre: "Juan",
        edad: 90,
        relacion: "Abuelo",
        residencia: "Cali"
    }
];

// Recorremos el array y mostramos un mensaje de presentación para cada miembro
arrayFamilia.forEach((miembro) => {
    console.log(`Hola, soy ${miembro.nombre}, tengo ${miembro.edad} años y soy su${miembro.relacion}. Vivo en ${miembro.residencia}.`);
});
//----------------------------------------------------------------------------

//Ejercicio #9:
console.log("°**|Ej#9. ELEMENTOS ARRAY|**°");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        console.log(numeros[i]);
    }
}
//----------------------------------------------------------------------------

//Ejercicio #10:
console.log("°**|Ej#10. SUMATORIA PARES/IMPARES|**°");
var sumaImpares = 0;
var sumaPares = 0;
while (true) {
    const numero = parseInt(prompt("Ingresa un número (0: Salir):"));

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        sumaPares += numero;
    } else {
        sumaImpares += numero;
    }
}
//----------------------------------------------------------------------------

//Ejercicio #11:
console.log("°**|Ej#11. ELEMENTOS ARRAY|**°");

//----------------------------------------------------------------------------

//Ejercicio #12:
console.log("°**|Ej#12. ELEMENTOS ARRAY|**°");

//----------------------------------------------------------------------------

//Ejercicio #13:
console.log("°**|Ej#13. PIEDRA-PAPEL-TIJERA|**°");

//----------------------------------------------------------------------------

//Ejercicio #14:
console.log("°**|Ej#14. TRIANGULO|**°");

//----------------------------------------------------------------------------

//Ejercicio #15:
console.log("°**|Ej#15. TRIANGULO|**°");

//----------------------------------------------------------------------------

//Ejercicio #16:
console.log("°**|Ej#16. ORDENAMIENTO BURBUJA|**°");
