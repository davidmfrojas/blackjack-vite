/**
 * esta función devuelve el valor de la carta
 * @param {String} carta 
 * @returns {Number} retorna el valor de la carta
 */
const valorCarta = (carta) => { //carta = 2D por ejemplo
    const valor = carta.substring(0, carta.length - 1); //valor en carta[0] = 2 por ejemplo.
    return (isNaN(valor)) ? (valor === "A") ? 11 : 10 :
        parseInt(valor);
}

export default valorCarta;