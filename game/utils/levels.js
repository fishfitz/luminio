import shuffle from 'just-shuffle'
import firstLevelData from '../data/levels/chateau'

const createMap = ([rows, cols]) => {
  const map = []
  for (let x = 0; x < rows; x++) {
    map[x] = []
    for (let y = 0; y < cols; y++) {
      map[x][y] = {
        x,
        y,
        explored: false,
        visible: false,
        accessible: false
      }
    }
  }
  return map
}

const randomAssign = (map, { scenes, repartition }) => {
  const unsetSquares = shuffle(map
    .flatMap((row, rowIndex) => row
      .map((col, colIndex) => col.type ? null : [rowIndex, colIndex]))
    .filter(b => b))

  Object.entries(repartition).forEach(([type, max]) => {
    const scenesOfType = shuffle(scenes[type])
    for (let i = 0; i < max; i++) {
      const [row, col] = unsetSquares.pop()
      Object.assign(map[row][col], { type, ...scenesOfType.pop() })
    }
  })
}

const createFirstLevel = () => {
  const map = createMap([5, 5])

  Object.assign(map[0][0], {
    type: 'empty',
    explored: true,
    visible: true,
    accessible: true
  })

  Object.assign(map[4][4], {
    type: 'nightmare',
    visible: true
  })

  randomAssign(map, firstLevelData)

  return {
    map,
    name: 'Le château',
    playerPosition: [0, 0],
    time: 12
  }
}

const createSecondLevel = () => {

}

const createThirdLevel = () => {

}

const createFourthLevel = () => {

}

export const createLevels = () => [
  createFirstLevel(),
  createSecondLevel(),
  createThirdLevel(),
  createFourthLevel()
]
