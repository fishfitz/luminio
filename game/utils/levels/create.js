import shuffle from 'just-shuffle'
import firstLevelData from '../../data/levels/chateau'

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

const createLevel = (levelData) => {
  const map = createMap(levelData.dimensions)

  Object.assign(map[levelData.spawn[0]][levelData.spawn[1]], {
    type: 'empty',
    explored: true,
    visible: true,
    accessible: true
  })

  Object.assign(map[levelData.nightmare[0]][levelData.nightmare[1]], {
    type: 'nightmare',
    visible: true
  })

  randomAssign(map, levelData)

  return {
    map,
    name: levelData.name,
    playerPosition: [levelData.spawn[0], levelData.spawn[1]],
    time: $world?.MAX_TIME || 12
  }
}

export default () => [
  createLevel(firstLevelData)
]
