
export const explore = (room) => {
  $world.GOTO(room.sceneId)
  $world.VIEW('play')
  const level = $world.LEVELS[$world.CURRENT_LEVEL]
  level.playerPosition = [room.x, room.y]
  $world.CANDELAS = Math.max(Math.min($world.CANDELAS + level.time, $world.MAX_CANDELAS), 1)
  level.time -= 1
}

export const update = () => {
  const { playerPosition: [x, y], map } = $world.LEVELS[$world.CURRENT_LEVEL]
  if (map[x + 1]?.[y]) Object.assign(map[x + 1][y], { visible: true, accessible: true })
  if (map[x - 1]?.[y]) Object.assign(map[x - 1][y], { visible: true, accessible: true })
  if (map[x]?.[y + 1]) Object.assign(map[x][y + 1], { visible: true, accessible: true })
  if (map[x]?.[y - 1]) Object.assign(map[x][y - 1], { visible: true, accessible: true })
}

export const roomName = (room) => {
  switch (room.type) {
    case 'empty':
      return 'Pièce vide'
    case 'nightmare':
      return 'Pièce cauchemar'
  }
  switch (room.intensity) {
    case 1:
      return 'Pièce calme'
    case 2:
      return 'Pièce agitée'
    case 3:
      return 'Pièce déchaînée'
  }
}
