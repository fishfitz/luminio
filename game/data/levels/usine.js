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
      { sceneId: 'agentDeSecurite', intensity: 2 },
      { sceneId: 'doubleAgents', intensity: 2 },
      { sceneId: 'robot', intensity: 2 },
      { sceneId: 'contremaitre', intensity: 2 }
    ],
    mediumFight: [
      { sceneId: 'salleDeProduction', intensity: 3 },
      { sceneId: 'patrouille', intensity: 3 },
      { sceneId: 'patrouilleRobotique', intensity: 3 }
    ],
    majorFight: [
      { sceneId: 'salleDuGenerateur', intensity: 4 },
      { sceneId: 'troupeDeChoc', intensity: 4 }
    ],
    minorMystery: [
      { sceneId: 'usineAmbiance1', intensity: 2 },
      { sceneId: 'usineAmbiance2', intensity: 2 },
      { sceneId: 'usineAmbiance3', intensity: 2 },
      { sceneId: 'filsElectriques', intensity: 2 }
    ],
    mediumMystery: [
      { sceneId: 'nuageToxique', intensity: 3 },
      { sceneId: 'lesPrisonniers', intensity: 3 },
      { sceneId: 'salleDeSurveillance', intensity: 3 }
    ],
    majorMystery: [
      { sceneId: 'piegesLaser', intensity: 4 },
      { sceneId: 'etrangeMachine', intensity: 4 }
    ],
    rest: [
      { sceneId: 'usineRepos', intensity: 1 },
      { sceneId: 'usineRepos', intensity: 1 },
      { sceneId: 'usineRepos', intensity: 1 },
      { sceneId: 'usineRepos', intensity: 1 },
      { sceneId: 'usineRepos', intensity: 1 }
    ],
    nightmare: [
      { sceneId: 'finDuJeu', intensity: 5 }
    ]
  }
}
