import cards_actions from './CardActions';

const player_actions = {

    draw: function (card) {
        console.log('draw!')
        this.cards.push(card);

        // if it is 7 check if you have 5 or 6
        cards_actions[6]();
    },

    use: function (card) {
        console.log('use!');

        //reset immunity
        this.immunity = false;
        console.log(card)
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