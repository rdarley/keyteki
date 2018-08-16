const Card = require('../../Card.js');

class TreasureMap extends Card {
    setupCardAbilities(ability) {
        this.play({
            effect: 'make themselves unable to play any more cards this turn{1}',
            effectArgs: context => context.game.cardsPlayed.length === 1 ? 'and gain 3 amber' : '',
            gameActions: [
                ability.actions.gainAmber(context => ({
                    amount: context.game.cardsPlayed.length === 1 ? 3 : 0
                })),
                ability.actions.forRemainderOfTurn({
                    effect: ability.effects.playerCannot('play')
                })
            ]
        });
    }
}

TreasureMap.id = 'treasure-map'; // This is a guess at what the id might be - please check it!!!

module.exports = TreasureMap;
