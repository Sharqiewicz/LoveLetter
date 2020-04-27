import Player from './PlayerClass';
import Deck from './DeckClass';


// An object which will be provided to all the card actions
interface Command{
    picked_enemy: Player,
    picked_value: number,
    requesting_player: Player,
    deck: Deck
}

export default Command;