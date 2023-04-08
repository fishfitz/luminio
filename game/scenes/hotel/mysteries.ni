// Mystères mineurs hotel

#hotelAmbiance1
J’évolue le long de corridors feutrés. Aucun monstre en vue, aucun piège, pas même une décoration hostile, et pourtant, inexplicablement, chaque porte, chaque virage suscitent de l’appréhension.
Tout est trop calme… Trop pesant…
$ VIEW('level')

#hotelAmbiance2
Je croise des personnes dans un coquet salon. On dirait des clients dans un hôtel de luxe, ou les résidents d’un manoir.
J’ai du mal à établir la fonction du lieu que je découvre. Toujours est-il que ces gens sont bien habillés, convenables à tout point de vue, mais la manière dont ils me fixent avec insistance n’a rien d’agréable.
$ VIEW('level')

#hotelAmbiance3
Me voilà devant une porte. Poignée dorée, bois verni, elle est très belle comme tout ce qui se trouve ici.
Malgré tout, j’hésite à la franchir. Derrière, je crois percevoir un souffle, un râle. De plaisir ? D’agonie ? J’actionne la poignée, ouvre la porte… Derrière, il n’y a rien qu’un élégant bureau vide.
$ VIEW('level')

#hotelAmbiance4
Je croise un groupe de personnes bien habillées qui, immobiles, silencieuses, fixent toutes le mur lambrissé de cette petite salle. J’essaie un instant de suivre leur regard mais ce mur n’a décidément rien d’étrange. Voilà pourquoi la situation, elle, paraît très étrange.
$ VIEW('level')

#mereCannibale
Alors que je passe dans une galerie de statues de marbre toutes plus belles et raffinées les unes que les autres, mon regard est accroché par une sculpture d’un malsain perturbant.
Elle représente une mère dévorant son nourrisson avec enthousiasme.
(Test de difficulté 4) Je repousse la vision.
$ TEST(5, 'mereCannibaleReussite', 'mereCannibaleEchec')

#mereCannibaleReussite
Je cligne des yeux, la statue de mère, maintenant, serre tendrement son nourrisson contre elle, une touchante scène d’amour maternelle.
Ai-je imaginé la précédente version ? Je ne crois pas. Je me hâte de m’en aller.
$ VIEW('level')

#mereCannibaleEchec
J’ai beau avoir l’habitude des cauchemars, il y a quelque chose dans cette statue qui me pénètre, me choque.
J’ai presque l’impression d’entendre les os du bébé craquer sous les dents de la mère cannibale !
$ DAMAGE_PLAYER(30, 'hotelDefaite')
Je ferme les yeux, secoue la tête. Quand je rouvre les yeux, la statue représente maintenant une mère serrant tendrement son nourrisson. Peu importe, le mal est fait…
$ VIEW('level')

#laBoiteDeNuit
Je commence à entendre une musique électro qui pulse, son tempo réglé comme un battement de cœur. Je tourne à un angle et je vois alors la porte de ce que j’imagine être une boîte de nuit.
Je pousse le battant, pour voir si je peux continuer mon chemin dans cette direction et c’est effectivement le cas.
La musique me déferle dessus, primitive, attirante. Des silhouettes se déhanchent sous les spots de la piste de danse. Je suis tenté de les rejoindre, juste histoire d’évacuer un peu de ma tension.
>>laBoiteDeNuitDanser Je vais danser. >>laBoiteDeNuitSortir Je me dépêche de sortir d’ici.

#laBoiteDeNuitDanser
Je m’accorde un instant pour me joindre au danseur. La musique est si forte qu’elle fait vibrer chaque fibre de mon corps.
$ WILL = Math.max(0, WILL - 2)
$ DECK.some(c => PEUR.includes(c.name)) && DECK.splice(DECK.findIndex(c => PEUR.includes(c.name)), 1)
$ DECK.some(c => PEUR.includes(c.name)) && DECK.splice(DECK.findIndex(c => PEUR.includes(c.name)), 1)
$ DECK.some(c => PEUR.includes(c.name)) && DECK.splice(DECK.findIndex(c => PEUR.includes(c.name)), 1)
Je m’y abandonne, je me défoule et me retrouve bien vite en sueur, l’esprit un peu plus léger.
$ VIEW('level')

