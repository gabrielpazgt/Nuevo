// Importaciones desordenadas para probar organizeImports

// Función con paréntesis y llaves para probar bracketPairs
function saludo(nombre) {
  if (nombre) {
    console.log(`Hola, ${nombre}!`); // Comillas simples activan prettier
  } else {
    console.log('Hola, invitado!');
  }
}

// Objeto para ver formato
const persona = {
  nombre: 'Gabriel',
  edad: 25,
  habilidades: ['JS', 'TS', 'React'],
};

// Función flecha para probar formateo
const sumar = (a, b) => {
  return a + b;
};

saludo("Gabriel");
console.log(sumar(2, 3));
