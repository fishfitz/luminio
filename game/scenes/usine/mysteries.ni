// Mystères mineurs usine

#usineAmbiance1
En passant devant une large porte ouverte, je vois un déprimant spectacle. Là, devant moi s’étend des chaînes de montage où sont littéralement enchaînés des individus innombrables. Ils sont variés d’apparence, des humains, des créatures, et pourtant ils se ressemblent tous avec leur mine défaite, leur uniforme d’ouvrier et leurs gestes d’automates. Ce qu’ils construisent à la sueur de leur front fini dans de grandes bennes à ordures. Il n’y a plus rien à faire pour eux, je me détourne et m’en vais.
$ VIEW('level')

#usineAmbiance2
Je marche au milieu du vacarme, des vapeurs délétères, de l’acier, du plastique, des lumières crues… Ce paysage industriel me perturbe. Non que je sois allergique à la technologie, ça fait belle lurette que les rêves des humains sont peuplés de science fiction, mais cette fabrique infernale n’existait pas la dernière fois que je suis venu dans le château. L’Organiste a tellement changé…
$ VIEW('level')

#usineAmbiance3
Je m’engage dans une coursive encombrées de tuyaux. Je dois me courber et me faufiler entre eux. Plus loin, un ordinateur à bande magnétique mouline avec ses données primitives. Quelques pas plus loin, un ordinateur bien plus moderne est adossé à sa colonne de refroidissement. Je passe sans m’attarder. Mais quel désordre…
$ VIEW('level')

#usineAmbiance4
Je marche prudemment sur une passerelle d’acier qui enjambe un tapis roulant. Ce dernier transporte du minerait vers un concasseur qui effectue sa besogne dans un furieux vacarme. La passerelle tremble, l’air vibre, tout semble à cran dans cette usine.
$ VIEW('level')

#filsElectriques
Je me retrouve devant un passage pratiquement obstrué par un enchevêtrement de câbles et de fils électriques.
Tout ça n’a pas l’air très bien isolé, comme en témoigne les étincelles qui crépitent ici et là.
Pourtant, je dois poursuivre dans cette direction.
(Test de difficulté 3) Je me faufile.
$ TEST(3, 'filsElectriquesReussite', 'filsElectriquesEchec')

#filsElectriquesReussite
Heureusement que je suis souple et de petite taille. J’arrive à me faufiler entre tout ça sans rien toucher.
$ VIEW('level')

#filsElectriquesEchec
Un fil vient sournoisement à ma rencontre et me délivre une bonne décharge électrique.
$ DAMAGE_PLAYER(20, 'usineDefaite')
Je pousse un cri, trésaille, prend une autre décharge et me retrouve éjecté un peu plus loin, le pelage fumant.
$ VIEW('level')

#laPlaqueTournante
Je me retrouve devant une salle circulaire dont le sol est une plateforme en rotation lente. On dirait un dispositif de transite entre plusieurs tapis roulants.
Quelques caisses font leur voyage, guidées de temps à autre par des bras mécaniques.
Je m’engage sur la plaque tournante. Je compte tranquillement me laisser porter jusqu’à la suite du couloir, mais soudain la plaque se met à accélérer.
>>laPlaqueTournantePouvoir (Coût : 10 candelas) J’use de mon pouvoir pour éviter tout souci. >>laPlaqueTournanteReflexes (Test de difficulté 5) Je fais confiance à mes réflexes pour traverser sans encombre.

#laPlaqueTournantePouvoir
$ DAMAGE_PLAYER(10, 'chateauDefaite')
J’exerce ma volonté sur la plaque tournante. Elle ralentit de mauvaise grâce.
De la fumée s’élève par ses interstices. J’ai peut-être bousillé la machine, mais ce n’est pas mon problème.
J’arrive de l’autre côté et déjà je m’en vais.
$ VIEW('level')

#laPlaqueTournanteReflexes
$ TEST(5, 'laPlaqueTournanteReussite', 'laPlaqueTournanteEchec')

#laPlaqueTournanteReussite
Je dois m’agripper à une caisse pour ne pas perdre l’équilibre. Je dois aussi baisser la tête pour éviter un bras mécanique.
Enfin, je dois sauter pile au bon moment pour ne pas louper le couloir. Mais j’arrive à faire tout ça et je peux continuer comme si de rien n’était.
$ VIEW('level')

