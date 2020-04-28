import Player from '../classes/PlayerClass';
import Card from '../classes/CardClass';
import Deck from '../classes/DeckClass';
import Command from '../classes/Command';


function card_pick(picked_number: number, picked_enemy: Player){
    picked_number === picked_enemy.cards[0].value ? picked_enemy.gameover = true : null;
}

function show_enemy_card(picked_enemy: Player){
    console.log(picked_enemy.cards[0])
}

function card_comparision(requesting_player:Player, picked_enemy: Player ){
    requesting_player.cards[0].value > picked_enemy.cards[0].value ?
        picked_enemy.gameover = true :
     requesting_player.cards[0].value < picked_enemy.cards[0].value ?
        requesting_player.gameover = true : null;
}

function turnImmunity(requesting_player: Player){
    requesting_player.immunity = true;
}

function changeEnemyCard(picked_enemy: Player, deck: Deck){
    picked_enemy.drop();
    picked_enemy.draw()
}

function changeCardWithEnemy(requesting_player: Player, picked_enemy:Player){
    let tmp = requesting_player.cards[0];
    requesting_player.cards[0] = picked_enemy.cards[0];
    picked_enemy.cards[0] = tmp;
}

// ERROR ALERT //
//might return undefined
function checkIfSeven(cards: Card[]){
    return cards.filter( card => card.getValue() !== 7);
}

const cards_actions = [

    function one(command: Command ){
        console.log('one')
        card_pick(command.picked_value, command.picked_enemy)
    },
    function two(command: Command ){
        console.log('two')
        show_enemy_card(command.picked_enemy)
    },
    function three(command: Command ){
        console.log('three')
        card_comparision(command.requesting_player, command.picked_enemy);
    },
    function four(command: Command ){
        console.log('four')
        turnImmunity(command.requesting_player)
    },
    function five(command: Command ){
        console.log('five')
        changeEnemyCard(command.picked_enemy, command.deck)
    },
    function six(command: Command ){
        console.log('six')
        changeCardWithEnemy(command.requesting_player, command.picked_enemy);
    },
    function seven(cards: Card[]){
        console.log('seven')
        console.log(cards)
        return checkIfSeven(cards);
    },
    function eight(cards: Card[] ){
        console.log('eight')
        return cards.every( card => card.getValue() === 8);
    },
]
;

export default cards_actions;