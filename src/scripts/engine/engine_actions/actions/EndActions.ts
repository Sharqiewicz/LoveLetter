
const end_actions = {

    endGame: function () {
        // set won property to true for stop starting new Turn
        this.won = true;
        console.log('end game')

    },

    lastCardComparision: function () {
        console.log('Last Card Comparision')
    }
}


export default end_actions;