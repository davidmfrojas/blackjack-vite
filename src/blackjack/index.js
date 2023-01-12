import _ from 'underscore';

import {crearNuevoDeck, pediCarta, valorCarta, turnoComputadora, crearCartaHtml} from './usecases';

/*
 **Juego de BlackJack comunmente conocido como 21
 * consiste en acercarse a los 21 íuntos o lo más posible sin pasarse de los 21 puntos
 * gana quien alcance los 21 puntos o los más cercano a ellos
 * se pierde si se pasa de los 21 puntos
 * Cartas
 * C Clubs - Trebol
 * D Diamonds - Diamante
 * H Hearts - Corazones
 * S Spades - espadas
 */

//deck es la baraja de cartas
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//referencias del HTML
const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

let puntosHTML = document.querySelectorAll('small');

deck = crearNuevoDeck(tipos, especiales);


//DOM Document Object Model
//conjunto de objetos anidados para crear un documento html o xml y proveer acceso
//dinamico mediante programación a sus elementos y manipularlos

//document.querySelector retorna el primer elemento que cumple la condición
//document.querySelectorAll retorna todos los elementos que cumplen la condición
//usan selectores por id usar #id, por clase usar punto .clase

//innerText permite establecer el texto dentro del elemento
//innerHTML permite establecer html dentro del elemento

//crea un nuevo elemento
//document.createElement("tagname")

//agregar el elemento 
//elemento.append(nuevoElemento);

//Eventos
//se asigna el evento clic y la función callback que será llamada al accionar el botón
btnPedir.addEventListener("click", () => {
    const carta = pediCarta(deck);
    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerHTML = puntosJugador;

    const imgCarta = crearCartaHtml(carta);
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    } else if (puntosJugador === 21) {
        console.warn('21, genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }
});

//se asigna el evento clic y la función callback que será llamada al accionar el botón
btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

//se asigna el evento clic y la función callback que será llamada al accionar el botón
btnNuevo.addEventListener("click", () => {

    deck = crearNuevoDeck(tipos, especiales);

    puntosJugador = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = puntosJugador;
    puntosHTML[1].innerText = puntosComputadora;

    divCartasJugador.innerHTML = "";
    divCartasComputadora.innerHTML = "";

    btnPedir.disabled = false;
    btnDetener.disabled = false;
});