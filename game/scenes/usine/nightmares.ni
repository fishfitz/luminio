#laForet
En approchant ma main de la porte, je perçois un sentiment d'urgence, une anxiété primaire qui fait courir des frissons tout le long de mon échine. Lorsque je la touche du doigt, je sens presque un souffle empressé sur ma nuque. Je résiste à la tentation de me retourner, et je l'ouvre plutôt. Je suis alors happé par l'ouverture et me retrouve à...
Courir. Je ne dois pas m'arrêter de courir. Autour de moi les arbres se resserrent. Je fonce aussi vite que mes jambes me le permettent, progressant tant bien que mal parmi les troncs enchevêtrés et les racines traîtresses. Derrière moi, bien que je n'ose me retourner pour le vérifier, la chose me pourchasse toujours, c'est une certitude. J'entends son souffle régulier, le piétinement parmi la végétation. Tout dans cette obscure forêt m'opressse, me malmène et me contraint. Je dois courir, courir plus loin, courir plus vite. Dans cette nature hostile, je ne suis que la proie. Mais ma fuite est désordonnée,n précipitée. Je ne sais ni où je vais ni même s'il existe une sortie. Mon coeur bat la chamade et je sais , au fond de moi, que tout ceci ne peut se terminer que d'une seule façon. Je suis piégé, je suis... Je suis..
Je me dissocie à grand peine de l'esprit embrouillé du rêveur qui, je le constate seulement alors, est une rêveuse. Elle court à mes côtés et, dans un premier temps, je constate que je ne cours que par réflexe, mu par son instinct, avant de calquer ma course sur la sienne pour la suivre.
Contrairement à elle, je peux rationaliser la chose et je me retourne un bref instant, manquant de peu de la perdre. Mais ce bref regard en arriè!re me suffit pour comprendre. Il n'y a absoilument rien derrière nous. La forêt qui nous entoure est sombre, menaç!ante en apparence, mais elle ne comporte aucun prédateur en chasse. Ce qu'elle fuit se trouve en elle, et ce n'est probablement pas même de son fait. C'est là un cauchemar rudimentaire, qui tire uniquement sa force de l'influence de son seigneur. Sans cesser ma course j'entame le dialogue avec la rêveuse.
luminio: Ne vous retournez pas, ne regardez pas autour de vous. Faites-moi confiance!
Elle s'arrête net, manquant de trébucher. Je la pousse doucement dans le dos, l'incitant à poursuivre sur sa lancée.
reveur: Qui? Comment?
luminio: économisez votre souffle. Je ne vous veux aucun mal! Faites-moi seulement confiance!
reveur: Je sais! J'ignore comment mais... mais je sais!
Elle est lucide, c'est une bonne chose. Un cauchemar plus habile aurait probablement utilisé mon arrivée à des fins coupables. Je profite de la fenêtre d'action qui s'offre à moi.
luminio: Cauchemar! ç'en est assez! Je te révèle et dte défie! Montre-toi tel que tu fus créé!
La forêt toute entière se met à craquer, à grincer et à rugir. La rêveuse  se fige à nouveau, regardant en tous sens. Je m'arrête également, dans l'expectative. Peut-être faudra-t-il combattre après tout. Puis, loin derrière nous, mais certainement pas assez, un grognement caverneux se fait entendre. Il raisonne jusque dans nos os. S'en suit le début d'un galop effreiné. Cela file droit sur nous!
luminio: Courez! Courez comme si votre vie en dépendait!
reveur: Mais vous avez dit que vous...
luminio: Je sais quoi faire oui! Nous devons jouer le jeu. Fuyez, et je vous guiderez vers une véritable fin de ce cauchemar! Vite!
Comme si la chose comprenait, et c'est très vraisemblablement le cas, le fracat de sa course dans les buissons derrière nous se fait plus retentissant. L'incarnation qui produit un tel vacarme doit être gigantesque, déracinant tout sur son passage. Pas le temps de vérifier, il me faut courir à présent, courir et trouver ou créer un chemin dans cette obscurité. Ce cauchemar était d'abord son rêve à elle. Si j'y trouve la lumière, je nous sauve tous les deux.
$ NIGHTMARES.LA_FORET.GAUGE = 0
$ NIGHTMARES.LA_FORET.ANEANTIR_COST = 1
$ PROGRESSIVE_COUNT = 0

