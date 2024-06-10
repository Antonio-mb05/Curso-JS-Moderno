const producto = "Monitor 20 Pulgadas";

// .repeat te permite repetir una cadena
const texto = " en promoción".repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);


// Split permite dividir un String
const actividad = "Estoy aprendiendo JavaScripts";
console.log(actividad.split(" "));

const hobbies = "Leer, Andar, Escuchar música, Jugar Futbol";
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JavaScript";
console.log(tweet.split("#"));