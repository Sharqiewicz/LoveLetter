import player_actions from "../actions/PlayerActions";
import Card from './CardClass';
import Command from './Command';

export default class PlayerClass {

    public cards = [];
    public immunity: boolean = false;
    public active:boolean = false;
    public gameover:boolean = false;

    // functions
    public draw;
    public drop;
    public action;

    constructor(public id: number) {
        this.id = id;

        this.draw = player_actions.draw;
        this.action = player_actions.use;
        this.drop = player_actions.drop;
    }

    use(card:Card, command: Command) {
        this.action(card, command);
    }

}