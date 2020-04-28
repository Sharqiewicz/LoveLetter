import Command from './Command'
import cards_actions from '../actions/CardActions';

export default class CardClass {
    private shown:boolean = false;
    public action;

    constructor(private value:number = 0,  public id:number) {
        this.value = value;
        this.action = cards_actions[value-1];
        this.id = id;
    }

    use(command: Command) {
        this.action(command);
    }

    isShown(){
        return this.shown;
    }

    getValue(){
        return this.value;
    }
}