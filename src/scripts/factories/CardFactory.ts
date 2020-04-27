import Card from '../classes/CardClass';
import cards_actions from '../actions/CardActions';

function CardFactory(){
    this.create = (value, id):Card => { return new Card( value, cards_actions[value - 1], id )}
}

export default CardFactory;