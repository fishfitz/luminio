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
    danseDesOmbres: '{{cap(le(foe))}} brandit sa lanterne, faisant danser les ombres sur les murs de pierre. L\'une de ces ombres prend forme et se joint au combat.'
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
    siropDOrfeu: 'Une canette de sirop de citron apparaît dans ma main. Elle s\'ouvre toute seule, je la vide d\'une traite, puis je la jette derrière moi.'
  },
  tests: {
    success: 'J\'ai pioché {{count}} {{plural("carte", count)}} sans piocher de carte ténèbre, ce qui est suffisant.',
    failure: 'J\'ai pioché {{count}} {{plural("carte", count)}} avant de piocher une carte ténèbre.'
  }
}
