import CardFactory from '../factories/CardFactory';


// this - this has the class context
const deck_actions = {

    draw: function () {
        return this.card_list.pop();
    },

    shuffle: function () {
        for (var i = this.card_list.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.card_list[i];
            this.card_list[i] = this.card_list[j];
            this.card_list[j] = temp;
        }
    },


    init: function () {

        let y = 1;
        for (let i = 0; i < 16; i++) {
            i == 5 ? y = 2 : i == 7 ? y = 3 : i == 9 ? y = 4 : i == 11 ? y = 5 : i == 13 ? y = 6 : i == 14 ? y = 7 : i == 15 ? y = 8 : y = y;

            const factory = new CardFactory();
            this.card_list.push(factory.create(y));
        }
        this.shuffle();
        this.shuffle();
        this.shuffle();
        this.shuffle();
        this.shuffle();

    },
    isEmpty: function (): boolean {
        return (this.card_list.length == 0);
    }
}
export default deck_actions;