#laBoiteDeNuitSortir
Je me hâte, les mains sur les oreilles, fixant mon regard droit devant moi. Bientôt, je laisse l’agressive musique derrière moi.
$ VIEW('level')

#laSalleBlanche
Derrière une porte, je découvre une curieuse salle blanche, parfaitement cubique, parfaitement vide, parfaitement silencieuse.
Je me demande à quoi elle sert, si jamais elle sert à quelque chose. Peut-être que je peux y méditer quelques instants pour me ressourcer.
>>laSalleBlancheProfiter Je profite de la quiétude de cet endroit. >>laSalleBlancheSEnAller Je préfère vite m’en aller.

#laSalleBlancheProfiter
Je m’assois en tailleur pour une séance bienvenue de méditation. Le résultat escompté n’est pas vraiment celui que j’attendais. Des idées étranges pénètrent dans ma tête.
$ FORCE_CHOICE = true
$ EVOLVE_DECK()
$ DECK_EVOLUTION.selectedCard = RANDOM_PICK($world.DECK.filter(c => !c.irremovable))
_
$ EVOLVE_DECK()
$ DECK_EVOLUTION.selectedCard = RANDOM_PICK($world.DECK.filter(c => !c.irremovable))
_
$ EVOLVE_DECK()
$ DECK_EVOLUTION.selectedCard = RANDOM_PICK($world.DECK.filter(c => !c.irremovable))
Je sors de la salle un peu chancelant.
$ FORCE_CHOICE = false
$ VIEW('level')

#laSalleBlancheSEnAller
Je me méfie trop de ce que je peux trouver dans ce château pour m’attarder.
$ VIEW('level')

// Mystères intermédiaires hotel

#vagueDeTerreur
Je ne sais pourquoi, mais quelques ombres portées sur un mur richement décoré se changent soudain en une scène tirée de mes pensées, de mes craintes.
Mes échecs passés, les difficultés que je traverse, tout s’unit en une boule qui me tombe au fond de l’estomac, me coupe le souffle.
Note de développement : la mécanique de cette pièce n'est pas encore implémentée.
// < Si on a aucune carte Peur (les trois versions) :
// Je ferme les yeux, serre les poings. Ma conviction reprend le dessus. Oui, j’en ai bavé, et je vais encore en baver, mais je vais réussir ! Les ombres, sur le mur, retrouvent un aspect inoffensif.
// < Si on a au moins une carte Peur :
// Je me mets à trembler comme une feuille, terrifié par la perspective de ce qui m’attend. Je reçois autant de cartes Doute que je possède de cartes Peur.
// > On obtient une carte Doute par carte Peur (les 3 versions comptent).
$ VIEW('level')

#leDivan
J’arrive à l’entrée d’un rassurant salon. Il est désert. Une paisible horloge rythme le temps de son tic tac régulier.
Un douillet divan me promet une pause bien mérité.
>>leDivanSAsseoir Je m’assois sur le divan >>leDivanContinuer Je continue mon chemin

#leDivanSAsseoir
Je m’assois dans le divan qui est aussi confortable qu’il en avait l’air. Je pousse un soupir d’aise et laisse mes pensées dérivées.
$ CANDELAS = Math.min(MAX_CANDELAS, CANDELAS + 20)
$ EVOLVE_DECK('upgrade')
Le temps passe… Je fini par sursauter, je m’étais endormi un instant. Et pendant ce temps, j’ai eu l’impression que le tic tac de l’horloge me raisonnait dans la tête.
Je me lève, mais pas sans difficulté. Je suis comme coupé dans mon élan et les doutes m’assaillent sur mes chances de l’emporter sur l’Organiste.
Je mets 2 cartes Doute dans mon deck.
$ ADD_CARD('doute')
$ ADD_CARD('doute')
$ VIEW('level')

#leDivanContinuer
J’hésite, mais mes sens d’agent des rêves me font douter que ce lieu soit propice à un répit.
La charge imergique est trop élevée, quelque chose se cache ici, un piège probablement. Je me détourne et m’en vais.
$ VIEW('level')

#sceneChoquante
Je passe devant un salon et je tourne la tête pour voir ce qui s’y passe. Cet endroit ressemble en fait à un restaurant, des gens chics y mangent, tout en écoutant de la musique classique.
Soudain, un père de famille sort une arme à feu et tire dans la tête de sa femme, ainsi que celles de ses deux jeunes enfants, avant de se suicider d’une balle dans la bouche.
(Test de difficulté 6) Je supporte la scène.
$ TEST(6, 'sceneChoquanteReussite', 'sceneChoquanteEchec')

