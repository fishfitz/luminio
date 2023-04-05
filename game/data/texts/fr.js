export default {
  fight: {
    jeNePeuxPasEchouer: 'Non ! Je ne peux pas échouer ! J\'utilise toute ma Volonté pour récupérer 100 candelas.',
    jAiEchoue: 'J\'ai échoué…',
    maSphereDisparait: 'Ma sphère protectrice disparaît.',
    sonAuraEstHarmonisee: 'Son aura est harmonisée, ce qui l\'assome. Je récupère {{candelasGain}} {{plural("candela", candelasGain)}}.',
    sonAuraSurcharge: 'Son aura surcharge, ce qui l\'assome.',
    sonAuraSObscurcit: 'Son aura s\'obscurcit.',
    sonAuraEstSouillee: 'Son aura est souillée, ce qui ne produit aucun effet.',
    XSubitDegats: '{{cap(le(foe))}} subit {{amount}} {{plural("dégât", amount)}}.',
    XSubitDegatsEtEstDetruit: '{{cap(le(foe))}} subit {{amount}} {{plural("dégât", amount)}} ce qui {{le(foe, "short")}} détruit.',
    estEtourditEtNeJouePas: '{{cap(le(foe))}} est {{fem("étourdi", foe.gender)}} et n\'agit pas.',
    maSphereAbsorbe: 'Ma sphère protectrice absorbe {{protectionRemoved}} {{plural("dégât", protectionRemoved)}}{{broken ? \' avant de se briser\' : \'\'}}.',
    encaisse1: 'J\'encaisse {{candelasRemoved}} {{plural("dégât", candelasRemoved)}} sans broncher.',
    encaisse2: 'J\'encaisse {{candelasRemoved}} {{plural("dégât", candelasRemoved)}} et ça fait pas du bien !',
    encaisse3: 'J\'encaisse {{candelasRemoved}} {{plural("dégât", candelasRemoved)}} tant bien que mal.',
    encaisse4: 'J\'encaisse {{candelasRemoved}} {{plural("dégât", candelasRemoved)}} en serrant les dents pour tenir bon.',
    encaisse5: 'J\'encaisse {{candelasRemoved}} {{plural("dégât", candelasRemoved)}} hébété, à deux doigts de craquer…',
    encaisse6: 'J\'encaisse {{candelasRemoved}} {{plural("dégât", candelasRemoved)}} et… c\'est trop pour moi…',
    jeMeDefausse: 'Je me défausse de {{ amount }} {{plural("carte", amount)}}.',
    uneSphereApparait: 'Une sphère protectrice {{chroma(color, \'fem\')}} de {{amount}} {{plural("point", amount)}} apparaît autour de moi.',
    maSphereSeRenforce: 'Ma sphère protectrice se renforce de {{amount}} {{plural("point", amount)}}.',
    maSphereSeRenforceChangementCouleur: 'Ma sphère protectrice se renforce de {{amount}} {{plural("point", amount)}} et elle devient {{chroma(color, \'fem\')}}.',
    maSphereTeinte: 'Elle teinte l\'aura {{du(foe)}} {{de(aura(color))}}.',
    jePioche: 'Je pioche {{ amount }} {{plural("carte", amount)}}.',
    jeConserveMaProtection: 'Ma sphère s\'affaiblit mais je conserve {{ amount }} {{plural("point", amount)}} de protection.',
    jeRecupereCandelas: 'Je récupère {{ amount }} {{plural("candela", amount)}}.'
  },
  actions: {
    griffesDOmbre1: '{{cap(le(foe))}} me lacère avec ses griffes démesurées.',
    griffesDOmbre2: '{{cap(le(foe))}} se nourrit de l\'énergie qu\'{{il(foe)}} vient de m\'arracher. Sa vie augmente de {{candelasRemoved}} et son aura se teinte de ténèbre.',
    etouffementDOmbre: '{{cap(le(foe))}} attrape ma propre ombre pour l\'étouffer.',
    obscurcissement: '{{cap(le(foe))}} se régénère et sa puissance augmente.',
    contactGlacial: '{{cap(le(foe))}} me touche de ses mains immatérielles et glaciales.',
    murmure: '{{cap(le(foe))}} murmure mon nom d\'une voix pleine de mélancolie. Je ne peux m\'empêcher de frissonner.',
    litanie: '{{cap(le(foe))}} poursuit sa litanie sinistre qui me donne la chair de poule.',
    lenteur: '{{cap(le(foe))}} est si {{fem("lent", foe.gender)}} que pour l\'instant, {{il(foe.gender)}} ne fait rien.',
    coupDEpee: '{{cap(le(foe))}} brandit sa grande épée et l\'abat sur moi.',
    coupDeLanterne: '{{cap(le(foe))}} me donne un grand coup de lanterne.',
    danseDesOmbres: '{{cap(le(foe))}} brandit sa lanterne, faisant danser les ombres sur les murs de pierre. L\'une de ces ombres prend forme et se joint au combat.',
    mitrailleuse1: '{{cap(le(foe))}} ouvre le feu ! Sa mitrailleuse rotative tire de plus en plus vite à mesure que la rotation du canon accélère.',
    mitrailleuse2: 'La mitrailleuse rotative {{du(foe)}} crache ses balles à toutes vitesse !',
    rechargement: 'Une série de décliques succède à la mitraille {{du(foe)}}. Son chargeur est vide. La mitrailleuse cesse peu à peu de tourner alors que la machine procède au rechargement.',
    boom2: 'Les voyants rouges {{du(foe)}} clignotent de plus en plus vite. Des bips stridents les accompagnent.',
    boom1: 'Les voyants rouges et les bips stridents {{du(foe)}} s\'affolent !',
    boom0: 'Après un ultime clignotement de voyant, le bip se prolonge et {{le(foe)}} explose !',
    coupDeMatraque: '{{cap(le(foe))}} me donne un coup de matraque électrique.',
    appelDeRenfort: '{{cap(le(foe))}} attrape son talkie-walkie et beugle dedans : Lapin hostile ! Besoin de renfort !',
    appelDeRenfort2: '{{cap(un(foe))}} arrive.',
    coupDeFouet: '{{cap(le(foe))}} me donne un furieux coup de fouet.',
    motivationDEquipe: '{{cap(le(foe))}} fait claquer son fouet pour motiver ses collaborateurs.',
    regardFixe: '{{cap(le(foe))}} ne fait rien, si ce n\'est me fixer. Et ce regard fixe me remue les tripes.',
    coupDePoignard: '{{cap(le(foe))}} me donne un cruel coup de poignard.',
    gainLife: '{{cap(le(foe))}} régénère {{gain}} points de vie.',
    frappeDesarticulee: '{{cap(le(foe))}} me frappe d\'un geste saccadé, faisant craquer ses articulations.',
    horribleContorsion: '{{cap(le(foe))}} fait craquer ses tendons en se contorsionnant, afin visiblement de remettre en place des morceaux déplacés. C\'est particulièrement écœurant !',
    morsure: '{{cap(le(foe))}} se jette sur moi avec frénésie pour me mordre furieusement !',
    flammeNoire: '{{cap(le(foe))}} brandit son crache-feu qui m\'envoie une flamme noire.',
    bouclierNoir: 'La flamme du chapeau {{du(foe)}} s\'intensifie.',
    balayage: 'D\'un revers de main, {{le(foe)}} me projette au sol. Je doute qu\'{{il(foe.gender)}} s\'en soit même rendu compte. Moi, en tous cas, je l\'ai senti passer !',
    presenceImposante: '{{cap(le(foe))}} se penche vers moi, comme s\'{{il(foe.gender)}} venait seulement de me remarquer. Je me sens écrasé, insignifiant, ridicule devant cette montagne humaine.',
    coupDePoing: '{{cap(le(foe))}} me décoche un direct descendant que je ne parviens pas à esquiver malgré notre différence de taille. Cela aurait pu être pire, mais je suis tout de même rejeté en arrière, et l\'impact m\'étourdit quelque peu.',
    rugissement: 'Me contemplant de toute sa hauteur, {{le(foe)}} pousse un beuglement de rage bestiale. Mes oreilles sifflent encore bien après qu\'il se soit tu.',
    bousculade: '{{cap(le(foe))}} me percute, tentant de me renverser d\'un coup d\'épaule !',
    pietinement: '{{cap(le(foe))}} profite d\'un moment de déséquilibre pour me marcher sur les pieds ou sur toute autre partie de moi qu\'{{il(foe.gender)}} pourrait atteindre. {{cap(il(foe.gender))}} tente véritablement de m\'anéantir au sens strict !',
    pincette: '{{cap(le(foe))}} agrippe ce qu\'{{il(foe.gender)}} peut de ma peau et pince, tire, tord de toutes ses forces. C\'est risible, mais ça fait affreusement mal !',
    furie: '{{cap(le(foe))}} me saute soudainement dessus et me roue de coups de ses tout petits poings. {{cap(il(foe.gender))}} tente même d\'enfoncer ses doigts grêles dans mes yeux !',
    radioFumee: 'Du cigare dépassant de la radio de façon presque obsène jaillit une bouffée de fumée noire. L\'odeur me rappelle en pire les moteurs de l\'avion. Je tousse, je suffoque. Il est temps que ce combat se termine.',
    radioOrdre: 'De la radio jaillit une série de sons distordants qui me transpercent le crâne. Parmi eux, on distingue toujours la voix du gradé, beuglant sans suite ordres et récriminations.',
    radioVolume: 'Le volume de la radio augmente subitement. Il couvre largement celui de ma voix! Le blindage tout entier vibre souc et assaut. Cela ne dure qu\'un temps, mais c\'est dévastateur !',
    giffle: 'De son bras libre, la monstruosité m\'administre une giffle flasque et mouillée. C\'est douloureux mais surtout, c\'est répugnant !',
    masseHumide: 'Une partie de la masse visqueuse de mon adversaire dégouline sur moi. La chose tente de m\'étouffer, de s\'insinuer en moi.',
    eclairNoir: 'L\'Organiste brandit une de ses mains noires et un éclair tout aussi ténébreux me frappe.',
    yeuxLumineux: 'L\'Organiste me jauge de ses yeux lumineux. J\'ai l\'impression qu\'il est capable de voir jusqu\'aux tréfonds de mon âme. Je frissonne et mets une carte Doute dans ma défausse.',
    explosionEmeraude: 'Les bougies sur la couronne de l\'Organiste se mettent à luire plus fort. L\'instant d\'après, me voilà au cœur d\'une explosion émeraude !',
    enzo: 'enzo: Vas-y, Luminio ! Montre-lui qui tu es ! La voix de mon rêveur me redonne de la force. Je peux y arriver !',
    lafoule1: 'Des murmures hostiles me font tourner la tête. Je découvre alors une foule de silhouettes obscures qui font cercle autour de nous. Certaines de ces ombres s\'approchent, belliqueuses.',
    lafoule2: 'Une foule de silhouettes obscures, réunies en cercle autour de nous, se mettent à scander des propos hostiles.',
    eau: 'De l\'eau sombre s\'écoule de sous la cape noire de l\'Organiste. Je sais qu\'il peut sans problème libérer dans la salle tout un océan affin de me noyer.',
    leBombardier1: `
      organiste: Tu n'as guère progressé depuis notre précédente rencontre. Te souviens-tu de comment cela s'est terminé ?
      Oui, hélas, je m'en souviens bien… Ma carte Souvenir cuisant devient Souvenir exacerbé et vient dans ma main.
    `,
    leBombardier2: `
      organiste: Tu n'as guère progressé depuis notre précédente rencontre. Te souviens-tu de comment cela s'est terminé ?
      Oui, hélas, je m'en souviens bien… J'obtiens dans ma main une carte Souvenir exacerbé.
    `,
    leMiroir1: `
      organiste: Regarde-toi ! Vois ce que tu es vraiment !
      L'Organiste sort de sous sa cape un miroir qu'il me montre. Je n'arrive pas à temps à tourner la tête. J'y vois mon reflet qui, aussitôt, s'incarne dans la salle.
    `,
    leMiroir2: `
      organiste: Regarde-toi ! Vois ce que tu es vraiment !
      Mon regard est attiré par le reflet. Il semble plus réel, plus fort, plus vrai…
    `
  },
  cards: {
    flamme: 'Une flamme {{chroma(color, \'fem\')}} jaillit de ma baguette et frappe {{le(foe)}}.',
    bouclier: 'La flamme de mon chapeau devient {{chroma(color, \'fem\')}}.',
    souvenirCuisant: 'Un flash me fait brièvement revoir ma précédente défaite contre le Seigneur cauchemar. C\'était en d\'autres circonstances, mais ça n\'en est pas moins perturbant.',
    peurDiffuse: 'Je me libère de ce sentiment de peur qui m\'étreignait.',
    armure: 'La flamme de mon chapeau s\'attise et devient {{chroma(color, \'fem\')}}.',
    eclatReussite: 'Je cligne des yeux et {{le(foe)}} se retrouve {{fem("englouti", foe.gender)}} dans un vif éclat {{chroma(color)}}.',
    eclatEchec: 'Je cligne des yeux. Zut, rien ne se passe.',
    glypheReussite: 'Du bout de mon crache-feu, je trace dans l\'air un glyphe {{chroma(color)}}. Le glyphe s\'enflamme, puis explose.',
    glypheEchec: 'Du bout de mon crache-feu, je trace dans l\'air un glyphe {{chroma(color)}}. Le glyphe vacille, puis disparait sans rien faire.',
    mainReussite: 'Je brandis une main qui s\'embrase {{de(aura(color))}}, puis c\'est {{le(foe)}} qui s\'embrase à son tour.',
    mainEchec: 'Je brandis une main qui s\'embrase {{de(aura(color))}}, mais rien d\'autre ne se passe.',
    mot: 'Je prononce un mot glorieux.',
    radiance: 'Mon crache-feu se met à briller, inondant {{le(foe)}} d\'une forte lueur {{chroma(color, \'fem\')}}.',
    rayon: 'Un intense rayon {{de(aura(color))}} jaillit du bout de mon crache-feu pour frapper {{le(foe)}}.',
    runeReussite: 'Du bout de mon crache-feu, je trace dans l\'air une rune {{chroma(color, "fem")}}. La rune s\'enflamme, puis explose.',
    runeEchec: 'Du bout de mon crache-feu, je trace dans l\'air une rune {{chroma(color, "fem")}}. La rune vacille, puis disparait sans rien faire.',
    signe: 'Je claque des doigts.',
    brasierDOrfeu: 'La flamme de mon chapeau enfle et devient d\'or étincelant. Je brandis mon crache-feu qui déverse alors un brasier assorti.',
    siropDOrfeu: 'Une canette de sirop de citron apparaît dans ma main. Elle s\'ouvre toute seule, je la vide d\'une traite, puis je la jette derrière moi.',
    alexandre1: 'Je pose doucement ma main sur le bras du rêveur, le serrant légèrement pour le réconforter. Est-ce mon apparence comiquement contrastée avec ce décor anxiogène, reprend-t-il progressivement espoir ? Toujours est-il qu\'un faible sourire se dessine sur son visage crispé. <br/> reveur: Je n\'ai pas peur de vous. Je... Vous n\'êtes pas si grands que ça.',
    alexandre2: 'Je pose fermement ma main sur le bras du rêveur afin de lui communiquer une part de ma conviction. Je crois en lui, et il faut qu\'il le ressente. Il m\'adresse un sourire plus franc tandis que sa voix s\'affermit. D\'ailleurs, n\'est-il pas légèrement plus grand qu\'au début de ce cauchemar ? <br/> reveur: écartez-vous ! Vous n\'êtes même pas si impressionnants. Je ne vous crains pas!',
    alexandre3: 'Je dois à présent sauter pour atteindre la main du rêveur, qui est à présent presque aussi grand que l\'étaient les géants. À mon contact, il esquisse un large sourire, galvanisé qu\'il est par sa transformation. <br/> reveur: Vous n\'êtes même pas réels ! Regardez-vous. Vous n\'êtes que ce que j\'imagine, et je refuse votre existence!',
    alexandre4: 'D\'un bond prodigieux, je parviens tout juste à effleurer les genoux du rêveur. Ce dernier, culminant au-dessus de nos adversaires, m\'adresse un clin d\'œil complice, mais son expression est à présent celle d\'une détermination sans faille. Il veut en finir. <br/> reveur: Je ne me souviens même plus de ce qui me terrorisait chez vous. Vous êtes si chétifs? Avez-vous seulement été grands ?',
    ordreDeTuer: `
      Alors que je tente de contrer verbalement tous les ordres hurlés par la radio, la suite intinterrompue de ces derniers a raison de mon attention l'espace d'une seconde.
      Luminio : Détruisez-les! Ce sont des meurtriers! Tous!
      Je me reprends, atterré par le pouvoir d'influence de ce cauchemar. Mais le mal est fait, un sourire carnacier se dessine sur son visage, remplaçant pour un temps son masque de fureur habituel que j'en viens à préférer.
    `,
    ordrePatriotique: `
      Tandis que je tente de couvrir le flux virulant des paroles de la radio par un discours d'encouragement, mon attention est soudainement parasitée par les mots de mon adversaire et je me surprend à les répéter :
      Luminio : Ce que vous faites, vous le faites pour votre pays ! Vous voulez que votre famille vivent dans la peur ? C'est ça que vous voulez ! Rrprenez-vous soldat, ne soyez pas lâche au pmoint de condamner les vôtres !
      Je me reprends brusquement mais le mal est fait. Le visage du gradé m'adresse un clin d'oeil vicieux tandis que le rêveur pâlit et que sa main s'approche dangereusement du bouton rouge.
    `,
    ordreHumiliant: `
      Je tente sans relâche d'atténuer le flot des paroles de la radio par un discours positif dirigé vers le rêveur. Mais la voix de son supérieur parasite la mienne et ma volonté ploie l'espace d'un instant.
      Luminio : Même si vous refusiez aujourd'hui. Pensez-vous quye les gens oublieraient ce que vous êtes ? Vous êtes un monstre soldat. Mais si vous suivrez les ordres, je ferai de vous un héros !
      Je parviens à endiguer le flux malsain qui me contraignait mais le mal est fait. Un rire gras, vulgaire, jaillit de la radio tandis que le désespoir renaît au fond des yeux du rêveur.
    `,
    stress: 'Je ferme les yeux et prends une grande inspiration pour me calmer.',
    eau: 'Je me débats dans l\'eau qui ne cesse de monter.',
    siegePassager: 'Je tente de repousser le dossier du siège passager, incliné dangereusement vers moi. Il est bien plus lourd que moi, mais mes efforts portent progressivement leurs fruits.',
    siegePassagerAbime: 'Le siège craque, bouge... plus qu\'un petit effort et il ne me dérangera plus !',
    siegePassagerQuasiArrache: 'Un ultime effort... Dans un craquement sinistre, le siège se redresse puis bascule de biais. J\'ai à présent une vue en gros plan sur la créature cauchemardesque qui étreint la rêveuse.',
    portiere: 'Me contortionnant vers l\'avant, je tente de déloger la portière côté conducteur pour libérer la rêveuse. La pression de l\'eau, ma position inconfortable, tout me complique la tâche malgré l\'énergie onirique que j\'y déverse.',
    portiereAbimee: 'J\'insiste, la portière ploie, grince, se gondole… mais elle tient encore bon, refusant obstinément à la rêveuse son salut.',
    portiereQuasiArrachee: 'Cette fois, c\'est la bonne ! me dis-je en me démenant contre cette satanée portière. Ma main crépite d\'énergie, ce monde résiste à ma volonté mais finit par céder, au même titre que la partie avant gauche du véhicule. Contre toute logique, mla rêveuse est alors happée par cette brèche et catapultée vers la surface.',
    peur: 'La peur, c\'est comme du poison. Je ne dois pas la laisser me ronger.',
    peurIntense: 'Non sans mal, je lutte contre la peur intense que j\'éprouve.',
    terreur: 'Tant bien que mal, je me débats contre la terreur qui me noue les tripes.',
    souvenirExacerbe: 'Le flash de ma précédente défaite contre l\'Organiste me frappe avec une brutalité redoublée. Mais est-ce vraiment un souvenir ? Je commence à confondre présent et passé…',
    bombeDeLumiere: 'Une bombe sphérique, comme une boule de billard, apparaît dans ma main libre. J\'appuie sur le bouton rouge qu\'elle comporte, ce qui enclenche son gros tic tac d\'horloge. Puis elle se change en lumière et enfle pour brièvement m\'entourer avant de s\'estomper.',
    bombeDeLumiere2: 'Le gros tic tac arrive à son terme. Ma sphère de protection se met à crépiter, puis elle explose en un flot de lumière.',
    chapeauBougie: 'J\'ai toujours un tour dans mon chapeau-bougie ! Je le retire et fouille à l\'intérieur.',
    mancheAMalice: 'Je fouille dans mes manches à la recherche de quelque chose d\'utile.',
    rayonArcEnCiel: 'Je prends à deux mains mon crache-feu qui se met à briller de mille feux, passant par toutes les couleurs de l\'arc-en-ciel ! C\'est finalement un rayon d\'une pure blancheur qui fuse sur {{le(foe)}}.',
    resilienceDuHeros: 'J\'ai toujours été têtu et c\'est pas maintenant que ça va s\'arrêter ! J\'irai jusqu\'au bout !',
    signeDeLaVictoire: 'De ma main libre, je fais le V de la victoire.',
    soleilRadieux: 'Je me mets à briller, à briller de mille feu, comme un soleil de vacances d\'été ! Les ténèbres fuient cette lueur joyeuse.',
    sphereImmaculee: 'La flamme de mon chapeau devient d\'un magnifique blanc immaculé.',
    epeeDuBrave: 'Une belle épée enflammée d\'or apparaît dans ma main libre. Avant qu\'elle ne se volatilise, je m\'en sers pour frapper {{le(foe)}}.',
    souffleDuDragon: 'Je prends une grande inspiration, puis je souffle du feu comme un dragon. Les flammes dorées sont impressionnantes !',
    desDuDestin: 'Un beau dé marbré apparaît dans ma main. Je l\'agite et le jette par terre. J\'obtiens {{count}}.',
    desDuDestin1: 'Zut, c\'est perdu, le dé disparaît.',
    desDuDestin2: 'Le dé se change en flamme violette qui frappe {{le(foe)}}.',
    desDuDestin3: 'Le dé disparait dans un petit flash violet qui illumine {{le(foe)}}.',
    desDuDestin4: 'Le dé disparaît dans un petit flash violet qui m\'illumine.',
    desDuDestin5: 'Pas mal ! Le dé se change en lumière violette qui pénètre en moi.',
    desDuDestin6: 'Le top ! Le dé se change en bourrasque de flammes violettes !',
    grimoireMysterieux: 'Un vieux grimoire de magicien apparaît en lévitation devant moi. Il s\'ouvre tout seul et ses pages défilent, elles me murmurent leurs secrets. Le livre, ensuite, se referme et se volatilise.',
    cracheFeuDivin: 'Mon crache-feu se change brièvement en argent miroitant et je m\'en sers comme d\'une matraque pour cogner {{le(foe)}}. Cela provoque une explosion argentée éblouissante !',
    toupieSansFin: 'Une jolie toupie de bois apparaît dans ma main. Je souffle dessus et elle se met à tourner en équilibre sur mon pouce. Puis, elle se volatilise dans un petit flash de lumière.'
  },
  tests: {
    success: 'J\'ai pioché {{count}} {{plural("carte", count)}} sans piocher de carte ténèbre, ce qui est suffisant.',
    failure: 'J\'ai pioché {{count}} {{plural("carte", count)}} avant de piocher une carte ténèbre.'
  },
  nightmares: {
    lafoule$geant1: 'Quelques géants se détachent de la masse et se précipitent sur nous. Ils sont monstrueux, tout de rage et de force combinées.',
    lafoule$geant2: 'Quelques géants se ruent sur nous à nouveau. Ils me semblent cependant légèrement plus petits, à moins que nous ayons grandi ?',
    lafoule$geant3: 'Une fois encore, un groupe d\'individus parvient à s\'extraire de la foule pour nous affronter. Cette fois, nul doute possible, ils sont bien amoindris. Presque à taille humaine, leur regard autrefois emprunt de férocité exprime désormais une bonne dose d\'incertitude.',
    lafoule$geant4: 'Une nouvelle vague d\'agresseur s\'abat sur nous. Cependant, bien que hargneux, ils n\'ont plus rien des monstres qui constituaient ce cauchemar. Petits, râblés, ils sont de pathétiques copies de ce qu\'ils furent. Dans leurs yeux, le doute a laissé place à la peur. Leur colère, toujours présente, est celles d\'enfants vicieux et contrariés.'
  }
}
