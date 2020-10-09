const obtenerChiste = require("./library");

// Codigo funcion callback

let contarChiste = function(chiste) {
        let guardaChiste = chiste[0];
        console.log(guardaChiste.setup);
        console.log(guardaChiste.punchline);

    }
    // Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(contarChiste);