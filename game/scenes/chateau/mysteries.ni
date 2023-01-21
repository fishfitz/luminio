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
Mon cœur bat si fort...
// ADD a doute card
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
Je plonge sur un côté et me recroqueville. La pierre ne m'aplati pas comme une crêpe, mais je sens tout de même ma douleur.
$ DAMAGE_PLAYER(50, 'chateauDefaite')
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
