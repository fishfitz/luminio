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
D’un autre côté, est-ce bien prudent de toucher à ce genre d’horreur ?
$ PROGRESSIVE_COUNT = 0
>>> etrangeMachineChoix

#etrangeMachineChoix
>>etrangeMachineManipuler Je manipule la machine >>etrangeMachineManipulerSEnAller S'en aller

#etrangeMachineManipuler
$ PROGRESSIVE_TEST(3, `etrangeMachineReussite${PROGRESSIVE_COUNT + 1}`, 'etrangeMachineEchec')

#etrangeMachineEchec
J’appuie probablement sur une touche qu’il ne fallait pas car voilà la machine qui s’emballe.
$ DAMAGE_PLAYER(50, 'usineDefaite')
Avant que je ne puisse me reculer, elle m’explose dessus, ce qui m’éjecte en arrière sur plusieurs mètres.

#etrangeMachineReussite1
En appuyant sur quelques touches, la machine se met à bourdonner. Une canette de jus de fruit tombe.
Je l’ouvre, la boit, la jette. Elle était bonne !
$ CANDELAS = Math.min(MAX_CANDELAS, CANDELAS + 15)
>>> etrangeMachineChoix

#etrangeMachineReussite2
J’appuie à nouveau sur les touches. Cette fois, la machine me donne un sachet de bonbons.
$ EVOLVE_DECK('upgrade')
Je les mange avec gourmandise, ils sont succulents !
>>> etrangeMachineChoix

#etrangeMachineReussite3
Maintenant, j’obtiens un éclair à la vanille ! 
$ EVOLVE_DECK('upgrade')
Miam ! Ma pâtisserie préférée !
>>> etrangeMachineChoix

#etrangeMachineReussite4
Incrédule, c’est maintenant un cristal de lumière qui tombe dans le baquet de la machine.
// Gain carte lumière
J’ai bien l’impression que la machine est vide. Je ne vois plus rien derrière ses vitres. Par contre, elle a l’air sur le point de surchauffer.
>>> etrangeMachineManipulerSEnAller

#etrangeMachineManipulerSEnAller
Je m'en vais en vitesse.
$ VIEW('level')
