const RoleCard = require('../../rolecard.js');

class SeekerOfFire extends RoleCard {
    setupCardAbilities() {
        this.reaction({
            when: {
                onProvinceRevealed: event => event.province.controller === this.controller && this.hasTrait(event.province.getElement())
            },
            handler: context => {
                this.game.addMessage('{0} uses {1} to gain 1 fate when {2} is revealed', this.controller, this, context.event.province);
                this.game.addFate(this.controller, 1);
            }
        });
    }
}

SeekerOfFire.id = 'seeker-of-fire';

module.exports = SeekerOfFire;
