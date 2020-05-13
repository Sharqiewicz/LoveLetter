import cards_actions from './CardActions';
import Card from '../classes/CardClass';
import Command from '../classes/Command';

const player_actions = {

    draw: function (card: Card) {
        console.log('draw!')
        this.cards.push(card);

        // if it is 7 check if you have 5 or 6
        this.cards = cards_actions[6](this.cards);
    },

    use: function (card: Card, command: Command) {
        console.log('use!');

        //reset immunity
        this.immunity = false;
        console.log(card)
        card.use(command);
    },

    // dropping card without using it
    drop: function () {
        console.log('drop!')
        this.cards.pop();
        this.gameover = cards_actions[7](this.cards)
    }
}

export default player_actions;