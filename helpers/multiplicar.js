require('colors');
const fs = require('fs');

const crearArchivo = async (base = 5, listar = false) => {
    try {

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log(salida);
        }

        fs.writeFileSync(`./files/tabla-${base}.txt`, salida);

    } catch (error) {
        throw error;
    }
    return `tabla-${base}.txt`;
}

module.exports = {
    crearArchivo
}