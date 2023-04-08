const tile = (content) => ({
  explored: false,
  visible: true,
  accessible: false,
  ...content
})

export default () => ({
  name: 'L\'antre du seigneur Cauchemar',
  playerPosition: [3, 0],
  time: 12,
  map: [
    [
      tile({
        x: 0,
        y: 0,
        type: 'nightmare',
        sceneId: 'combatFinal'
      })
    ],
    [
      tile({
        x: 0,
        y: 1,
        type: 'rest',
        sceneId: 'finalRepos2'
      })
    ],
    [
      tile({
        x: 0,
        y: 2,
        type: 'rest',
        sceneId: 'finalRepos1'
      })
    ],
    [
      tile({
        x: 0,
        y: 3,
        type: 'empty',
        explored: true,
        accessible: true
      })
    ]
  ]
})
