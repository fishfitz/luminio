export default {
  fight: {
    jeNePeuxPasEchouer: 'Non ! Je ne peux pas échouer ! J’utilise toute ma Volonté pour récupérer 100 candelas.',
    jAiEchoue: 'J’ai échoué…',
    maSphereDisparait: 'Ma sphère protectrice disparaît.',
    sonAuraEstHarmonisee: 'Son aura est harmonisée, ce qui l`\'assome. Je récupère {{candelasGain}} candelas.',
    sonAuraSurcharge: 'Son aura surcharge, ce qui l\'assome.',
    sonAuraSObscurcit: 'Son aura s\'obscurcit.',
    sonAuraEstSouillee: 'Son aura est souillée, ce qui ne produit aucun effet.',
    XSubitDegats: '{{cap(le(foe))}} subit {{amount}} dégâts.',
    XSubitDegatsEtEstDetruit: '{{cap(le(foe))}} subit {{amount}} dégâts ce qui {{le(foe, "short")}} détruit.',
    estEtourditEtNeJouePas: '{{cap(le(foe))}} est {{fem("étourdi", foe.gender)}} et n\'agit pas',
    maSphereAbsorbe: 'Ma sphère protectrice absorbe {{protectionRemoved}} {{plural("dégât", protectionRemoved)}}{{broken ? \' avant de se briser\' : \'\'}}.',
    encaisse1: 'J’encaisse {{candelasRemoved}} {{plural("dégât", candelasRemoved)}} sans broncher.',
    encaisse2: 'J’encaisse {{candelasRemoved}} {{plural("dégât", candelasRemoved)}} et ça fait pas du bien !',
    encaisse3: 'J’encaisse {{candelasRemoved}} {{plural("dégât", candelasRemoved)}} tant bien que mal.',
    encaisse4: 'J’encaisse {{candelasRemoved}} {{plural("dégât", candelasRemoved)}} en serrant les dents pour tenir bon.',
    encaisse5: 'J’encaisse {{candelasRemoved}} {{plural("dégât", candelasRemoved)}} hébété, à deux doigts de craquer…',
    encaisse6: 'J’encaisse {{candelasRemoved}} {{plural("dégât", candelasRemoved)}} et… c\'est trop pour moi…',
    jeMeDefausse: 'Je me défausse de {{ amount }} {{plural("carte", amount)}}.',
    uneSphereApparait: 'Une sphère protectrice {{chroma(color, \'fem\')}} de {{amount}} {{plural("point", amount)}} apparaît autour de moi.',
    maSphereSeRenforce: 'Ma sphère protectrice se renforce de {{amount}} {{plural("point", amount)}}.',
    maSphereSeRenforceChangementCouleur: 'Ma sphère protectrice se renforce de {{amount}} {{plural("point", amount)}} et elle devient {{chroma(color, \'fem\')}}.',
    maSphereTeinte: 'Elle teinte l\'aura {{du(foe)}} {{de(aura(color))}}.',
    jePioche: 'Je pioche {{ amount }} {{plural("carte", amount)}}.'
  },
  actions: {
    griffesDOmbre1: '{{cap(le(foe))}} me lacère avec ses griffes démesurées.',
    griffesDOmbre2: '{{cap(le(foe))}} se nourrit de l’énergie qu’{{il(foe)}} vient de m’arracher. Sa vie augmente de {{candelasRemoved}} et son aura se teinte d\'Imergie.',
    hurlementDOmbre: '{{cap(le(foe))}} pousse un hurlement déchirant.',
    obscurcissement: '{{cap(le(foe))} se régénère et sa puissance augmente.'
  },
  cards: {
    flamme: 'Une flamme {{chroma(color, \'fem\')}} jaillit de ma baguette et frappe {{le(foe)}}.',
    bouclier: 'La flamme de mon chapeau devient {{chroma(color, \'fem\')}}.'
  }
}