#sceneChoquanteReussite
Je cligne des yeux, incrédule, et soudain, la famille continue son repas.
Plus de sang, plus de mort, plus de pistolet, c’est comme si j’avais tout imaginé. Le père rit et trinque avec sa belle épouse.
Certes, son rire est faux et il y a une drôle d’expression dans son regard, mais je ne m’attarde pas, peu désireux d’en voir davantage.
$ VIEW('level')

#sceneChoquanteEchec
La musique classique s’est tut, un lourd silence plane maintenant dans la pièce. Sinistre contraste après quatre coups de feu retentissants.
Je vois les corps affalés, les crânes éclatés, les esquilles d’os, le sang et la cervelle.
J’ai un haut le cœur et me recule, choqué. En levant une main, je constate que j’ai été éclaboussé.
$ DAMAGE_PLAYER(50, 'hotelDefaite')
En rabaissant ma main, la scène s’est effacé et la musique est repartie. La famille, de nouveau, mange comme si de rien n’était.
Enfin presque. Il n’y a certes plus de corps, plus de pistolet, mais dans les verres de cristal, il y a du sang au lieu du vin.
Je me détourne et me hâte de partir.
$ VIEW('level')

#leTableau
Au hasard de mes tribulations, j’ouvre une porte et me retrouve dans ce qui semble être une loge d’artiste.
Je fouille rapidement l’endroit des yeux, en quête d’une menace ou de quelque chose d’utile, quand je réalise que la pièce est en fait deux fois plus petite que je ne l’avais cru au départ.
En effet, le mur du fond est peint en trompe l’œil de manière à donner l’illusion que la pièce se poursuit. La peinture représente notamment une table où trône quelque chose qui pourrait bien m’intéresser.
>>leTableauPouvoir (Coût : 10 candelas) J’utilise mon pouvoir pour rendre cette chose réelle. >>leTableauNon Je n’ai pas de temps à perdre avec ça.

#leTableauPouvoir
$ DAMAGE_PLAYER(10, 'hotelDefaite')
Inspiré par l’image, je tends la main et fais usage de mon pouvoir. Je sens alors une sombre volonté émaner de la peinture.
(Test de difficulté 5) Je lutte contre cette sombre influence.
$ TEST(5, 'leTableauPouvoirReussite', 'leTableauPouvoirEchec')

#leTableauPouvoirReussite
Ma volonté l’emporte sur la chose malfaisante contenue dans la peinture et je me retrouve à tenir ce que je convoitais.
$ ADD_TRINKET()
La toile, elle, montre maintenant une table vide.
$ VIEW('level')

#leTableauPouvoirEchec
Je cligne des yeux, secoue la tête, j’ai perdu le fil de mes pensées.
?!TRINKETS.length?Je cligne des yeux, secoue la tête, j’ai perdu le fil de mes pensées. Je remarque toutefois assez vite que ce que je cherchais à faire n’a pas fonctionné. 
?TRINKETS.length?Je remarque alors que la peinture m’a littéralement volé un de mes trésors. Celui-ci est maintenant illustré à côté de ce que je convoitais et qui n’a pas bougé de place.
?TRINKETS.length?TRINKETS.splice(TRINKETS.findIndex(RANDOM_PICK(TRINKETS)), 1)
Je décide, dépité, de m’en aller.
$ VIEW('level')

#leTableauNon
La peinture est probablement là pour me narguer, je décide de ne pas lui accorder plus d’attention qu’elle n’en mérite.
$ VIEW('level')

#laPeinture
Je pénètre dans un salon dont le mur du fond est dissimulé derrière un grand rideau noir. Ce rideau, soudain, coulisse pour révéler une toile de moi-même.
Elle semble fidèle en tout point et pourtant, l’expression qu’elle dégage me met profondément mal à l’aise.
>>laPeintureAlterer (Coût : 10 candelas) J’altère la peinture pour éviter qu’elle me dénature. >>laPeintureIgnorer (Test de difficulté 5) Je tâche d’ignorer la peinture.

#laPeintureAlterer
Je ferme les yeux, me concentre et rouvre les yeux. Voilà, c’est mieux ! La toile dégage maintenant une impression positive et familière.
TODO: dupliquer une carte
// Todo dupliquer une carte
$ VIEW('level')

