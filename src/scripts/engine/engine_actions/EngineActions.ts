import start_actions from './actions/StartActions';
import turn_actions from './actions/TurnActions';
import end_actions from './actions/EndActions';
const engine_actions = {

    startGame: start_actions.startGame,
    setBots: start_actions.setBots,
    setEnemiesInDOM: start_actions.setEnemiesInDOM,
    endGame: end_actions.endGame,
    lastCardComparision: end_actions.lastCardComparision,
    checkActivityAndExecuteTurn: turn_actions.checkActivityAndExecuteTurn,
    checkRemainingPlayers: turn_actions.checkRemainingPlayers,
    moveActivity: turn_actions.moveActivity,
    executeTurn: turn_actions.executeTurn,

    startTurn: function () {
        console.log('Start Turn')
        this.checkActivityAndExecuteTurn();
        this.endTurn();
    },

    endTurn: function () {
        this.checkRemainingPlayers();
        this.moveActivity();
    },


};

export default engine_actions;
