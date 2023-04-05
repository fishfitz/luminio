// Mystères mineurs chateau

#chateauAmbiance1
Je progresse dans de larges et hauts couloirs ténébreux éclairés seulement par quelques torches moribondes. Ces dernières semblent n'être là que pour agiter les ombres. Chaque coin et recoin est menaçant, mais pourtant, rien ne se passe.
$ VIEW('level')

#chateauAmbiance2
Je traverse de grands corridors plongés dans la pénombre. Par quelques portes entrouvertes, je devine un mobilier décrépit qui n'a pourtant pas tout perdu de son charme d'en temps. Jadis, ce château était si beau…
$ VIEW('level')

#chateauAmbiance3
Un courant d'air froid me souffle dans le cou. Je me retourne, redoutant l'apparition d'un fantôme, mais il n'y a rien, rien sauf cette haute horloge qui égraine le temps de son sinistre tic tac… Je lui trouve un air funeste et je m'en éloigne rapidement.
$ VIEW('level')

#chateauAmbiance4
J’arrive au seuil d’une pièce que je suis surpris de reconnaître. Malgré la corruption du château, cet endroit n’a que peu changé. Certes, il est plus sombre, plus délabré, mais c’est toujours ce petit salon avec sa table basse et ses fauteuils. Un jeu d’Échec est posé sur cette table. Il ne servira plus, à priori. Je tourne les talons. Tout ça, c’est du passé…
$ VIEW('level')

#lesPiques
Je marche dans un des sombres couloirs du château quand soudain les dalles froides sous mes pieds se mettent à trembler.
J'ai intérêt de dégager de là en vitesse !
(Test de difficulté 3) Je bondis de côté.
$ TEST(3, 'lesPiquesReussite', 'lesPiquesEchec')

#lesPiquesReussite
Des piques, comme des griffes d'acier, transpercent les dalles et jaillissent de manière anarchique.
luminio: Il va falloir plus que ça pour m'impressionner !
Je ne leur accorde qu'un bref regard avant de continuer mon chemin.
$ VIEW('level')

#lesPiquesEchec
Des piques, comme des griffes d'acier, transpercent les dalles et jaillissent de manière anarchique.
La douleur, le sang qui gicle...
$ DAMAGE_PLAYER(10, 'chateauDefaite')
Je pousse un cri et je me retrouve assis par terre, le souffle court...
$ VIEW('level')

#lePuits
J’arrive dans une vaste salle qui me fait l’effet d’une cour intérieure, sauf qu’elle n’est pas à ciel ouvert.
En levant les yeux, je ne vois que de lourdes voutes de pierre. Au centre de cette salle vide de tout mobilier et traversée par de nombreux courants d’air, il y a un puits.
En me penchant sur la margelle de ce puits, je vois, loin en bas, dans un gouffre de ténèbres, comme une lointaine étoile briller.
Une chaîne plonge à sa rencontre et une manivelle permet de remonter le seau qui doit se trouver au bout.
Si je remonte le seau, est-ce que je vais remonter en même temps cette belle lumière ?
>>lePuitsRemonter (Test de difficulté 5) Je remonte le seau. >>lePuitsSEloigner Je préfère m'éloigner de ce puits.

#lePuitsRemonter
$ TEST(5, 'lePuitsReussite', 'lePuitsEchec')

#lePuitsReussite
J’empoigne à deux mains la manivelle et je l’actionne péniblement. La chaîne s’enroule peu à peu, la mécanique à demie grippée pousse des couinements de métal. Mais mes efforts finissent par payer.
Le seau atteint bientôt le niveau de la margelle et je peux constater que ce qui est lumineux, c’est l’eau qu’il contient, comme si elle avait conservé en elle des rayons de lune. Je m’en abreuve et récupère des forces.
$ CANDELAS = Math.min(MAX_CANDELAS, ALTER('restCandelasGain', CANDELAS + 20))
$ VIEW('level')

#lePuitsEchec
J’empoigne à deux mains la manivelle et je l’actionne péniblement. La chaîne s’enroule peu à peu, la mécanique à demie grippée pousse des couinements de métal. Et puis, soudain, la chaîne se brise !
La manivelle m’emporte avec elle alors qu’elle se met à tourbillonner, libre de toute entrave.
$ DAMAGE_PLAYER(10, 'chateauDefaite')
Après avoir exécuté une sorte de salto ridicule, j’embrasse le sol avec force.
$ VIEW('level')