#laForetTour
$ NIGHTMARES.LA_FORET.GAUGE++
$ NIGHTMARES.LA_FORET >= 12 ? GOTO(laForetVictoire) : GOTO(RANDOM_PICK(['laForetRacines', 'laForetLiannes', 'laForetSentier']))

#laForetRacines
Tandis que nous nous précipitons tant bien que mal, le sol se distord sous nos pieds et des racines, que j'aurais jurées absentes auparavant, semblent en jaillir pour s'emparer de nous !
>>laForetRacinesDejouer Déjouer >>laForetRacinesAneantir Anéantir

#laForetRacinesDejouer
$PROGRESSIVE_TEST(1, 'laForetRacinesDejouerReussite', 'laForetRacinesDejouerEchec')

#laForetRacinesDejouerReussite
J'empoigne la main de la rêveuse et, en quelques bonds agiles, nous fait franchir cette portion de terrain. La course continue.
$ NIGHTMARES.LA_FORET.GAUGE++
>>laForetTour

#laForetRacinesDejouerEchec
L'une d'elles s'enroule vivement autour de mes jambes, se rétractant immédiatement avant que je puisse me défendre.
L'effet est amplement suffisant. Fauché en pleine course, j'effectue un vol plané, cueillit au passage par une branche qui, j'en suis sûr, s'est vicieusement mis en travers de ma chute.
$ DAMAGE_PLAYER(10, 'laForetDefaite')
J'ignore si la rêveuse a subi le même sort. Je me contente de m'assurer qu'elle est toujours debout avant de reprendre ma course à ses côtés.
>>laForetTour

#laForetRacinesAneantir
Tournant mes paumes vers le sol, je conjure une intense lumière bleue dont la chaleur carbonise rapidement ce départ de végétation malsaine.
$ DAMAGE_PLAYER(5, 'laForetDefaite')
Je suis sûr d'avoir entendu la chose derrière nous émettre un glapissement strident. Bien fait! Nous reprenons notre course.
>>laForetTour

#laForetLiannes
Notre course effreinée se poursuit mais j'entends soudainement un chuintement de mauvais augure. Quelques liannes d'aspect malsain descendent lentement de la voûte végétale, se balanççant mollement dans notre direction.
>>laForetLiannesDejouer Déjouer >>laForetLiannesAneantir Anéantir

#laForetLiannesDejouer
$ PROGRESSIVE_TEST(1, 'laForetLiannesDejouerReussite', 'laForetLiannesDejouerEchec')

#laForetLiannesDejouerReussite
Stoppant la rêveuse dans son élan, je l'entourre de mon bras et l'aide calmement à slalomer entre les liannes.
Elles ne sont pas bien rapides, mais nombnreuses et il s'agit de rythmer le mouvement. Nous parvenons fort heureusement de l'autre côté du rideau gluant.
>>laForetTour

#laForetLiannesDejouerEchec
Les liannes sont lentes, mais elles s'accordent entre elles : à peine ai-je le temps de me tourner vers la rêveuse pour la guider que l'une d'elle se déploie parresseusement sur mes épaules avant de me ceinturer vivement.
Je me débats de toutes mes forces et elle finit par lâcher prise, non sans m'avoir auparavant enduit d'une sève collante qui durcit rapidement. Mes mouvements sont à présent diablement entravés. Il faudra être prudent à présent.
$ PROGRESSIVE_COUNT++

