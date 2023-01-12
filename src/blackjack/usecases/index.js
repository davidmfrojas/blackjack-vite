//esto es una rchivo de barril, se utiliza para exportar lo importado en un unico archivo

//al tener un export default se puede asignar el nombre que guste a lo importado por defecto
//se puede importar del modulo, separando por ,e importando normalmente
import crearNuevoDeck, {nombreTest} from './create-deck';
import pediCarta from './get-card';
import valorCarta from './card-value'
import turnoComputadora from './computer-turn';
import { crearCartaHtml } from "./create-card-html";

export {crearNuevoDeck, pediCarta, valorCarta, turnoComputadora, crearCartaHtml}

/*
Podemos simplicarlo así, mientras no tengan exportación por defecto
export {crearDeck as crearNuevoDeck} from './create-deck';
export {pediCarta} from './get-card';
export {valorCarta} from './card-value'
export {turnoComputadora} from './computer-turn'
*/