import clone from 'just-clone'
import fights from '../data/fights'
import trinkets from '../data/trinkets'

export const fight = (fightId, victorySceneId = 'default_victory', defeatSceneId = 'default_defeat') => {
  const { foes } = fights[fightId]()
  $world.FIGHT_FOES = foes.map(clone)
  $world.HAND = []
  $world.FIGHT_VICTORY = victorySceneId
  $world.FIGHT_DEFEAT = defeatSceneId
  $world.VIEW('fight')
}

export const addTrinket = (trinket) => {
  $world.VIEW('play')
  $world.TRINKET_CHOICE = trinkets[trinket]
}

const basicTest = (intensity, successSceneId, failureSceneId, count = 0) => {
  $world.SHUFFLE_DECK()

  let blackCard = false
  while (count < intensity && !blackCard) {
    if (!$world.DECK[count] || $world.DECK[count].color === 'black') blackCard = true
    else count++
  }

  $world.LOG(
    blackCard ? 'tests.defeat' : 'tests.success',
    { count },
    blackCard ? failureSceneId : successSceneId
  )

  return count
}

export const test = (intensity, successSceneId, failureSceneId) => {
  $world.SHUFFLE_DECK()
  basicTest(intensity, successSceneId, failureSceneId)
}

export const progressiveTest = (intensity, successSceneId, failureSceneId) => {
  $world.PROGRESSIVE_COUNT = basicTest(intensity, successSceneId, failureSceneId)
}

export const damagePlayer = (amount, defeatSceneId) => {
  $world.CANDELAS -= amount

  let severity
  if ($world.CANDELAS <= 0) severity = 6
  else if ($world.CANDELAS <= 9) severity = 5
  else if ($world.CANDELAS <= 29) severity = 4
  else if ($world.CANDELAS <= 54) severity = 3
  else if ($world.CANDELAS <= 79) severity = 2
  else severity = 1
  $world.LOG(`fight.encaisse${severity}`, { candelasRemoved: amount }, true)

  if (!$world.CANDELAS) {
    if ($world.WILL === 10) {
      $world.LOG('fight.jeNePeuxPasEchouer')
      $world.WILL = 0
      $world.CANDELAS = $world.MAX_CANDELAS
    } else {
      $world.LOG('fight.jAiEchoue')
      $world.GOTO(defeatSceneId)
    }
  }
}
