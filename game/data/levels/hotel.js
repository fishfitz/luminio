export default {
  name: 'L\'hôtel',
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
      { sceneId: 'individuSinistre', intensity: 2 },
      { sceneId: 'pantinEtIndividuSinistre', intensity: 2 },
      { sceneId: 'cannibale', intensity: 2 },
      { sceneId: 'desIndividusSinistres', intensity: 2 }
    ],
    mediumFight: [
      { sceneId: 'refletMalefique', intensity: 3 },
      { sceneId: 'fouleHostile', intensity: 3 },
      { sceneId: 'leTheatre', intensity: 3 }
    ],
    majorFight: [
      { sceneId: 'laSouris', intensity: 4 },
      { sceneId: 'galerieDesMiroirs', intensity: 4 }
    ],
    minorMystery: [
      { sceneId: 'hotelAmbiance1', intensity: 2 },
      { sceneId: 'hotelAmbiance2', intensity: 2 },
      { sceneId: 'hotelAmbiance3', intensity: 2 },
      { sceneId: 'hotelAmbiance4', intensity: 2 },
      { sceneId: 'mereCannibale', intensity: 2 },
      { sceneId: 'laBoiteDeNuit', intensity: 2 },
      { sceneId: 'laSalleBlanche', intensity: 2 }
    ],
    mediumMystery: [
      { sceneId: 'vagueDeTerreur', intensity: 3 },
      { sceneId: 'leDivan', intensity: 3 },
      { sceneId: 'sceneChoquante', intensity: 3 },
      { sceneId: 'leTableau', intensity: 3 },
      { sceneId: 'laPeinture', intensity: 3 }
    ],
    majorMystery: [
      { sceneId: 'enzo', intensity: 4 },
      { sceneId: 'leSensDesBougies', intensity: 4 },
      { sceneId: 'leCasino', intensity: 4 }
    ],
    rest: [
      { sceneId: 'hotelRepos', intensity: 1 },
      { sceneId: 'hotelRepos', intensity: 1 },
      { sceneId: 'hotelRepos', intensity: 1 },
      { sceneId: 'hotelRepos', intensity: 1 },
      { sceneId: 'hotelRepos', intensity: 1 }
    ],
    nightmare: [
      { sceneId: 'finDuJeu', intensity: 5 }
    ]
  }
}
