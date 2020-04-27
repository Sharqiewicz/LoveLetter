import player_actions from "../actions/PlayerActions";

export default class PlayerClass {

    public cards = [];
    public immunity: boolean = false;
    public active:boolean = false;
    public gameover:boolean = false;

    // functions
    public draw;
    public use;
    public drop;

    constructor(public id: number) {
        this.id = id;

        this.draw = player_actions.draw;
        this.use = player_actions.use;
        this.drop = player_actions.drop;
    }

}