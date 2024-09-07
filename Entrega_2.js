// Variables usando 'let'
let nombre = 'Ana';
let edad = 25;
let ciudad = 'Barcelona';
let profesion = 'Ingeniero';
let activo = false;

// Variables usando 'const'
const PI = 3.14;
const MAX = 100;
const URL = 'https://example.com';
const CATEGORIAS = 4;
const ESTADO = 'activo';

// Funciones flecha

// Con cero parámetros
const saludo = () => '¡Hola!';

// Con un parámetro
const cuadrado = x => x * x;

// Con dos parámetros
const suma = (a, b) => a + b;

// Con cero parámetros, más lógica
const diaDeLaSemana = () => {
  const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  return dias[new Date().getDay()];
};

// Con un parámetro, más lógica
const validarEdad = edad => 
  edad < 0 ? 'Edad no válida' :
  edad < 18 ? 'Menor de edad' :
  edad < 65 ? 'Adulto' : 'Senior';

// Con dos parámetros, más lógica
const multiplicarArray = (arr, factor) => arr.map(num => num * factor);
