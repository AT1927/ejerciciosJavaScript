//Ejercicio #9: Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años),
//adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de 
//ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.

let edad = 0;
edad = prompt("Ingrese su edad: ");

if(edad>0 && edad<=12){
    console.log("Eres un infante");
} else if(edad>12 && edad<=18){
    console.log("Eres un adolescente")
} else if(edad>18 && edad<=19){
    console.log("Eres un mayor joven")
} else if(edad>45){
    console.log("Eres un anciano")
} else if(edad === 100){
    console.log("En realidad tienes esa edad?")
} else{
    console.log("Edad incorrecta!")
}