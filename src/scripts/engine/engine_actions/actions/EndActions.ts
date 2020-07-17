
const end_actions = {

    endGame: function () {
        // set won property to true for stop starting new Turn
        this.won = true;
        console.log('end game')
        console.log(this.players)

    },

    lastCardComparision: function () {
        console.log('Last Card Comparision')

        this.won = true;

        const winner = this.players.reduce((biggest, player) => { if( player.cards[0].value > biggest.value ){ return player.cards[0] } else { return biggest } } )
        console.log(this.players)
        console.log('winner: ')
        console.log(winner);
        this.players.forEach(player => {
            player.id !== winner.id ? player.gameover = true : player
        });
        console.log(this.players)
    }
}


export default end_actions;