#laPlaqueTournanteEchec
Je dois m’agripper à une caisse pour ne pas perdre l’équilibre. Je remarque hélas trop tard un bras mécanique qui me cogne la tête.
Déstabilisé, je tombe et me fais éjecter de la plaque tournante dans un tapis roulant. Celui-ci m’éjecte à son tour dans une benne à ordure.
$ DAMAGE_PLAYER(10, 'chateauDefaite')
$ ADD_CARD('doute')
Je peux en sortir tant bien que mal, mais mon égo en a pris un coup.
$ VIEW('level')

#accidentDuTravail
Je suis en train de discrètement traverser un atelier où trime des esclaves enchaînés, des esclaves aussi mornes que des automates, quand soudain une terrible explosion me jette au sol.
C’est au son d’une horrible alarme que je me relève, les oreilles sifflantes. Je n’ai rien de cassé, la détonation a eu lieu plus loin, au fond de l’atelier.
Il semble que toute une chaîne de production soit partie en fumée. Des personnes armées d’extincteurs essaient de maîtriser l’incendie.
Des contremaîtres exhortent le reste des ouvriers valides à continuer leur travail comme si de rien n’était. Et pendant ce temps, personne ne s’occupe des moribonds à demi carbonisés.
>>accidentDuTravailAgir (Coût : 10 candelas) J’essaie de faire quelque chose pour ces malheureux. >>accidentDuTravailSEnAller Je m’en vais.

#accidentDuTravailAgir
Je m’approche des blessés et j’utilise mon pouvoir pour en soigner quelques-uns. Un seul des malheureux a encore assez de son ancien caractère pour m’adresser un sourire de remerciement.
$ EVOLVE_DECK('upgrade')
Mais voir un sourire, dans ce lieu, c’est déjà beaucoup. Je m’éloigne avant que les contres-maitres n’aient achevé de reprendre le contrôle de la situation.
$ VIEW('level')

#accidentDuTravailSEnAller
Ces pauvres esclaves sont déjà morts depuis longtemps. Mon devoir est de mettre fin à tout ça. Je file en vitesse avant qu’on me remarque.
$ VIEW('level')

#bob
Je me retrouve devant la porte d’un bureau sur laquelle se trouve une plaquette. Celle-ci annonce : Bob, homme à tout faire.
Je me demande si je dois entrer quand soudain la porte s’ouvre et un quinquagénaire en salopette apparaît dans l’encadrement.
bob: Je peux vous aider à quelque chose ?
Bob a l’air aimable mais également très las. Il doit s’agir d’une des dernières personnes en ce château qui cherche à ce que les choses se passent bien.
>>bobAmeliorer Je demande une idée pour m’améliorer. >>bobEssentiel Je demande un conseil pour aller à l’essentiel.

#bobAmeliorer
$ EVOLVE_DECK('upgrade')
Bob fait de son mieux pour m’aider. Il prend visiblement plaisir à ces quelques instants en ma compagnie et c’est réciproque.
$ VIEW('level')

#bobEssentiel
$ EVOLVE_DECK()
Bob se montre prolixe sur la manière de bien s’organiser, il a un solide sens de la pratique et j’en tire assurément quelque chose. Sans compter que tous les deux, on s’apprécie.
$ VIEW('level')

// Mystères intermédiaires usine
#nuageToxique
Alors que je marche à côté d’un mur bardé de tuyauteries alambiquées, l’une des valves s’ouvre sur mon passage.
Défaillance ? Piège ? Peu importe, le résultat est le même !
Un nuage de gaz jaunâtre s’échappe de la valve et m’enveloppe en moins de temps qu’il faut pour le dire.
(Test de difficulté 5) Je m’éloigne du gaz sans respirer.
$ TEST(5, 'nuageToxiqueReussite', 'nuageToxiqueEchec')

#nuageToxiqueReussite
Gardant mon calme et sans hâte excessive, je continue d’avancer dans le couloir.
Le gaz me pique les yeux, alors je les ferme. Par contre, je me guide d’une main le long du mur.
Peu à peu, le nuage se dissipe et je peux à nouveau respirer.
$ VIEW('level')

#nuageToxiqueEchec
Je pars en courant, une main sur la bouche. Mais, aveuglé par le gaz, et trompé par un virage du couloir, je heurte une poutrelle d’acier.
$ DAMAGE_PLAYER(40, 'usineDefaite')
Le choc me fait sans le vouloir respirer le gaz toxique et je suis alors pris d’une terrible quinte de toux. Mes yeux me brûlent, ma gorge et mes narines aussi !
$ VIEW('level')

