const fs = require('fs');
const path = require('path');

const ruta = path.join(__dirname, '_countries.json'); 

// Leer y parsear el archivo JSON
let cadenatxt = fs.readFileSync(ruta, 'utf-8');
let objetoJs = JSON.parse(cadenatxt);

// Imprimir el nombre y la capital de cada país
objetoJs.forEach(pais => {
    console.log(`País: ${pais.name.common}, Capital: ${pais.capital}`);
});
