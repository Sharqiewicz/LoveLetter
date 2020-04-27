function DEFAULT_ACTION () { return null };

export default class CardClass {
    private shown:boolean = false;

    constructor(private value:number = 0, private action = DEFAULT_ACTION, public id:number) {
        this.value = value;
        this.action = action;
        this.id = id;
    }

    use() {
        this.action();
    }

    isShown(){
        return this.shown;
    }

    getValue(){
        return this.value;
    }
}