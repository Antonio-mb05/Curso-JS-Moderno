const producto = "Monitor 20 Pulgadas";

// .replace para remplazar
console.log(producto);
console.log(producto.replace("Pulgadas",'"'));
console.log(producto.replace("Monitor","Monitor Curvo"));

// .slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(8,1)); //No va

// Alternativa a Slice
console.log(producto.substring(0,10));
console.log(producto.substring(8,0)); //Si va


const usuario = "Antonio";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));