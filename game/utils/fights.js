import random from 'just-random-integer'
import { nth, cap } from './french'

// Returns true if the foe pattern is still correct
export const isPatternCorrect = (foe) => {
  return !foe.aura.length ||
    foe.aura
      .every((color, index) => color === 'white' || color === foe.auraPattern[index])
}

// Remove protection and candelas from the player, and check if he has to recover or is dead
export const damagePlayer = (amount, ignoreProtection = false, foe) => {
  amount += Math.max(0, $world.ALTER('foePower', foe.power, foe))

  let protectionRemoved = 0
  if (!ignoreProtection) {
    protectionRemoved = $world.PROTECTION >= amount ? amount : $world.PROTECTION
    $world.PROTECTION -= protectionRemoved
  }

  const afterProtection = amount - protectionRemoved
  const candelasRemoved = $world.CANDELAS >= amount - afterProtection ? afterProtection : $world.CANDELAS
  $world.CANDELAS -= candelasRemoved

  if (protectionRemoved) $world.LOG('fight.maSphereAbsorbe', { protectionRemoved, broken: !$world.PROTECTION })
  if ($world.SHIELD && foe) {
    $world.LOG('fight.maSphereTeinte', { foe, color: $world.SHIELD })
    foe.addAura($world.SHIELD)
    if (!$world.PROTECTION) $world.SHIELD = null
  }

  if (candelasRemoved) {
    let severity
    if ($world.CANDELAS <= 0) severity = 6
    else if ($world.CANDELAS <= 9) severity = 5
    else if ($world.CANDELAS <= 29) severity = 4
    else if ($world.CANDELAS <= 54) severity = 3
    else if ($world.CANDELAS <= 79) severity = 2
    else severity = 1
    $world.LOG(`fight.encaisse${severity}`, { candelasRemoved })
  }

  let recovered = false
  let dead = false
  if (!$world.CANDELAS) {
    if ($world.WILL === 10) {
      recovered = true
      $world.LOG('fight.jeNePeuxPasEchouer')
      $world.WILL = 0
      $world.CANDELAS = $world.MAX_CANDELAS
    } else {
      dead = true
      $world.LOG('fight.jAiEchoue')
      $world.FIGHT_TURN = 0
      $world.GOTO($world.FIGHT_DEFEAT)
    }
  }

  return {
    protectionRemoved,
    candelasRemoved,
    recovered,
    dead
  }
}

// Randomly discard cards from player's hand
export const discardPlayer = (amount) => {
  $world.LOG('fight.jeMeDefausse', { amount: Math.min(amount, $world.HAND.length) })
  let amountLeft = amount
  while ($world.HAND.length && amountLeft) {
    $world.DISCARDED.push(...$world.HAND.splice(random(0, $world.HAND.length - 1), 1))
    amountLeft -= 1
  }
  return { amountDiscarded: amount - amountLeft }
}

// Add to player protection
export const addProtection = (amount, color) => {
  if (!$world.PROTECTION) $world.LOG('fight.uneSphereApparait', { color, amount })
  else if ($world.SHIELD === color) $world.LOG('fight.maSphereSeRenforce', { amount })
  else $world.LOG('fight.maSphereSeRenforceChangementCouleur', { color, amount })

  $world.PROTECTION += amount
  if (typeof color !== 'undefined') $world.SHIELD = color
}

// Add color to foe aura and trigger effects if it is full
export const addAura = (color, foe) => {
  foe.aura.push(color)

  if (foe.aura.length >= foe.auraSlots) {
    if (foe.aura.every(color => color !== 'black')) {
      foe.stunned = true
      if (isPatternCorrect(foe)) {
        const candelasGain = $world.ALTER('auraCandelasGain', 2 * foe.auraSlots)
        $world.CANDELAS = Math.min($world.MAX_CANDELAS, $world.CANDELAS + candelasGain)
        $world.LOG('fight.sonAuraEstHarmonisee', { candelasGain })
      } else $world.LOG('fight.sonAuraSurcharge')
    } else if (foe.aura.every(color => color === 'black')) {
      $world.LOG('fight.sonAuraSObscurcit')
      foe.auraDarkening()
    } else $world.LOG('fight.sonAuraEstSouillee')
    foe.aura.length = 0
  }
}

// Find an unique name for the foe adding nth
export const uniqueName = (foe) => {
  let count = 1
  while (true) {
    const nameCandidate = cap(nth(count, foe.gender))
    if ($world.FIGHT_FOES.every(f => f.name !== nameCandidate)) return nameCandidate
    count++
  }
}