#lePuitsSEloigner
Cette lumière est probablement un piège, je préfère continuer mon exploration.
$ VIEW('level')

#petitEffroi
Alors que je marche dans les couloirs du château, le décor se met à chanceler autour de moi. Il est brièvement remplacé par la sinistre vision de mon trépas. Funeste présage…
>>petitEffroiLutter (Coût : 5 candelas) Je ne me laisse pas faire. >>petitEffroiEndurer J’endure la vision.

#petitEffroiLutter
Je serre les poings et la bougie de mon chapeau enfle. Sa lumière chasse brièvement les ténèbres, efface cette vision d’horreur.
$ DAMAGE_PLAYER(5, 'chateauDefaite')
Si le Seigneur Cauchemar compte m’intimider avec si peu, c’est peine perdu !
$ VIEW('level')

#petitEffroiEndurer
La vision parvient à instiller en moi un peu de peur, mais il en faut plus pour me faire reculer, bien plus !
$ ADD_CARD('peurDiffuse')
$ VIEW('level')

// Mystères intermédiaires chateau

#laGuillotine
Clic !
Une dalle, sous mon pied, s'est enfoncée. Un sifflement d'air provenant d'au-dessus de moi succède au déclic...
(Test de difficulté 5) Je bouge de là en vitesse.
$ TEST(5, 'laGuillotineReussite', 'laGuillotineEchec')

#laGuillotineReussite
Je plonge en avant, me réceptionne sur les mains, exécute un salto dans la foulée et termine sur mes pieds, comme si de rien n'était.
Derrière moi, une lame de guillotine s'est à demi enfoncé dans le sol.
Je ne lui accorde qu'un bref regard avant de poursuivre.
$ VIEW('level')

#laGuillotineEchec
Avant que je ne puisse réagir, une lame de guillotine s'abat juste devant moi, si proche que je la sens frôler mon museau et qu'elle a découpée une partie de mon chapeau.
$ DAMAGE_PLAYER(30, 'chateauDefaite')
À la chiche lueur d'une torche proche, je vois mon visage effrayé se refléter sur l'acier froid.
$ VIEW('level')

#uneStatueDeLumière
Je déniche une sorte de débarras encombré de caisses poussiéreuses et de tonneaux vides.
Il n'y a probablement rien d'intéressant ici, mais malgré tout, mon instinct me pousse à mieux regarder.
C'est alors que je remarque, tout au fond, une statue finement sculptée qui a l'aspect d'un angelot. On dirait qu'il s'agit d'une des rares choses à ne pas encore avoir été perverti dans ce château.
Je pose ma main dessus et un sentiment de bien-être m'envahit.
$ CANDELAS = Math.min(MAX_CANDELAS, CANDELAS + 20)
Je gagne 20 candelas.
$ VIEW('level')

#funesteMiseEnGarde
Alors que je m'engage dans un couloir, j'aperçois devant moi une haute silhouette coiffée de chandelles.
Cette silhouette imposante je la reconnaitrais entre mille car c'est celle de l'Organiste.
(Test de difficulté 5) Je garde mon calme.
$ TEST(5, 'funesteMiseEnGardeReussite', 'funesteMiseEnGardeEchec')

#funesteMiseEnGardeReussite
Mais mes sens d'agent des rêves ne me trompent pas, ce n'est qu'une vision. D'ailleurs, elle s'efface.
Maintenant, le couloir est vide. Je suis parvenu à garder mon calme et c'est bon signe pour la suite.
$ VIEW('level')

#funesteMiseEnGardeEchec
luminio: Organiste ! Tu t'es en fin décidé à te montrer !
J'ai serré les poings, j'ai presque crié. Mais la silhouette s'efface, me laissant seul dans le couloir.
$ ADD_CARD('doute')
Mon cœur bat si fort...
$ VIEW('level')

#lesOubliettes
Je passe devant des prisons basses de plafond où des malheureux en haillons sont enfermés. Je tourne la tête vers eux et croise leurs regards emplis de détresse.
Était-ce d’autres agents des rêves ? Peu importe, la vraie question que je dois me poser, c’est : que dois-je faire ?
>>lesOubliettesLiberer (Coût : 10 candelas) J'utilise mon pouvoir pour libérer les prisonniers. >>lesOubliettesRien Rien du tout.

