import Player from '../../../classes/PlayerClass';
import Command from '../../../classes/Command';
import Card from '../../../classes/CardClass';

function moveActivityIndex(player: Player, index:number, arr: Player[]): number{
        if (player.active) {
            player.active = false;

            if ( index >= ( arr.length -1 )) {
                return 0;
           }
            return index + 1;
        }
}

const randomEnemy = (players: Player[], actual_player: Player): Player => {

    let chosen_player: Player = players[Math.floor(Math.random() * players.length)];
    if (typeof chosen_player === 'undefined') {
        return randomEnemy(players, actual_player);
    }
    if(chosen_player.id === actual_player.id){
        return randomEnemy(players, actual_player);
    }
        return chosen_player;
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
        console.log('------------------ executing turn ------------------')
        console.log('now turn is doing: ')
        console.log(actual_player);
        console.log(`Deck length: ${this.deck.card_list.length}`)

        if(this.deck.card_list.length === 0){
            this.lastCardComparision();
            return null;
        }

        actual_player.draw(this.deck.draw());

        if(actual_player.id === 0){
            const domCards = document.querySelectorAll('.player--card');
            domCards.forEach( (card, index) => card.textContent = actual_player.cards[index].value)
        }

        const chosen_player = randomEnemy(this.players, actual_player);
        console.log('random enemy:');
        console.log(chosen_player);

        const chosen_card:Card = actual_player.cards.find( card => card.value != 8 );
        actual_player.cards = actual_player.cards.filter( card => card.id != chosen_card.id)

        const command: Command = {
            requesting_player: actual_player,
            picked_enemy: chosen_player,
            picked_value: 1,
            deck: this.deck
        }

        actual_player.use(chosen_card, command)

        document.getElementById('last__used').textContent = chosen_card.getValue().toString();
    }
}

export default turn_actions;