#laForetLiannesAneantir
Sans cesser de courir, je désigne les liannes d'un mouvement rapide de l'index. Elles s'embrasent instantanément, se recroquevillant sous les flammes tandis que sèche leur sinistre sève.
$ DAMAGE_PLAYER(NIGHTMARES.LA_FORET.ANEANTIR_COST, 'laForetDefaite')
$ NIGHTMARES.LA_FORET.ANEANTIR_COST *= 2
Derrière nous, la rage et la douleur de notre poursuivant se font entendre dans toute la forêt.
>>laForetTour

#laForetSentier
Soudain, alors que nous courons toujours plus vite, le feuillage semble révéler une sente latérale.
Puis une autre semble se découvrir sous une arche végétale. Bientôt, c'est toute la forêt qui semble altérer sa configuration autour de nous dans une série de craquements inquiétants.
>>laForetSentierDejouer Déjouer >>laForetSentierAneantir Anéantir

#laForetSentierDejouer
$ PROGRESSIVE_TEST(1, 'laForetSentierDejouerReussite', 'laForetSentierDejouerEchec')

#laForetSentierDejouerReussite
Le dédale semble inextricable, mais je ne me laisse pas impressionner. Bien plus qu'un chemin praticable, je suis en quête de la lumière, et je la sens déjà plus proche.
Sans hésiter, je me précipite le long d'un sentier que je sais être le bon, entraînant avec moi la rêveuse qui me suit tant bien que mal. Bientôt, la forêt avale ce carrefour surnaturel et notre course reprend.
>>laForetTour

#laForetSentierDejouerEchec
Je tourne la tête en tous sens, évaluant mes chances, puis je prends une décision. à peine engagé dans l'une des voies, je comprends que je me suis laissé abuser par ce cauchemar.
Ce chemin nous fera perdre un temps considérable et nous éloigne de la lumière.
Je n'ai que le temps de constater mon échec, déjà la nature reprend ses droits sur le rêve. Il ne nous reste plus qu'à aller de l'avant et tenter de ratraper par la course ce que je n'ai pu prendre par la ruse.
$ NIGHTMARES.LA_FORET.GAUGE -= 3
>>laForetTour

#laForetSentierAneantir
Pas le temps de jouer à ça ! Je tourne rapidement sur moi-même et frappe dans mes mains.
$ DAMAGE_PLAYER(NIGHTMARES.LA_FORET.ANEANTIR_COST, 'laForetDefaite')
$ NIGHTMARES.LA_FORET.ANEANTIR_COST *= 2
Avec un concert de grincements et de raclements de protestation, la forêt se plie lentement à ma volonté, dégageant un seul chemin, le bon !
Nous nous y précipitons tandis que, derrière nous, un mugissement colérique fait état de la déconvenue de notre adversaire.
>>laForetTour