#laPeintureIgnorer
$ TEST(5, 'laPeintureReussite', 'laPeintureEchec')

#laPeintureReussite
Il me faut un effort de volonté pour me détourner de la toile sans en être affecté. Mais j’y suis parvenu et je m’en vais sans me retourner.
$ VIEW('level')

#laPeintureEchec
J’ai beaucoup de mal à détourner les yeux de la toile. Je recule hors de la pièce et parvient enfin à m’arracher à sa contemplation.
?!TRINKETS.length?$ DAMAGE_PLAYER(10, 'hotelDefaite')
?TRINKETS.length?TRINKETS.splice(TRINKETS.findIndex(RANDOM_PICK(TRINKETS)), 1)
Je me sens si mal…
$ VIEW('level')

// Mystères majeures hotel
#enzo
Au détour d’un couloir, je me retrouve face à un jeune garçon que je ne peux que reconnaître sur le champ.
luminio: Enzo !
Mon rêveur, il est là, en jean et tee-shirt. Des larmes coulent sur ses joues et ses yeux sont dans le vague. C’est avant tout pour lui que je suis venu, pour le sauver de l’Organiste.
luminio: Enzo, tu vas bien ?
Je m’approche, il s’approche, mais il ne répond toujours rien.
(Test de difficulté 8) Je remarque à temps le piège.
$ TEST(6, 'enzoReussite', 'enzoEchec')

#enzoReussite
Une seconde… Enzo serait là, sans surveillance ? Et il me suffirait de l’emmener hors d’ici ? C’est beaucoup trop facile !
Je dois me faire violence, aller à l’encontre de mes émotions, mais je m’immobilise et mon expression se durcie.
luminio: Tu n’es pas Enzo.
Et maintenant que je le dis, je sais que j’ai raison, je le ressens au plus profond de moi.
L’illusion affiche un visage haineux et me saute à la gorge. Mais ayant été démasquée, elle a perdu tout pouvoir. Elle disparait avant de me toucher.
$ VIEW('level')

#enzoEchec
Je finis bien par avoir un doute sur la véritable nature de ce que je vois, mais, hélas, trop tard… Enzo me saute à la gorge et il me lacère cruellement avec des ongles changés en lames de poignard. Il me renverse sur le sol, éclate d’un rire méchant, puis se volatilise.
$ DAMAGE_PLAYER(70, 'hotelDefaite')
Je me suis fait avoir en beauté…
$ VIEW('level')

#leSensDesBougies
Je traverse ce qui ressemble à une vaste salle de bal. Des couples en beaux costumes y virevoltent au son d’un violon. Mais personne n’a l’air joyeux et la musique est sinistre.
Puis je remarque le vaste chandelier qui domine cette pièce. C’est une reproduction de la couronne de l’Organiste. Chaque bougie symbolise l’un de ses exploits.
Il a tant de bougies et moi, je n’en ai qu’une seule… Les doutes me prennent…
?DECK.every(c => c.name !== 'Doute')?>>leSensDesBougiesSuccess
>>leSensDesBougiesEchec

#leSensDesBougiesSuccess
Mais je me ressaisis. Ce n’est pas le moment de flancher, ce n’est pas le moment de douter !
$ CANDELAS = Math.min(MAX_CANDELAS, ALTER('restCandelasGain', CANDELAS + 20))
$ WILL = Math.min(10, ALTER('restWillGain', WILL + 1))
D’ailleurs, ne suis-je pas déjà arrivé jusqu’ici ? Je peux aller jusqu’au bout ! J’irai jusqu’au bout !
$ VIEW('level')

#leSensDesBougiesEchec
Je me sens écrasé par le poids de ce chandelier. Et soudain, je réalise que tous les danseurs m’observent. Je vois dans leurs yeux mon propre échec à venir.
luminio: Laissez-moi ! Laissez-moi !
$ for (let i = 0; i < DECK.filter(c => c.name === 'Doute'); i++) { ADD_CARD('terreur'); }
Je m’enfuis en courant et je mets autant de cartes Terreur dans mon deck que je possède de cartes Doute.
$ VIEW('level')

