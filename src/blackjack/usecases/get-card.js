/**
 * esta función me permite tomar una carta
 * @param {Array<String>} deck baraja
 * @returns {String} retorna una carta de la baraja
 */
const pediCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    return carta;
}

export default pediCarta;