#lesPrisonniers
Je passe devant un couloir donnant accès à plusieurs cellules. Je ne peux pas m’empêcher d’y jeter un coup d’œil.
Une petite dizaine d’ouvriers accablés sont enfermés ici.
Un contremaître fait les cent pas dans le couloir tout en apostrophant les captifs.
contremaitre: Vous vous croyez où ?! Pouvoir faire grève ! Grève ! Vous êtes des esclaves bandes de vermines ! Enfoncez-vous ça profondément dans le crâne !
Il y a d’autres personnes pour surveiller. Si je veux intervenir, il va falloir batailler dur, mais peut-être que le jeu en vaut la chandelle.
>>lesPrisonniersIntervenir Intervenir >>lesPrisonniersSEnAller S'en aller

#lesPrisonniersIntervenir
luminio: Hum, un instant je vous prie. M’autorisez-vous à vous botter le cul ?
Je viens de m’avancer et je tapote mon crache-feu.
contremaitre: C’est l’agent des rêves ! Chopez-le !
$ FIGHT('lesPrisonniers', 'lesPrisonniersVictoire', 'usineDefaite')

#lesPrisonniersVictoire
Je récupère les clés des cellules à la ceinture du contremaître et je libère les captifs.
luminio: Vite ! Partez d’ici !
Une parties des ouvriers me remercie chaleureusement et déguerpit en vitesse.
Les autres réagissent à peine. Pour eux, je ne peux plus rien, mais cette bonne action me fait tout de même du bien.
$ CANDELAS = Math.min(MAX_CANDELAS, CANDELAS + 30)
$ WILL = Math.min(10, ALTER('restWillGain', WILL + 1))
$ VIEW('level')

#lesPrisonniersSEnAller
Je n’ose pas intervenir. Ma mission prioritaire est de sauver mon rêveur et de vaincre l’Organiste. Si l’Organiste tombe, ils seront tous sauvés…
$ VIEW('level')

#salleDeSurveillance
Je pénètre dans une pièce circulaire dont la lumière provient uniquement d’innombrables écrans tapissant le mur incurvé.
Je comprends aussitôt qu’il s’agit d’une salle de surveillance…
luminio: Par ma flamme...
Les images qui défilent sur ces écrans me représentent toutes. Le moindre de mes faits et gestes ont été enregistrés. Voilà qui n’aide pas à se sentir en confiance. Qui plus est, même si la salle est vide, le siège à haut dossier qui en occupe le centre semble taillé sur mesure pour l’Organiste.
Je mets une carte Doute dans mon deck.
// Ajouter une carte doute
$ VIEW('level')

#gazDEchappement
J'entre dans une salle dans laquelle tourne un gros moteur à l’allure massive. On dirait qu'il n'a pour seule fonction que de consommer du carburant. Il émet une fumée à l'odeur étrangement aromatisée.
Assourdi par le crépitement du moteur, je commence à traverser la salle en respirant le moins possible la fumée.
(Test de difficulté 3) Je résiste à l'odeur de la fumée.
$ TEST(3, 'gazDEchappementReussite', 'gazDEchappementEchec')

#gazDEchappementReussite
Je finis par traverser la salle, un rien perturbé par l’odeur.
$ VIEW('level')

#gazDEchappementEchec
$ DAMAGE_PLAYER(5, 'usineDefaite')
$ WILL = Math.Max(0, WILL - 1)
Je réalise bientôt que je me suis immobilisé et que je hume à plein poumon la fumée dont l’odeur est si agréable.
>>gazDEchappementArracher (Test de difficulté 6) Je m’arrache à l’influence de la fumée. >>gazDEchappementEcarter (Coût : 20 candelas) J’use de mon pouvoir pour écarter la fumée.

#gazDEchappementEcarter
$ DAMAGE_PLAYER(20, 'usineDefaite')
Je serre les poings, ferme les yeux, retient difficilement ma respiration et, soudain, mon pouvoir se manifeste, créant un vent pour éloigner la fumée du moteur.
>>>gazDEchappementReussite2

#gazDEchappementReussite2
J’arrive de l’autre côté de la pièce avec un sacré mal de tête. Je discerne maintenant la véritable odeur d’hydrocarbure qu’une illusion perfide m’avait fait apprécier.
$ VIEW('level')

#gazDEchappementArracher
$ TEST(5, 'gazDEchappementReussite2', 'gazDEchappementEchec2')

#gazDEchappementEchec2
$ DAMAGE_PLAYER(10, 'usineDefaite')
$ WILL = Math.Max(0, WILL - 2)
Je sniffe toujours avidement l’étrange fumée à l’odeur merveilleuse. Je me suis même approché du tuyau d’échappement pour profiter d’une odeur plus intense.
>>gazDEchappementArracher2 (Test de difficulté 9) Je m’arrache à l’influence de la fumée. >>gazDEchappementEcarter2 (Coût : 40 candelas) J’use de mon pouvoir pour écarter la fumée.

