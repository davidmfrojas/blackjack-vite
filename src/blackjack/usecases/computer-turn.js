import {pediCarta, valorCarta, crearCartaHtml} from "./";

/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora requiere para ganar
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar los puntos
 * @param {Array<String>} deck baraja
 */
const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if(!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if(!puntosHTML) throw new Error('Argumento puntosHTML es necesario');
    if(!puntosHTML) throw new Error('Argumento divCartasComputadora es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pediCarta(deck);
        puntosComputadora += valorCarta(carta);
        puntosHTML.innerHTML = puntosComputadora;

        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append(imgCarta);

        //si el jugador tiene mas de 21 puntos
        //con cualquier carta gana la computadora
        if (puntosMinimos > 21) {
            break;
        }

    }
    //mientras el puntaje de la computadora sea menor al puntaje del jugador y también
    //el puntaje del jugador sea menor o igual a 21 se puede pedir cartas
    while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    
    /*Mi solución
    if(puntosJugador > 21 && puntosComputadora < puntosJugador){
        alert("Computadora gana");
    }
    if(puntosJugador === puntosComputadora){
        alert("Nadie gana");
    }
    if( (puntosJugador <= 21 && puntosComputadora < puntosJugador) || 
        (puntosComputadora > 21 && puntosJugador <= 21) ){
        alert("Jugador gana");
    }*/
    setTimeout(() => {
        if(puntosComputadora === puntosMinimos){
            alert("Nadie gana :(");
        }
        //la logica impide que la computadora pierda cuando el jugador tiene más de 21 puntos
        else if(puntosMinimos > 21){
            alert("Computadora gana XD");
        }
        else if(puntosComputadora > 21){
            alert("Jugador gana :)");
        }
        else{
            alert("Computadora gana XD");
        }
    }, 200);
}


export default turnoComputadora;