#laForetVictoire
La rêveuse est sur le point de s'effondrer. Même en rêve, ces choses-là se peuvent concevoir. Qui sait depuis combien de temps elle court, prisonière de son songe. Mais nous sommes tout proches, je le sais. L'entourant de mon bras, je l'entraîne dans un ultime effort. Nous franchissons à toute allure un dernier rempart de branchages et, comme un rêve dans le rêve, nous apparaît une clairière circulaire, vaste, et baignée de lune.
Notre élan nous porte jusqu'en son centre et nous nous arrêtons enfin, peinant à reprendre notre souffle. Elle s'apprête à faire volteface, craignant notre poursuivant, mais je l'en dissuade d'un geste.
reveur: Mais...
luminio: Vous avez parié sur moi, vous vous souvenez? Faites-moi confiance. Il n'y a rien à voir. Seulement le vent. Le vent et les peut-êtres.
Derrière nous, en effet, le galop de la chose se fait à la fois plus proche et plus lointain. Il semble que, tandis qu'il arrive droit sur nous, il perd en consistance, vaincu par la lueur qui transperce le voile du cauchemar.
reveur: Je l'entends encore.
luminio: écoutez mieux. Vous entendez? Seulement le vent.
reveur: Vous dites que rien ne nous poursuivait ?
luminio: Je dis que parfois, il suffit simplement d'allumer la lumière. Je dis que parfois, dans l'obscurité, certaines choses se croient en mesure de nous atteindre, mais qu'on peut le leur interdir; parce qu'elle n'ont de pouvoir que celui qu'on leur confère.
Elle regarde à présent autour d'elle, semblant apprécier le paysage.
reveur: C'est magnifique. J'avais oublié combien j'aimais cet endroit avant que... avant.
luminio: Il faut croire que vous l'aimez toujours. Le passé est un peu comme la chose dans le noir. Il peut vous le faire croire, mais il ne peut pas vous rattraper. Vous courrez toujours plus vite que lui et, une fois dans la lumière, vous n'aurez plus à courir.
reveur: Vous savez? Je crois que j'ai adoré ça. M'échapper. Fuire oui, mais avec vous, en ayant une chance.
Je souris. Je voudrais lui répondre. Lui dire ce que je dis d'ordinaire aux rêveurs. Qu'ils ne se souviendront pas, mais qu'ils en tireront des réponses quand même. Que parfois, l'important n'est pas l'histoire, mais ce qu'elle nous évoque. Je n'en ai pas le temps, déjà ma réalité s'impose à moi. Je ne distingue déjà plus qu'un sourire rêveur sous le clair de lune, un sourire derrière lequel déjà une vie se reconstruit. Puis...
La pièce dans laquelle je reviens à moi est sobre, nue et inélégante à force de simplicité. Ni mobilier ni décoration, c'est littéralement un cube de murs, sol et plafond nus. Si quelque chose a donné vie à ces lieux, cette chose s'en est allée pour ne jamais revenir.
>>hotel_intro

#laForetDefaite
Un geste maladroit de trop, et je trébuche face contre terre. Le choc m'étourdit, voire davantage. Les multiples impacts sur mon corps, la fatigue, et maintenant ça. Je lève un regard implorant vers la rêveuse, mais elle ne me distingue déjà plus, continuant sa course. ERlle m'a oublié, moi et mes promesses. Sur cet amer constat, je sombnre dans l'inconscience.
La faim me réveille. Une faim dévorrante. Je me lève en souplesse et, avant d'avoir pu réfléchir à un plan, me mets à courir. C'est différent cette fois, grisant, galvanisant. Rien ne saurait m'arrêter, ni les arbres, ni les liannes. Je me joue de tout cela. Mieux encore, j'ai le sentiment que la forêt elle-même s'harmonise avec ma trajectoire. Quelque chose me titille en arrière-plan, mais je le chasse d'une tape mentale avant de bondir à nouveau. Déjà, je perçois son odeur, son doux parfum de vie et de peur. La salive envahit ma bouche et je découvre mes... crocs. La chose au fond de moi palpite, s'insurge et proteste. Je sais ce qu'elle ressent, je le comprends petit à petit.
Courbé, à quatre pattes, je n'ai plus rien de ce que j'étais. Je m'en rappelle vaguement. Mais tout comme je sais que rien de tout ceci n'est bien, je sais aussi combien c'est bon. Ma conscience me torturera pendant une éternité, mais je ne cesserai pas de courir, tout comme ma proie. Parce que c'est ce que je suis. Je suis Luminio, son prédateur. Et la chasse ne fait que commencer.

