require('colors');
const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

// console.log(process.argv);
// console.log(argv);

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'.green))
    .catch(error => console.log(error));

