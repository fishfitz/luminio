
export const explore = (room) => {
  $world.GOTO(room.sceneId)
  $world.VIEW('play')
  const level = $world.LEVELS[$world.CURRENT_LEVEL]
  level.playerPosition = [room.x, room.y]

  let candelasGain = Math.min(6, level.time)
  if (candelasGain > 0) candelasGain = Math.max(0, $world.ALTER('exploreCandelaGain', candelasGain))
  $world.CANDELAS = Math.max(Math.min($world.CANDELAS + candelasGain, $world.MAX_CANDELAS), 1)

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
      return 'Lieu vide'
    case 'nightmare':
      return 'Source de Cauchemar'
  }
  if (!room.accessible) return 'Lieu inconnu'
  switch (room.intensity) {
    case 1:
      return 'Lieu calme'
    case 2:
      return 'Lieu troublé'
    case 3:
      return 'Lieu agité'
    case 4:
      return 'Lieu déchaîné'
  }
}
