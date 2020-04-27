import cards_actions from './CardActions';

const player_actions = {

    draw: function (card) {
        console.log('draw!')
        this.cards.push(card);

        // if it is 7 check if you have 5 or 6
        cards_actions[6]();
    },

    use: function (card_number) {
        console.log('use!');

        //reset immunity
        this.immunity = false;

        // remove used card from cards in your hand
        let card;
        card_number == 0 ? card = this.cards.shift() : card = this.cards.pop();
        card.use();
    },

    // dropping card without using it
    drop: function () {
        console.log('drop!')
        let tmp = this.cards.pop()
        console.log(tmp.getValue());
        return cards_actions[7]();
    }
}

export default player_actions;