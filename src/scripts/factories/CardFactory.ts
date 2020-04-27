import Card from '../classes/CardClass';
import cards_actions from '../actions/CardActions';

function CardFactory(){
    this.create = value => function(value): Card{ return new Card( value, cards_actions[value - 1] )}
}

export default CardFactory;