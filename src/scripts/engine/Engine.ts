import Player from '../classes/PlayerClass';
import Deck from '../classes/DeckClass';
import engine_actions from './engine_actions/EngineActions';


class Engine{

    public won: boolean = false;
    public players: Player[] = [];
    //public dom_enemies;
    //public checkboxes


    public startGame = engine_actions.startGame;
    public setBots =  engine_actions.setBots;
    public setEnemiesInDOM = engine_actions.setEnemiesInDOM;

    public checkRemainingPlayers = engine_actions.checkRemainingPlayers;
    public moveActivity = engine_actions.moveActivity;
    public checkActivityAndExecuteTurn = engine_actions.checkActivityAndExecuteTurn;

    public startTurn = engine_actions.startTurn;
    public executeTurn = engine_actions.executeTurn;
    public endTurn = engine_actions.endTurn;

    public endGame = engine_actions.endGame;
    public lastCardComparision = engine_actions.lastCardComparision;

    constructor(public deck: Deck){
        this.deck = deck;
    }
}



export default Engine;