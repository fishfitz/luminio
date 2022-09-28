export default {
  name: 'Le château',
  dimensions: [5, 5],
  spawn: [4, 0],
  nightmare: [0, 4],
  repartition: {
    monster: 23
    /*
      monster: 8,
      rest: 5,
      treasure: 2,
      mystery: 8
    */
  },
  scenes: {
    monster: [
      { sceneId: 'monster1', intensity: 1 },
      { sceneId: 'monster2', intensity: 1 },
      { sceneId: 'monster3', intensity: 1 },
      { sceneId: 'monster4', intensity: 2 },
      { sceneId: 'monster5', intensity: 2 },
      { sceneId: 'monster6', intensity: 2 },
      { sceneId: 'monster7', intensity: 2 },
      { sceneId: 'monster8', intensity: 3 },
      { sceneId: 'monster9', intensity: 3 },
      { sceneId: 'monster10', intensity: 3 },
      { sceneId: 'monster1', intensity: 1 },
      { sceneId: 'monster2', intensity: 1 },
      { sceneId: 'monster3', intensity: 1 },
      { sceneId: 'monster4', intensity: 2 },
      { sceneId: 'monster5', intensity: 2 },
      { sceneId: 'monster6', intensity: 2 },
      { sceneId: 'monster7', intensity: 2 },
      { sceneId: 'monster8', intensity: 3 },
      { sceneId: 'monster9', intensity: 3 },
      { sceneId: 'monster10', intensity: 3 },
      { sceneId: 'monster1', intensity: 1 },
      { sceneId: 'monster2', intensity: 1 },
      { sceneId: 'monster3', intensity: 1 },
      { sceneId: 'monster4', intensity: 2 },
      { sceneId: 'monster5', intensity: 2 },
      { sceneId: 'monster6', intensity: 2 },
      { sceneId: 'monster7', intensity: 2 },
      { sceneId: 'monster8', intensity: 3 },
      { sceneId: 'monster9', intensity: 3 },
      { sceneId: 'monster10', intensity: 3 }
    ],
    rest: [
      { sceneId: 'rest', intensity: 1 },
      { sceneId: 'rest', intensity: 1 },
      { sceneId: 'rest', intensity: 1 },
      { sceneId: 'rest', intensity: 1 },
      { sceneId: 'rest', intensity: 1 }
    ],
    treasure: [
      { sceneId: 'treasure1', intensity: 1 },
      { sceneId: 'treasure2', intensity: 2 },
      { sceneId: 'treasure3', intensity: 3 }
    ],
    mystery: [
      { sceneId: 'mystery1', intensity: 1 },
      { sceneId: 'mystery2', intensity: 1 },
      { sceneId: 'mystery3', intensity: 1 },
      { sceneId: 'mystery4', intensity: 2 },
      { sceneId: 'mystery5', intensity: 2 },
      { sceneId: 'mystery6', intensity: 2 },
      { sceneId: 'mystery7', intensity: 2 },
      { sceneId: 'mystery8', intensity: 3 },
      { sceneId: 'mystery9', intensity: 3 },
      { sceneId: 'mystery10', intensity: 3 }
    ]
  }
}