#gazDEchappementEcarter2
$ DAMAGE_PLAYER(40, 'usineDefaite')
Je serre les poings, ferme les yeux, retient difficilement ma respiration et, soudain, mon pouvoir se manifeste, créant un vent pour éloigner la fumée du moteur.
>>>gazDEchappementReussite2

#gazDEchappementArracher2
$ TEST(9, 'gazDEchappementReussite2', 'gazDEchappementEchec3')

#gazDEchappementEchec3
$ DAMAGE_PLAYER(40, 'usineDefaite')
$ WILL = Math.Max(0, WILL - 3)
Je cligne des yeux et réalise que je suis affalé par terre, dans mon vomi. Un mal de tête atroce me vrille le crâne. Je suis, vidé… absolument vidé…
Péniblement, je me redresse et titube jusqu’à la sortie de la salle. Le moteur s’est arrêté, faute de carburant ou victime d’une panne.
$ VIEW('level')

#lesPilesDePapier
Je pénètre dans un bureau administratif qui croule sous des piles de documents. La table est entièrement encombrée, les chaises et les autres meubles aussi.
Je m’apprête déjà à ressortir quand mon regard est attiré par une liasse de papiers qui semble contenir les fragments d’une idée lumineuse.
Tout compte fait, il y a peut-être quelque chose à trouver ici, ou plutôt, à réunir, à reconstituer.
$ PROGRESSIVE_COUNT = 0
$ PILES_COUNT = 1
>>lesPilesDePapierChercher (Test progressif de difficulté 3) Je cherche la suite du feuillet prometteur. >>lesPilesDePapierSortir Je sors d'ici.

#lesPilesDePapierChercher
$ PILES_COUNT += 1
$ PROGRESSIVE_TEST(3, `lesPilesDePapierReussite${PILES_COUNT}`, 'lesPilesDePapierEchec')

#lesPilesDePapierReussite1
Je me plonge dans le tri de plusieurs piles de papiers. Il faut de la méthode pour ne pas se perdre dans tout ce Bazard. Pour ne pas s’y perdre, mais également, pour ne pas tout faire tomber.
Je s’en qu’il en faudrait peu pour que cela arrive. Malgré tout, je déniche la suite du feuillet qui m’a retenu ici. Peut-être que je peux déjà en tirer quelque chose.
>>lesPilesDePapierChercher (Test progressif de difficulté 3) Je continue mes recherches. >>lesPilesDePapierSArreter1 Je m’arrête ici et je profite déjà de ce que j’ai.

#lesPilesDePapierReussite2
Après de nouveaux efforts et de nouvelles piles de documents examinées, je mets la main sur un autre fragment de l’idée lumineuse. Le feuillet doit être presque complet.
>>lesPilesDePapierChercher (Test progressif de difficulté 3) Je continue mes recherches. >>lesPilesDePapierSArreter2 Je m’arrête ici et je profite déjà de ce que j’ai.

#lesPilesDePapierReussite3
Fier de moi, je brandis bientôt les dernières pages perdues du feuillet !
>>>lesPilesDePapierSArreter3

#lesPilesDePapierEchec
Mes recherches deviennent laborieuses et plus je m’acharne, plus je m’embrouille. Pour ne rien arranger, les piles de papiers m’ont l’air de plus en plus grande, de plus en plus hautes, de plus en plus instables. L’une d’elle finit par s’effondrer à cause d’un geste d’humeur de ma part et dès lors c’est comme si tout un château de cartes était mis à bas.
Je m’extirpe tant bien que mal de l’amas de feuilles et, dépité, je quitte le bureau en emportant avec moi un méchant sentiment de malaise.
$ ADD_CARD('doute')
$ VIEW('level')

#lesPilesDePapierSArreter1
Je m’assois par terre et consulte le feuillet. Le feuillet a beau être très incomplet, j’y devine des explications pour optimiser le fonctionnement d’une machine.
$ EVOLVE_DECK()
>>>lesPilesDePapierFin

#lesPilesDePapierSArreter2
Le feuillet quasi complet décrit un procédé pour optimiser le fonctionnement d’une machine.
$ EVOLVE_DECK()
Il s’agit en grande partie de retirer du processus des étapes superflues, pour ne pas dire absurdes.
$ EVOLVE_DECK()
>>>lesPilesDePapierFin

