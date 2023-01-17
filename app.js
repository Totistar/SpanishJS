//Incluyo el modulo con la clase de analisis sintactico para español.
const spanishDb = require('./modules/spanish');

class span {
    constructor(texto) {
        let spanish = new spanishDb();
        spanish.loadBdFromFile();
        this.texto = sin_salto;
        let tmp 	= spanish.analyseTextArray(texto);
        return tmp;
    }
}

