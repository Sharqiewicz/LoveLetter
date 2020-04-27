import engine_actions from './engine_actions/EngineActions';

function Engine(deck) {

    this.won = false;
    this.players = [];
    this.dom_enemies = [];
    this.checkboxes_enemies = [];
    this.deck = deck;
};

Engine.prototype = {

    startGame: engine_actions.startGame,
    setBots: engine_actions.setBots,
    setEnemiesInDOM: engine_actions.setEnemiesInDOM,

    checkRemainingPlayers: engine_actions.checkRemainingPlayers,
    moveActivity: engine_actions.moveActivity,
    checkActivityAndExecuteTurn: engine_actions.checkActivityAndExecuteTurn,

    startTurn: engine_actions.startTurn,
    executeTurn: engine_actions.executeTurn,
    endTurn: engine_actions.endTurn,

    endGame: engine_actions.endGame,
    lastCardComparision: engine_actions.lastCardComparision,

}

export default Engine;