#laVoiture
Je tends la main vers la porte qui vibre légèrement à mon contact. Puis elle s'escamote de façon presque illogique et je bascule en avant, tombant de façon vertigineuse pour me trouver...
Au volant. Je dors au volant de ma voiture. Mes yeux se ferment par intermitance alors que je connais la fin de cette histoire. pourtant c'est plus fort que moi. Juste à côté de moi, sur le siège passager, il ne semble pas avoir conscience du drame qui se joue autour de lui. Il rit de bon coeur à une blague qu'il vient probablement de faire. Le trait d'esprit est de puis bien longtemps hors de mes pensées, mais le rire, je le connais. C'est le dernier rire. J'ai déjà vécu tout ça, j'en suis certaine, pourtant, mes yeux se ferment, une fois de plus. Le rire, l'écart, puis, tandis que je les ouvres, trop tard, comme toujours, l'impact.
Le véhicule est projeté sur le côté. Notre monde bascule, virvolte, puis tombe à pic. Nous tombons. Il n'a pas poussé un seul cri. Son rire s'est seulement interrompu. Ce doit être grave. Je ne parviens pas à tourner la tête, je ne peux le regarder, et déjà nous percutons la surface du lac. Et je coule, nous coulons, encore. L'eau finira par envahir l'habitacle, et alors. alors... Son bras m'effleure, puis m'agrippe dans un ultime effort. Mais il est mort, mort avant de toucher l'eau. Et c'est moi, moi seule qui ai fait ça.
Non. Non! Il est mort, il ne peut me retenir, te retenir. Je suis moi, tu es toi. Nous sommes deux, tu n'es pas seul.
Je parviens au prix d'un effort de volonté à me dissocier de cette rêveuse et, ce faisant, me matérialise dans toute mon individualité sur le siège arrière d'une voiture qui déjà entame sa descente au fond d'un lac. Je la vois de dos. Elle n'est pas très grande, bronzée comme après dix jours de vacances, les yeux dissimulés par des nattes de cheveux noirs malmenées par l'accident. à sa droite, le passager, les traits pour l'heure indistincts. Son bras pendant s'est enroulé autour de la taille de la conductrice et semble lui interdir tout mouvement.
luminio: Regardez-moi. Ne le regardez pas. Il est parti. Vous n'êtes pas coupable.
reveur: Bien sûr que si. Qui d'autre?
luminio: Vous étiez plus jeune, vous avez été imprudente comme d'autres avant vous, comme d'autres après vous et sans conséquence. C'est une erreur, c'est d'une infinie tristesse, mais cela ne peut pas vous tuer.
reveur: S'il ne me lâche pas, je vais me noyer. Et je ne peux pas le laisser.
luminio: Ce n'est pas lui. Il n'est plus là. Vous si. Vous devez vivre si vous voulez vous souvenir. Regardez-moi.
Enfin elle tourne la tête autant que ses entraves le lui permettent. Son regard se pose sur mon incarnation. Je suis le lapin blanc, je suis la surprise et l'inattendu. Bien malgré elle, elle sourit entre ses larmes.
luminio: vous portez cette chose en vous depuis trop longtemps, et quelqu'un d'autre l'exploite, s'en nourrit.
Cauchemar ! Je te vois tel que tu es, et je mets un terme à tes secrets. Montre-moi ton visage tel qu'il était au premier jour!
Dans un long bruit de succion, la tête du passager pivote et je le devine enfin dans toute son horreur. à moitié encastré dans le tableau de bord, déjà gorgé d'eau alors que l'intérieur du véhicule n'est pas même encore inondé, il est tel qu'elle l'imagine. Son visage est une masse congestionnée de débris de verres, d'éléments métaliques encadrant une chaire gonflée et bulbeuse. Son öeil gauche est cave, un éclat de verre triangulaire dépassant grotesquement de l'orbite. Le droit, intact, luit de haine.
Sa voix gargouillante raisonne avec force dans l'espace confiné.
Cauchemar : Tu m'as laissé mourir. J'ai si peur, j'ai si mal, et tu t'en iras seul, comme chaque fois.
rêveuse, d'une voix tremblante : c'est faux. Un autre homme est mort par ma faute, dans une autre voiture. Mais ce n'est pas ici, tu n'es pas lui.
Avec un hurlement de rage, la masse gluante et grinçante tout à la fois s'extirpe du siège passager.
Son mouvement fait trembler la structure du véhicule et, tandis qu'il rempe par-dessus sa rêveuse pour m'atteindre, l'eau se met à monter autour de nous.
$ NIGHTMARES.LA_VOITURE.PORTIERE_ARRACHEE = false
$ FIGHT_TURN_START = NIGHTMARES.LA_VOITURE.TURN_START
$ FIGHT_ACTION_AFTER = NIGHTMARES.LA_VOITURE.ACTION_AFTER
$ FIGHT('laVoiture', 'laVoitureVictoire', 'laVoitureDefaite')

