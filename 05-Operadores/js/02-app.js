const num1 = 20;
const num2 = "20";
const num3 = 30;

// Revisar si 2 numeros son iguales

console.log(num1 == num3 );
console.log(num1 == num2 );

// Comparador estricto
console.log(num1 === num2 );
console.log(num1 === parseInt(num2) );
console.log(typeof num1);
console.log(typeof num2);

// Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2 );
console.log(num1 != num2 );
console.log(num1 !== num2 );