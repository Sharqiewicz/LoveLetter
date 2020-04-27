import Player from '../classes/PlayerClass';
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
    },
    function seven(cards){
        console.log('seven')
    },
    function eight(command: Command ){
        console.log('eight')
    },
]
;

export default cards_actions;