#lesOubliettesLiberer
$ DAMAGE_PLAYER(10, 'chateauDefaite')
Je me rends rapidement compte que je n’ai aucune chance de trouver les clés de ces prisons, alors j’use de mon influence pour remédier au problème.
Les portes protestent, je les sens même en colère, mais elles finissent par céder et avec des grincements contrariés, elles s’ouvrent.
$ EVOLVE_DECK('upgrade')
Les prisonniers s’enfuient comme des ombres apeurées. Un seul d’entre eux, le dernier, me remercie et au ton de sa voix, je sais avoir pris la bonne décision.
$ VIEW('level')

#lesOubliettesRien
Je ne vois de clé nulle part et je doute qu’il soit judicieux que j’use de mon propre pouvoir pour sauver ses pauvres êtres.
Si je bats le Seigneur cauchemar, tout le monde sera sauvé. Je m’en vais.
$ VIEW('level')

#laBibliothequeTenebreuse
Me voilà dans une vaste et inquiétante bibliothèque. Il me semble la reconnaître, sans en être certain car ce lieu ne m’inspire rien de commun avec l’ancienne bibliothèque du château.
Les livres qui s’alignent en quantité innombrable suintent de mystères, de pouvoir et de menace. Est-il judicieux d’y jeter un coup d’œil ?
$ BIBLIOTHEQUE_COUNT = 0
>>laBibliothequeTenebreuseExaminer J'examine un livre. >>laBibliothequeTenebreusePartir Je m'en vais.

#laBibliothequeTenebreuseExaminer
Tous les livres ont une couverture noire dénuée du moindre titre ou de toute autre inscription.
J’en prends un au hasard et l’ouvre. Sitôt fait, l’ouvrage fait défiler ses pages entre mes mains, déversant directement dans mon esprit son sinistre contenu. C’est à la fois effrayant et grisant.
$ ADD_CARD('peur')
$ EVOLVE_DECK('upgrade')
Je repose le livre à sa place. Tant d’autres s’offrent à moi…
$ BIBLIOTHEQUE_COUNT += 1
?BIBLIOTHEQUE_COUNT < 3?>>laBibliothequeTenebreuseExaminer J'examine un livre. laBibliothequeTenebreusePartir Je m'en vais.
Je repose ce livre, tout frissonnant et exalté à la fois.
J’ai envie de poursuivre mes lectures, le pouvoir qui dort ici me serait grandement utile pour venir à bout de ma terrible tâche, mais le temps presse et je me suis déjà trop attardé ici.
$ VIEW('level')

#laBibliothequeTenebreusePartir
Le pouvoir qui dort ici me serait grandement utile pour venir à bout de ma terrible tâche, mais le temps presse.
$ VIEW('level')

#leDebarratPoussiereux
Je découvre une petite pièce encombrée de caisses et de cartons, pleine de poussière.
C’est un débarrât et j’imagine qu’on y a relégué des choses qui ne plaisaient plus au maître des lieux. Je peux peut-être y jeter un coup d’œil, mais l’empilement semble d’un équilibre précaire.
$ PROGRESSIVE_COUNT = 0
$ DEBARRAT_RESULTS = ['leDebarratPoussiereuxFiole', 'leDebarratPoussiereuxTresor', 'leDebarratPoussiereuxSouvenir']
>>>leDebarratPoussiereuxChoix

#leDebarratPoussiereuxChoix
>>leDebarratPoussiereuxFouiller Je fouille dans les caisses et les cartons. >>leDebarratPoussiereuxPartir Je quitte le débarrât.

#leDebarratPoussiereuxFouiller
$ PROGRESSIVE_TEST(2, `leDebarratPoussiereuxReussite`, 'leDebarratPoussiereuxEchec')
?RANDOM()>0.65 || !DEBARRAT_RESULTS.length?>>>leDebarratPoussiereuxRien
$ GOTO(RANDOM_PICK(DEBARRAT_RESULTS))

#leDebarratPoussiereuxFiole
Je déniche dans un carton quelconque une petite fiole de lumière. En la vidant d’un trait, elle me rend quelques forces.
$ CANDELAS = Math.min(MAX_CANDELAS, ALTER('restCandelasGain', CANDELAS + 15))
$ DEBARRAT_RESULTS = DEBARRAT_RESULTS.filter(c => c !== 'leDebarratPoussiereuxFiole')
>>>leDebarratPoussiereuxChoix

