import Card from '../classes/CardClass';
import cards_actions from '../actions/CardActions';

function CardFactory(){
    this.create = (value, id):Card => { return new Card( value, id )}
}

export default CardFactory;