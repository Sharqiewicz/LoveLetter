import Player from "../../../classes/PlayerClass";

const start_actions = {

    // Set players objects
    setBots: function ({ players_number }) {
        for (let i = 0; i < players_number; i++) {
            this.players[i] = new Player(i);
            this.players[i].draw(this.deck.draw());
            console.log(this.players[i])
        }
        this.players[0].active = true;
        console.log('BOTS SETTED');

    },

    // Draw Players in the DOM
    setEnemiesInDOM: function () {
        console.log('BOTS SET IN THE DOM!')
    },


    startGame: function () {

        this.deck.init();
        this.setBots({ players_number: 3 })
        this.setEnemiesInDOM();

        // click on the deck to play turn
        document.getElementById("deck").addEventListener("click", () => {
        this.startTurn();
        });

    },
}

export default start_actions;