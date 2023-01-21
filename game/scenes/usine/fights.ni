// Combats mineurs usine

#agentDeSecurite
agent: Hé ! Toi ! Qu’est-ce que tu fais là !
Un individu patibulaire en uniforme vient de m’apercevoir au détour d’une coursive métallique. Il tapote sa matraque en s’approchant, un sourire féroce sur son visage.
agent: Retourne à ton post où tu vas couiner !
$ FIGHT('agent', 'agentVictoire', 'usineDefaite')

#agentVictoire
$ EVOLVE_DECK()
Je regarde l’agent à terre. Il m’a vraiment pris pour un employer de cette horrible usine ? Ce n’était pas une lumière.
luminio: Une autre fois, peut-être.
Je l’enjambe et poursuis mon exploration des lieux.
$ VIEW('level')

#doubleAgents
agent: Hé ! Là ! C’est l’agent des rêves !
Zut, je suis tombé sur une patrouille de sécurité et elle m’a vu. Pas le choix, je dois m’en débarrasser !
$ FIGHT('doubleAgents', 'doubleAgentsVictoire', 'usineDefaite')

#doubleAgentsVictoire
$ EVOLVE_DECK()
La voie est libre. Je me hâte de m’éloigner.
$ VIEW('level')

#robot
Alors que je marche dans un couloir, une cloche frénétique se d’éclanche.
L’instant d’après, une porte d’acier coulisse, livrant passage à un robot chenillé.
$ FIGHT('robot', 'robotVictoire', 'usineDefaite')

#robotVictoire
$ EVOLVE_DECK()
Le robot n’est plus qu’une épave et la cloche s’est tut. Tant mieux, je peux me remettre en route.
$ VIEW('level')

#contremaitre
À un croisement de coursives, je vois une femme en train de fouetter un ouvrier dont le dos est déjà en sang.
contremaitre: Que cela…
Clac !
contremaitre: …vous serve…
Clac !
contremaitre: …de leçon !
luminio: Stoppez ça !
$ FIGHT('contremaitre', 'contremaitreVictoire', 'usineDefaite')

#contremaitreVictoire
$ EVOLVE_DECK()
En voilà une qui ne fouettera plus personne ! Je me tourne vers l’employer.
Il est enchaîné à une poutre d’acier et il ne bouge plus. Il est mort ou tout comme… Pour lui, c’est trop tard…
$ VIEW('level')

// Combats intermédiaires usine

#salleDeProduction
Ma route me conduit à devoir traverser une salle occupée par une chaîne de production.
Des ouvriers amorphes et littéralement enchaînés à leur post de travail s’acharnent sur leurs machines.
Je vois bien, en croisant le regard de certains, qu’il est trop tard pour les sauver.
Courbé en deux, je progresse à côté de ces pauvres gens en tâchant d’éviter les surveillants.
Malheureusement, on finit par me voir…
contremaitre: Là ! Un intrus ! Chopez-le !
$ FIGHT('salleDeProduction', 'salleDeProductionVictoire', 'usineDefaite')

#salleDeProductionVictoire
$ EVOLVE_DECK('upgrade')
Le calme revient dans la salle de production. Je regarde, effaré, les ouvriers qui poursuivent leur travail comme si de rien n’était.
Je préfère vite quitter ce lieu horrible.
$ VIEW('level')

#patrouille
agent: Agent des rêves localisé !
Mince, je suis repéré par une patrouille de gardes. Pas le choix, je dois m’en débarrasser.
$ FIGHT('patrouille', 'patrouilleVictoire', 'usineDefaite')

#patrouilleVictoire
$ EVOLVE_DECK('upgrade')
La voie est libre. Je me hâte de m’éloigner.
$ VIEW('level')

#patrouilleRobotique
agent: Agent des rêves localisé !
Alors que j’évolue le long d’une coursive, je me retrouve cerné par plusieurs robots à l’air hostile.
Il va falloir que je fasse le ménage.
$ FIGHT('patrouilleRobotique', 'patrouilleRobotiqueVictoire', 'usineDefaite')

#patrouilleRobotiqueVictoire
$ EVOLVE_DECK('upgrade')
Les robots sont en pièces détachées et la voie est libre.
$ VIEW('level')

// Combats majeurs usine

#salleDuGenerateur
agent: Agent des rêves localisé !
Après avoir franchi une lourde porte, je me tiens dans une pièce qui irradie de chaleur. 
Une bonne partie de son espace est occupé par un noyau énergétique en suspension au milieu d’un globe de verre, lui-même relié à une série de câbles.
Je n’ai pas le temps d’observer davantage cet appareillage car des robots surgissent de toute part.
$ FIGHT('salleDuGenerateur', 'salleDuGenerateurVictoire', 'usineDefaite')

#salleDuGenerateurVictoire
$ EVOLVE_DECK('upgrade')
La pièce est maintenant dévasté à un point tel qu’un trou est apparu dans l’un des murs.
En m’y engageant, je découvre l’intérieur d’un coffre-fort contenant quelque chose qui pourrait être intéressant.
$ ADD_TRINKET(RANDOM_PICK(['cristal_celeste', 'cristal_belarcane', 'cristal_orfeu']))
Il n'y a plus rien d'intéressant ici.
$ VIEW('level')

#troupeDeChoc
agent: Cible repérée !
Zut, voilà du monde.
contremaitre: Maîtrisez ce maudit lapin ou l’Organiste ne nous le pardonnera pas !
Et du monde motivé en plus. Avec des robots pour les soutenir. Ça promet d’être un rude affrontement.
$ FIGHT('troupeDeChoc', 'troupeDeChocVictoire', 'usineDefaite')

#troupeDeChocVictoire
$ EVOLVE_DECK('upgrade')
Il faut plus qu’une troupe de choc pour me stopper !
En observant la dépouille du chef du groupe, je déniche quelque chose d’intéressant.
$ ADD_TRINKET(RANDOM_PICK(['cristal_celeste', 'cristal_belarcane', 'cristal_orfeu']))
Il n'y a plus rien d'intéressant ici.
$ VIEW('level')
