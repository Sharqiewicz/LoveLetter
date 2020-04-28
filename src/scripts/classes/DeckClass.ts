import Card from './CardClass';
import deck_actions from '../actions/DeckActions'

export default class DeckClass {
    // Arrays
    private card_list:Card[] = [];

    // Functions
    public init;
    public draw;
    public shuffle;
    public isEmpty;

    constructor() {
        // Arrays - init Array as empty Array

        // Functions
        this.init = deck_actions.init;
        this.draw = deck_actions.draw;
        this.shuffle = deck_actions.shuffle;
        this.isEmpty = deck_actions.isEmpty;
    }
}