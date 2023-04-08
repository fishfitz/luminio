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

#gardeCorruptible
agent: Tiens tiens, qu’est-ce qu’on a là ? Ce ne serait pas un intrus par hasard ?
Je tourne la tête et aperçois le garde qui vient de m’interpeler. Debout à côté d’un gros bouton rouge mural, il tapote sa matraque électrique. Il m’adresse un sourire torve et poursuit :
agent: J’imagine que je vais devoir déclencher l’alarme. Ou alors… tu pourrais me filer quelque chose de valeur et on dira que je regardais ailleurs. T’en dis quoi, l’intrus ?
?TRINKETS.length?>>gardeCorruptibleDonner Je donne un trésor au garde. >>gardeCorruptibleRefuser Je refuse l’arrangement.
>>gardeCorruptibleRefuser

#gardeCorruptibleDonner
luminio: Quelque chose de valeur… Quelque chose comme ça ?
TODO: choisir un trésor à donner
// TODO: choisir un trésor à donner
Les yeux du garde se mettent à briller de convoitise.
agent: Par exemple.
Il m’arrache presque l’objet des mains, l’examine encore un instant, puis conclut :
agent: Allez, file.
$ VIEW('level')

#gardeCorruptibleRefuser
Je secoue négativement la tête.
luminio: Je n’ai rien à donner à quelqu’un comme toi.
agent: Quel dommage…
Il écrase de son poing le gros bouton rouge. Une alarme stridente se met à hurler. L’instant d’après, je suis cerné par tout un groupe d’intervention.
$ FIGHT('gardeCorruptible', 'gardeCorruptibleVictoire', 'usineDefaite')

#gardeCorruptibleVictoire
L’alarme, endommagée lors du combat, s’arrête en grésillant. Je me hâte de quitter les lieux avant d’être à nouveau intercepté.
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
$ ADD_TRINKET()
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
$ ADD_TRINKET()
Il n'y a plus rien d'intéressant ici.
$ VIEW('level')

#leDRI
Au fond d’un couloir particulièrement sombre et sinistre de l’usine, je trouve une porte marquée du sigle DRI. Derrière cette porte, je sens une noire énergie.
Je dois me trouver face au bureau de l’un des responsables de cette horrible fabrique, un bras droit de l’Organiste.
>>leDRIEntrer J'entre >>leDRIDemiTour Je préfère faire demi-tour.

#leDRIEntrer
Dès que je touche la porte, elle s’escamote sans un bruit, révélant l’intérieur d’une pièce toute d’acier chromé. Là, derrière sa haute table de métal, me toise un homme sinistre aux traits plus froids encore que l’agencement de cette salle.
dri: Ainsi donc, voici le fameux Luminio.
luminio: Et vous, vous êtes ?
dri: Le Directeur des Ressources Inhumaines. Vous interférez dans nos activités, j’ai bien peur de devoir œuvrer au remaniement drastique de votre carrière.
luminio: Je vois.
J’ai un sourire féroce. Le DRI presse un bouton pour appeler la sécurité.
$ FIGHT('leDRI', 'leDRIVictoire', 'usineDefaite')

#leDRIVictoire
luminio: Une bonne chose de faite.
$ ADD_WHITE_CARD()
C’en est fini de cet horrible directeur des ressources inhumaines. En fouillant rapidement son bureau, je déniche quelque chose d’intéressant pour ma mission.
$ VIEW('level')

#leDRIDemiTour
Je crois préférable de ne pas franchir cette porte. Je déserte promptement le couloir avec l’impression de fuir.
$ ADD_CARD('doute')
$ VIEW('level')

#leGrandFabricateur
Je découvre une vaste salle au fond de laquelle trône une gigantesque machine. Contrairement à quantité de choses dans cette fabrique, je vois clairement à quoi sert cette installation : c’est elle qui engendre les robots de l’usine.
La saboter contrarierait probablement l’Organiste, au moins sur le principe.
>>leGrandFabricateurAvancer Je m’avance pour détruire la machine. >>leGrandFabricateurSEnAller Je m’en vais.

#leGrandFabricateurAvancer
Je n’ai pas fait trois pas dans la pièce que déjà les lumières virent au rouge et une alarme se déclenche. Une voix robotique l’accompagne :
robot: Alerte ! Intrus détecté ! Neutralisation requise !
Plusieurs robots m’interceptent.
$ FIGHT('leGrandFabricateur1', 'leGrandFabricateurVictoire1', 'usineDefaite')

#leGrandFabricateurVictoire1
Le passage dégagé, je reprends ma progression vers l’énorme machine. L’alarme hurle toujours et d’autres robots arrivent.
$ FIGHT('leGrandFabricateur2', 'leGrandFabricateurVictoire2', 'usineDefaite')

#leGrandFabricateurVictoire2
Le passage à nouveau dégagé, j’approche de l’énorme machine. Les lumières se mettent soudain à clignoter plus vite.
robot: Alerte ! Installation compromise. Autodestruction activée.
(Test de difficulté 5) Je m’éloigne en vitesse.
$ TEST(5, 'leGrandFabricateurReussite', 'leGrandFabricateurEchec')

#leGrandFabricateurReussite
On dirait que la salle cherche à me retenir en dilatant son espace alors que je me mets à courir.
Seulement, je suis un agent des rêves et on ne me retient pas aussi facilement.
$ EVOLVE_DECK('upgrade')
Je plonge dans le couloir quand l’explosion a lieu.
$ EVOLVE_DECK('upgrade')
Toute la fabrique tremble, les lumières vacillent.
$ CANDELAS = Math.min(MAX_CANDELAS, CANDELAS + 20)
Je peux être fier de moi.
$ VIEW('level')

#leGrandFabricateurEchec
Je veux m’éloigner mais la salle me semble encore plus vaste que je ne le pensais.
Je cours, sans vraiment avancer. Puis soudain, c’est l’explosion.
$ DAMAGE_PLAYER(30, 'usineDefaite')
Le souffle de celle-ci m’éjecte jusque dans le couloir.

#leGrandFabricateurSEnAller
Après avoir hésité, je hausse finalement les épaules. Je n’ai pas de temps à perdre avec ce genre de chose. Je dois sauver mon rêveur et détruire l’Organiste.
$ VIEW('level')
