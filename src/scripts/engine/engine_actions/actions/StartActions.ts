import Player from "../../../classes/PlayerClass";
const enemiesContainer:HTMLDivElement = document.querySelector(".enemies__container");


function createBot(index: number): HTMLDivElement{
    let el = document.createElement("div");
    let eltxt = document.createElement("p");
    eltxt.classList.add("card--text");
    eltxt.textContent = ` Enemy ${index}`;
    el.classList.add("card__element");
    el.classList.add("enemy--card");
    el.classList.add(`enemy--${index}`);
    el.appendChild(eltxt);
    return el;
}

const start_actions = {

    // Set players objects
    setBots: function (players_number:number): void {
        for (let i = 0; i < players_number; i++) {
            this.players[i] = new Player(i);
            this.players[i].draw(this.deck.draw());
            console.log(this.players[i])
        }
        this.players[0].active = true;
        console.log('BOTS SETTED');

    },

    // Draw Players in the DOM
    setEnemiesInDOM: function (): void {
        for (let i = 1; i < this.players.length; i++) {
            enemiesContainer.appendChild(createBot(i))
        }
        console.log('BOTS SET IN THE DOM!')
    },


    startGame: function (): void {

        this.deck.init();
        this.setBots(4)
        this.setEnemiesInDOM();

        // click on the deck to play turn
        document.getElementById("deck").addEventListener("click", () => {
            this.startTurn();
        });

    },
}

export default start_actions;