#leCasino
Je me tiens dans un clinquant casino qui bourdonne d’activité et d’excitation. On joue, on rit, on crie, l’atmosphère est fiévreuse, moite, mais très attirante.
D’ailleurs, mon regard est attiré par les gains potentiels que je pourrais obtenir si je m’arrête un instant pour éprouver ma chance. Ils sont affichés sur un panneau mural lumineux.
1 Jeton : Améliorer une carte<br/>2 Jetons : Retirer une carte<br/>3 Jetons : Obtenir un trésor<br/>5 Jetons : obtenir une carte blanche
$ JETONS = 0
$ PROGRESSIVE_COUNT = 0
Une machine à sous ne semble attendre que moi.
?WILL?>>leCasinoJouer (Test progressif de difficulté 1) Je tente ma chance. >>leCasinoFiler Je file d’ici en vitesse.
>>leCasinoFiler

#leCasinoFiler
Non merci ! Pas de jeu d’argent avec moi ! Je sais trop bien où est-ce que ça peut mener.
$ VIEW('level')

#leCasinoJouer
$ PROGRESSIVE_TEST(1, `leCasinoReussite`, 'leCasinoEchec')

#leCasinoReussite
Gagné ! J’ai obtenu 1 jeton.
$ JETONS += 1
J’ai {{ JETONS }} jetons. La machine à sous clignote de mille feux devant moi. À côté, je peux voir le tableau des gains.
1 Jeton : Améliorer une carte<br>2 Jetons : Retirer une carte<br>3 Jetons : Obtenir un trésor<br>5 Jetons : obtenir une carte blanche
>>leCasinoJouer (Test progressif de difficulté 1) Je joue encore. >>leCasinoGains Je vais prendre mes gains.

#leCasinoGains
Je m’approche du comptoir pour retirer mes gains.
>>leCasinoChoix

#leCasinoChoix
?JETONS === 1?>>leCasinoGains1
?JETONS === 2?>>leCasinoGains2
?JETONS === 3?>>leCasinoGains3
?JETONS >= 5?>>leCasinoGains4

#leCasinoGains1
>>leCasinoAmeliorerCarte 1 Jeton : Améliorer une carte >>leCasinoFin Je m'en vais.

#leCasinoGains2
>>leCasinoAmeliorerCarte 1 Jeton : Améliorer une carte >>leCasinoRetirerCarte 2 Jetons : Retirer une carte >>leCasinoFin Je m'en vais.

#leCasinoGains3
>>leCasinoAmeliorerCarte 1 Jeton : Améliorer une carte >>leCasinoRetirerCarte 2 Jetons : Retirer une carte  >>leCasinoTresor 3 Jetons : Obtenir un trésor >>leCasinoFin Je m'en vais.

#leCasinoGains4
>>leCasinoAmeliorerCarte 1 Jeton : Améliorer une carte >>leCasinoRetirerCarte 2 Jetons : Retirer une carte  >>leCasinoTresor 3 Jetons : Obtenir un trésor >>leCasinoCarteBlanche 5 Jetons : Obtenir une carte blanche >>leCasinoFin Je m'en vais.

#leCasinoAmeliorerCarte
$ JETONS -= 1
$ EVOLVE_DECK('upgrade')
?JETONS? >>leCasinoChoix
>>leCasinoFin

#leCasinoRetirerCarte
$ JETONS -= 2
$ EVOLVE_DECK()
?JETONS? >>leCasinoChoix
>>leCasinoFin

#leCasinoTresor
$ JETONS -= 3
$ ADD_TRINKET(RANDOM_PICK(['cristal_celeste', 'cristal_belarcane', 'cristal_orfeu']))
?JETONS? >>leCasinoChoix
>>leCasinoFin

#leCasinoCarteBlanche
$ JETONS -= 5
$ ADD_WHITE_CARD()
?JETONS? >>leCasinoChoix
>>leCasinoFin

#leCasinoFin
Je sais que j’ai pris des risques à m’attarder ici, mais c’est toutefois avec le sourire que je m’en vais.
$ VIEW('level')

#leCasinoEchec
?WILL?$ WILL -= 1
?WILL?Zut… perdu… Mais je peux, peut-être, retenter ma chance…
$ JETONS = 0
?WILL?>>leCasinoJouer (Test progressif de difficulté 1) Je retente. >>leCasinoRenoncer Je renonce.
Je suis vidé, je suis ruiné ! Deux gros bras me jettent hors du casino.
$ VIEW('level')

#leCasinoRenoncer
Dépité, je m’en vais de cet endroit maudit.
$ VIEW('level')