import random from 'just-random-integer'
import fights from './data/fights'

export default {
  RANDOM: random,

  // Levels
  MAP_UPDATE () {
    const { playerPosition: [x, y], map } = this.LEVELS[this.CURRENT_LEVEL]
    if (map[x + 1]?.[y]) Object.assign(map[x + 1][y], { visible: true, accessible: true })
    if (map[x - 1]?.[y]) Object.assign(map[x - 1][y], { visible: true, accessible: true })
    if (map[x]?.[y + 1]) Object.assign(map[x][y + 1], { visible: true, accessible: true })
    if (map[x]?.[y - 1]) Object.assign(map[x][y - 1], { visible: true, accessible: true })
  },

  MAP_EXPLORE (room) {
    this.GOTO(room.sceneId)
    this.VIEW('play')
    const level = this.LEVELS[this.CURRENT_LEVEL]
    level.playerPosition = [room.x, room.y]
    level.time -= 1
    this.CANDELAS += Math.max(Math.min(level.time - 6, this.MAX_CANDELAS), 1)
  },

  // Fights
  FIGHT (fightId, options, victorySceneId = 'default_victory', defeatSceneId = 'default_defeat') {
    const { foes } = fights[fightId](options)
    this.FIGHT_FOES = foes.map(foe => ({
      ...foe,
      life: foe.maxLife,
      intention: null
    }))
    this.FIGHT_VICTORY = victorySceneId
    this.FIGHT_DEFEAT = defeatSceneId
    this.VIEW('fight')
  },

  INFLICT_DAMAGES (amount, ignoreProtection = false) {
    let protectionRemoved = 0
    if (!ignoreProtection) {
      protectionRemoved = this.PROTECTION >= amount ? amount : this.PROTECTION
      this.PROTECTION -= protectionRemoved
    }

    const afterProtection = amount - protectionRemoved
    const candelasRemoved = this.CANDELAS >= amount - afterProtection ? afterProtection : this.CANDELAS
    this.CANDELAS -= candelasRemoved

    return { protectionRemoved, candelasRemoved }
  },

  INFLICT_DISCARD (amount) {
    let amountLeft = amount
    while (this.HAND.length && amountLeft) {
      this.DISCARDED.push(this.HAND.splice(random(0, this.HAND.length - 1)))
      amountLeft -= 1
    }
    return { amountDiscarded: amount - amountLeft }
  },

  SET_PROTECTION (amount, color) {
    this.PROTECTION += amount
    if (typeof color !== 'undefined') this.SHIELD = color
  }
}
