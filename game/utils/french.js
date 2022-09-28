import { isFirstCharAVowel, pluralize, feminize } from '@autheur/operators'

export const le = ({ name, gender = 'masc', amount = 1, proper = false }, short = false) => {
  if (short) return gender === 'masc' ? 'le' : 'la'
  if (proper) return name
  if (amount > 1) return `les ${name.toLowerCase()}`
  if (isFirstCharAVowel(name)) return `l'${name.toLowerCase()}`
  return `${gender === 'masc' ? 'le' : 'la'} ${name.toLowerCase()}`
}

export const du = ({ name, gender = 'masc', amount = 1, proper = false }, short = false) => {
  if (amount > 1) return `des ${proper ? name : name.toLowerCase()}`
  if (isFirstCharAVowel(name)) return `de l’${proper ? name : name.toLowerCase()}`
  return `${gender === 'masc' ? 'du' : 'de la'} ${proper ? name : name.toLowerCase()}`
}

export const de = (name) => {
  return isFirstCharAVowel(name) ? `d’${name}` : `de ${name}`
}

export const il = ({ gender = 'masc' }) => {
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
  return gender === 'masc' ? word : feminize(word)
}