#leDebarratPoussiereuxTresor
Je trouve dans une caisse un objet digne d’intérêt. Je ne suis pas venu pour rien !
$ ADD_TRINKET(RANDOM_PICK(['cristal_celeste', 'cristal_belarcane', 'cristal_orfeu']))
$ DEBARRAT_RESULTS = DEBARRAT_RESULTS.filter(c => c !== 'leDebarratPoussiereuxTresor')
>>>leDebarratPoussiereuxChoix

#leDebarratPoussiereuxSouvenir
Je mets la main sur un petit coffret renfermant un souvenir de jadis, quand l’Organiste était encore du bon côté.
$ ADD_TRINKET(RANDOM_PICK(['cristal_celeste', 'cristal_belarcane', 'cristal_orfeu']))
$ EVOLVE_DECK('upgrade')
>>>leDebarratPoussiereuxChoix

#leDebarratPoussiereuxRien
J’ouvre quelques caisses, éventre quelques cartons… Je ne trouve que des choses vieilles, ternes, salies, et souvent cassées aussi. Rien d’intéressant.
>>>leDebarratPoussiereuxChoix

#leDebarratPoussiereuxEchec
Ce qui devait arriver, arrive ! Je déséquilibre un tas de caisses qui, en s’effondrant, entraîne tout le reste avec lui.
$ DAMAGE_PLAYER(40, 'chateauDefaite')
Et moi, je me prends tout dessus ! Le moins que je puisse dire, c’est que ça ne fait pas du bien !
$ VIEW('level')

#leDebarratPoussiereuxPartir
Je quitte le débarrât et poursuis mon exploration.
$ VIEW('level')

// Mystère majeur chateau

#laPierreQuiRoule
Je me suis engagé depuis quelques instant dans un long couloir rectiligne quand, soudain, tout se met à trembler et je sens le sol s'incliner.
Au bout du couloir, devant moi, retentit un grand fracas, puis le grondement redouble d'intensité.
Quelque chose de gros s'approche, rien de moins qu'une énorme pierre !
(Test de difficulté 8) J'évite la pierre.
$ TEST(8, 'laPierreQuiRouleReussite', 'laPierreQuiRouleEchec')

#laPierreQuiRouleReussite
La pierre est impressionnante. Fort heureusement, je conserve mon calme.
Je la regarde s'approcher puis, au dernier moment, j'exécute un bond spectaculaire.
Les lapins sautent haut, et les lapins des rêves, plus encore.
Je passe par-dessus la pierre, retombe souplement sur les dalles, puis arrive sans encombre au bout du couloir.
$ VIEW('level')

#laPierreQuiRouleEchec
La pierre est impressionnante !
Je reste un instant figé de stupeur en la voyant fondre sur moi, puis je fais volte-face et détale en courant.
Seulement, la pierre prend de plus en plus de vitesse !
Elle me rattrape ! Elle va m'écrabouiller !
$ DAMAGE_PLAYER(50, 'chateauDefaite')
Je plonge sur un côté et me recroqueville. La pierre ne m'aplati pas comme une crêpe, mais je sens tout de même ma douleur.
$ VIEW('level')

#laGrandeSalle
J'arrive dans une vaste salle plongée dans l'obscurité.
Je ne pense pas m'y attarder mais voilà que des torches, une à une, s'allument, révélant progressivement les lieux.
J'ai un choc en reconnaissant l'endroit. C'est ici-même que j'ai compris que l'Organiste était en train de nous trahir.
Je le considérais comme un mentor et voilà que je découvrais en lui la corruption du cauchemar...
On s'est battus, j'ai dû fuir... Ce jour là, j'ai failli disparaître...
Ce souvenir cuisant, je ne suis pas prêt de l'oublier, mais retourner sur les lieux de son origine ravive mes doutes.
// ADD a doute card
Là, abandonné au sol, git un des objets que j'ai perdu en ce jour funeste.
$ ADD_TRINKET(RANDOM_PICK(['cristal_celeste', 'cristal_belarcane', 'cristal_orfeu']))
L'Organiste l'a-t-il laissé là à mon intention ?
$ VIEW('level')

