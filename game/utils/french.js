import { isFirstCharAVowel, pluralize, feminize } from '@autheur/operators'
import { getOrdinal } from 'french-ordinals'

export const le = ({ name, gender = 'masc', amount = 1, proper = false }, short = false) => {
  if (short) return gender === 'masc' ? 'le' : 'la'
  if (proper) return name
  if (amount > 1) return `les ${name.toLowerCase()}`
  if (isFirstCharAVowel(name)) return `l'${name.toLowerCase()}`
  return `${gender === 'masc' ? 'le' : 'la'} ${name.toLowerCase()}`
}

export const du = ({ name, gender = 'masc', amount = 1, proper = false }, short = false) => {
  if (amount > 1) return `des ${proper ? name : name.toLowerCase()}`
  if (isFirstCharAVowel(name)) return `de l'${proper ? name : name.toLowerCase()}`
  return `${gender === 'masc' ? 'du' : 'de la'} ${proper ? name : name.toLowerCase()}`
}

export const de = (arg) => {
  const name = (typeof arg === 'object' ? arg.name : arg)
  return isFirstCharAVowel(name) ? `d'${name}` : `de ${name}`
}

export const il = (arg) => {
  const gender = (typeof arg === 'object' ? arg.gender : arg) || 'masc'
  return gender === 'masc' ? 'il' : 'elle'
}

export const chroma = (color, gender = 'masc') => {
  const m = gender === 'masc'

  switch (color) {
    case 'blue':
      return m ? 'bleu' : 'bleue'
    case 'yellow':
      return m ? 'doré' : 'dorée'
    case 'purple':
      return m ? 'violet' : 'violette'
    case 'white':
      return m ? 'blanc' : 'blanche'
    case 'black':
      return m ? 'noir' : 'noire'
  }
}

export const aura = (color) => {
  switch (color) {
    case 'yellow':
      return 'Orfeu'
    case 'purple':
      return 'Belarcane'
    case 'blue':
      return 'Céleste'
    case 'black':
      return 'Ténèbre'
    case 'white':
      return 'Lumière'
  }
}

export const plural = (word, amount = 0) => {
  return amount >= 2 ? pluralize(word) : word
}

export const cap = (word) => {
  if (!word) return ''
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const fem = (word, gender = 'masc') => {
  if (!word) return ''
  return gender === 'masc' ? word : feminize(word)
}

export const nth = (count, gender = 'masc') => {
  return getOrdinal(count, gender === 'masc' ? 'M' : 'F')
}

export const intention = (type) => {
  switch (type) {
    case 'aggro':
      return 'Agressive'
    case 'debuff':
      return 'Affaiblissement'
    case 'buff':
      return 'Renforcement'
    case 'special':
      return 'Spéciale'
    case 'none':
      return 'Aucune'
  }
}

const intensitiyNames = { 1: '', 2: ' Majeur', 3: ' Suprême' }
export const intensityName = (name, gender, intensity) => `${name}${fem(intensitiyNames[intensity], gender)}`

const intensitiyUpgrades = { 1: 'Majeur', 2: 'Supreme' }
export const intensityUpgrade = (upgrade, gender, intensity) => intensity === 3 ? null : `${upgrade}${fem(intensitiyUpgrades[upgrade], gender)}`

export const currently = (amount) => {
  if ($world.FIGHT_TURN) return ` (actuellement ${amount})`
  else return ''
}
