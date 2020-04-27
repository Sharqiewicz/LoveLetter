function moveActivityIndex(player, index, arr){
        if (player.active) {
            player.active = false;

            if ( index >= ( arr.length -1 )) {
                return 0;
           }
            return index + 1;
        }
}


const turn_actions = {


    // TODO
    checkRemainingPlayers: function () {
        console.log('check remaining players')

        // check if someone lost and remove him from the array
        this.players.forEach((bot, index) => {
            ///////////
            if (bot.gameover) {

                // add dead style to the player who lost in DOM
                if (index != 0) {
                    // bot is dead
                }
                if (index == 0) {
                    // player is dead
                }

                //remove the player who lost from the players array
                this.players = this.players.filter((o, i) => i !== index);
                //dom_bots = bots.filter((o, i) => i !== index);

                // ??? // if current player is dead, increase nextindex is needed
            }
            // if only one player is left in the array
            if (this.players.length === 1) {
                this.endGame();
            }

        });
    },

    // DONE
    moveActivity: function () {
        console.log('move activity')

        // NADPISUJE INDEX KTORY JEST POPRAWNY
        // FIXED
        var next = []; var nextindex;
        this.players.forEach((el, index, arr) => next.push(moveActivityIndex(el, index, arr)));
        nextindex = next.find(el => el !== undefined);
        this.players[nextindex].active = true;

        console.log('now active active is: ' + this.players[nextindex].id)
    },

    // DONE
    checkActivityAndExecuteTurn: function () {
        console.log('check activity')

        // check which player is active and then do turn for him
        this.players.forEach(player => (player.active ? this.executeTurn(player) : false));
    },

    // TODO
    executeTurn: function (actual_player) {
        console.log('excecuting turn')
        console.log('now turn is doing: ')
        console.log(actual_player);
    }
}

export default turn_actions;