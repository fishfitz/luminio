export default {
  name: 'Le château',
  dimensions: [5, 5],
  spawn: [4, 0],
  nightmare: [0, 4],
  repartition: {
    majorMystery: 2,
    majorFight: 2,
    mediumMystery: 3,
    mediumFight: 3,
    rest: 5,
    minorMystery: 4,
    minorFight: 4
  },
  scenes: {
    minorFight: [
      { sceneId: 'duoDOmbresFugaces', intensity: 2 },
      { sceneId: 'murmure', intensity: 2 },
      { sceneId: 'armureHantee', intensity: 2 },
      { sceneId: 'armureEtFantome', intensity: 2 },
      { sceneId: 'unRecoinOpportun', intensity: 2 }
    ],
    mediumFight: [
      { sceneId: 'ombreEpaisse', intensity: 3 },
      { sceneId: 'litanie', intensity: 3 },
      { sceneId: 'embuscade', intensity: 3 }
    ],
    majorFight: [
      { sceneId: 'laGalerieAuxArmures', intensity: 4 },
      { sceneId: 'leFaiseurDOmbres', intensity: 4 },
      { sceneId: 'leGriffeNuit', intensity: 4 },
      { sceneId: 'lesHurleuses', intensity: 4 }
    ],
    minorMystery: [
      { sceneId: 'chateauAmbiance1', intensity: 2 },
      { sceneId: 'chateauAmbiance2', intensity: 2 },
      { sceneId: 'chateauAmbiance3', intensity: 2 },
      { sceneId: 'chateauAmbiance4', intensity: 2 },
      { sceneId: 'lesPiques', intensity: 2 },
      { sceneId: 'lePuits', intensity: 2 }
    ],
    mediumMystery: [
      { sceneId: 'laGuillotine', intensity: 3 },
      { sceneId: 'uneStatueDeLumière', intensity: 3 },
      { sceneId: 'funesteMiseEnGarde', intensity: 3 },
      { sceneId: 'laBibliothequeTenebreuse', intensity: 3 },
      { sceneId: 'lesOubliettes', intensity: 3 }
    ],
    majorMystery: [
      { sceneId: 'laPierreQuiRoule', intensity: 4 },
      { sceneId: 'laGrandeSalle', intensity: 4 },
      { sceneId: 'leDebarratPoussiereux', intensity: 4 }
    ],
    rest: [
      { sceneId: 'chateauRepos', intensity: 1 },
      { sceneId: 'chateauRepos', intensity: 1 },
      { sceneId: 'chateauRepos', intensity: 1 },
      { sceneId: 'chateauRepos', intensity: 1 },
      { sceneId: 'chateauRepos', intensity: 1 }
    ],
    nightmare: [
      { sceneId: 'laFoule', intensity: 5 }
    ]
  }
}