#lesPilesDePapierSArreter3
Le feuillet au complet me permet de prendre toute la mesure du génie qui l’a rédigé.
$ EVOLVE_DECK()
Si l’on suivait ses idées, les machines de cette sinistre fabrique iraient droit à l’essentiel, elles seraient un modèle d’optimisation.
$ EVOLVE_DECK()
Ma lecture du feuillet achevée, je le dépose en évidence sur une pile de documents. 
$ EVOLVE_DECK()
Qui sait, peut-être que cela pourra aider les pauvres ouvriers à faire un travail moins absurde.
$ EVOLVE_DECK()
Sur ce, je m’en vais.
$ VIEW('level')

#lesPilesDePapierFin
Ma lecture du feuillet achevée, je le dépose en évidence sur une pile de documents. Qui sait, peut-être que cela pourra aider les pauvres ouvriers à faire un travail moins absurde. Sur ce, je m’en vais.
$ VIEW('level')

#lesPilesDePapierSortir
$ VIEW('level')

// Mystères majeurs usine

#piegesLaser
Une alarme stridente retentit alors que je viens de m’engager dans une salle à priori anodine.
Les portes se ferment en claquant, la lumière se met à clignoter en rouge. Une voix sortie d’un haut-parleur se met ensuite à beugler :
contremaitre: Crève le lapin ! Le Maître sera content de nous !
Encore un instant et plusieurs appareils s’extirpent des murs et du plafond. Ils font jaillir des rayons laser qui balaient la salle.
(Test de difficulté 8) J’esquive les lasers.
$ TEST(8, 'piegesLaserReussite', 'piegesLaserEchec')

#piegesLaserReussite
Je me mets à bondir et à rouler avec une adresse surréaliste. Certains lasers me frôlent mais aucun ne me touchent. En revanche, je fais en sorte que les machines se visent mutuellement pour s’autodétruire.
C’est un joli spectacle de son et lumière. L’une des portes à même été défoncée. Que demander de plus ?
$ VIEW('level')

#piegesLaserEchec
J’ai beau mettre à profit toute mon agilité, un premier rayon ne tarde pas à me toucher, puis un autre, et encore un autre.
$ DAMAGE_PLAYER(60, 'usineDefaite')
À chaque fois, la brûlure est terrible ! Dire que je passe un sale quart d’heure est un doux euphémisme.
$ VIEW('level')

#etrangeMachine
Me voilà devant une bien étrange machine faite de tubes, de câbles, de batteries, de réservoirs et de tout un tas de boutons.
Il semble que ce soit une sorte de distributeur.
Je vois, au travers du verre, pas mal de choses qui pourraient être intéressantes.
Je pourrais peut-être m’en servir pour reconstituer ou accroitre mon pouvoir si j’arrive à comprendre comment m’en servir.
$ PROGRESSIVE_COUNT = 0
>>etrangeMachineChoix

#etrangeMachineChoix
Est-ce bien prudent de toucher à ce genre d’horreur ?
>>etrangeMachineManipuler Je manipule la machine >>etrangeMachineManipulerSEnAller S'en aller

#etrangeMachineManipuler
$ PROGRESSIVE_TEST(3, `etrangeMachineReussite${PROGRESSIVE_COUNT + 1}`, 'etrangeMachineEchec')

#etrangeMachineEchec
J’appuie probablement sur une touche qu’il ne fallait pas car voilà la machine qui s’emballe.
$ DAMAGE_PLAYER(50, 'usineDefaite')
Avant que je ne puisse me reculer, elle m’explose dessus, ce qui m’éjecte en arrière sur plusieurs mètres.
$ VIEW('level')

#etrangeMachineReussite1
En appuyant sur quelques touches, la machine se met à bourdonner. Une canette de jus de fruit tombe.
Je l’ouvre, la boit, la jette. Elle était bonne !
$ CANDELAS = Math.min(MAX_CANDELAS, CANDELAS + 15)
>>etrangeMachineChoix

#etrangeMachineReussite2
J’appuie à nouveau sur les touches. Cette fois, la machine me donne un sachet de bonbons.
$ EVOLVE_DECK('upgrade')
Je les mange avec gourmandise, ils sont succulents !
>>etrangeMachineChoix

#etrangeMachineReussite3
Maintenant, j’obtiens un éclair à la vanille ! 
$ EVOLVE_DECK('upgrade')
Miam ! Ma pâtisserie préférée !
>>etrangeMachineChoix

#etrangeMachineReussite4
Incrédule, c’est maintenant un cristal de lumière qui tombe dans le baquet de la machine.
// Gain carte lumière
J’ai bien l’impression que la machine est vide. Je ne vois plus rien derrière ses vitres. Par contre, elle a l’air sur le point de surchauffer.
>>etrangeMachineManipulerSEnAller

#etrangeMachineManipulerSEnAller
Je m'en vais en vitesse.
$ VIEW('level')
