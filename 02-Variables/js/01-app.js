/*
    =======================================
    ==== Creación de variables con var ====
    ========== Notacion antigua ===========
    =======================================
*/

// Inicializar variables con un valor
var producto = "Monitor de 24 Pulgadas";
console.log(producto);
// Las variables se pueden reasignar
producto = "Monitor de 19 pulgadas";
console.log(producto);

// JavaScript es un lenguaje dinamico, no se especifica tipo de dato
producto = 20;
console.log(producto);


// Se puede instanciar una variable sin inicializarla
var disponible;
disponible = true;
disponible = false;

// Inicializar multiples variables
var categoria = "Ordenadores",
    marca = "PCcomponentes",
    calificacion = 5;

// Las variables no pueden empezar con numeros
// var 99dias; X
var dias99; 

// var 01_; X
var _01;

var nombreProducto; //Pascal , la mas utilizada
var nombre_producto_categorias; // Snake
var Producto; // Se usa en clases