#laVoitureVictoire
Un ultime assaut triomphe de la monstruosité glougloutante. Son ventre se déchire, l'eau qu'il contenait jailit à haute pression. Je parviens in extremis à m'orienter vers l'ouverture, me laissant propulser vers la surface par le flux constant, laissant derrière moi les immondes gargouillis de ce cauchemar vaincu.
Je surnage tant bien que mal et ma volonté, réaffirmée sur ce rêve en pleine dissolution nous mène tous deux sur la rive du lac. La voiture a disparue, ne subsiste que nous, et un paysage de campagne qui déjà perd de ses couleurs.
reveur: Comment saviez-vous?
luminio: c'est mon rôle de savoir ces choses. D'une certaine manière, on pourrait dire que vous m'avez rêvé pour ça.
reveur: Je ne l'ai vraiment pas fait exprès. Vous le savez n'est-ce pas? C'était la nuit, nous étions tous les deux exténués, mais j'ai cru que je l'étais moins que lui et...
luminio: Je sais. Bien sûr que je sais. Et plus important encore, vous le savez aussi. Vous devez vivre à présent.
reveur: Vous croyez que c'est possible?
luminio: Je crois qu'il est possible d'essayer. Je sais en revanche que vous n'aurez plus peur, plus de ça du moins, plus de lui. Vous n'oublierai jamais votre frère, mais vous oubliez déjà cette chose, croyez-moi.
Son regard se fait trouble, tandis que le paysage s'estompe. Elle ouvre la bouche pour dire quelque chose, mais déjà le néant reprend ses droits sur ce qui fut son cauchemar.
Je me trouve dans une pièce nue et sans intérêt. Les murs, vaguement gris, ne se souviennent probablement déjà plus de cette vision d'enfer. Je demeurs seul témoins de ce qui fus, et seul gardien d'une peur vaincue.
$ FIGHT_TURN_START = null
$ FIGHT_ACTION_AFTER = null
>>hotel_intro

#laVoitureDefaite
?FIGHT_FOES.length? La masse grotesque, parodie d'être humain, se rompt enfin. Dans un chuintement nauséabond, elle achève de se liquéfier, dégorgeant toute l'eau qu'elle contenait dans l'habitacle. La structure grince, se tord, mais ne cède pas. Nous sommes piégés !
?!FIGHT_FOES.length? La pression de l'eau montant en flèche, le rictus hideux de cette créature visqueuse et pâle, ç'en est trop et ma volonté tressaille, puis ploie devant l'inévitable. L'eau monte à un rythme impossible à présent.
Je me noie. Je suffoque. Je bascule en arrière tandis que tout s'estompe. Peut-être est-ce fini, tout simplement ? Sauf que...
J'émerge à l'arrière d'une voiture. Elle roule à pleine vitesse sur une route de campagne. Le paysage défile vite, trop vite me dis-je. Je distingue le profile de la conductrice qui lutte au volant pour ne pas s'endormir. à côté d'elle, un jeune homme éclatte de rire. Je n'ai pas compris ce qu'il a dit. J'imagine que ça importe peu. Soudain il tourne la tête vers moi, riant toujours, et m'adresse un clin d'oeil. Mon sang se fige tandis que la ceinture de sécurité semble m'enserrer plus étroitement encore.
Non, me dis-je. Mais je sais bien que si, je connais la suite, et elle ne connaît aucune fin.