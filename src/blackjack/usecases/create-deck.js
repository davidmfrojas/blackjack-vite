import _ from 'underscore';

export const nombreTest = 'Prueba David';

/**
 * Esta función crea una nueva baraja
 * @param {Array<String>} tiposDeCarta - Ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales - Ejemplo ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna una nueva baraja
 */
const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('TiposDeCarta es obligatorio como un arreglo de string');

    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(`${i}${tipo}`);
        }
    }
    for (let tipo of tiposDeCarta) {
        for (let especial of tiposEspeciales) {
            deck.push(`${especial}${tipo}`);
        }
    }

    //se utiliza la biblioteca underscore.js
    //la funcionalidad de la biblioteca se almacena en la variable underscore "_"
    deck = _.shuffle(deck);
    return deck;
}

//exportación por defecto, permite importar este método por defecto y renombrarlo con lo que se guste sin usar un alias
//ver index.js (donde se importa)
export default crearDeck;