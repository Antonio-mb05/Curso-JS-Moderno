// Preguntamos nombre y guardamos en variable
const nombre = prompt("Cual es tu nombre?");

//Muestra la variable en consola
console.log("Hola "+nombre);

// Vacía el .Contenido del div y muestra el nombre en pantalla
document.querySelector(".contenido").innerHTML = `${nombre} está aprendiendo JavaScript `;