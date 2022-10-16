#chateauRepos
Je déniche une salle déserte où subsiste un soupçon de la quiétude d’en temps. L’Organiste, aussi puissant qu’il soit, n’a pas pu absolument tout changer de son domaine.
Cet endroit m’accorde un bref répit.
>>seReposer Se reposer (gain de 30 candelas et de 1 point de volonté) >>rever Rêver (gain d'un nouveau sort). >>mediter Méditer (choisir une carte à supprimer une carte du deck).

#seReposer
$ CANDELAS = Math.min(MAX_CANDELAS, CANDELAS + 30)
$ WILL = Math.min(10, WILL + 1)
Je gagne 30 candelas et 1 point de volonté.
$ VIEW('level')

#rever
// choisir une nouvelle carte parmi trois
$ VIEW('level')

#mediter
// Supprimer une carte du deck, n'importe laquelle
$ VIEW('level')
