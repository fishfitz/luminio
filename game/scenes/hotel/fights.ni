// Combats mineurs hotel

#individuSinistre
J’évolue dans un beau salon quand un serveur chargé de son plateau s’approche de moi. L’espace d’un bref instant, je m’attends presque à ce qu’il me propose un rafraîchissement mais il n’en est rien.
Il dépose son plateau sur une commode et se met à me fixer avec hostilité.
luminio: Vous ne devriez pas faire ça.
Le serveur sort un couteau de sa poche en guise de réponse.
$ FIGHT('individuSinistre', 'individuSinistreVictoire', 'hotelDefaite')

#individuSinistreVictoire
$ EVOLVE_DECK()
luminio: Je vous avais dit que vous ne devriez pas faire ça.
Après un dernier regard lancé à la dépouille du serveur, je poursuis ma route.
$ VIEW('level')

#desIndividusSinistres
Je progresse dans un corridor luxueux quand je croise des regards hostiles.
Plusieurs personnes sont là, immobiles, à me fixer avec insistance.
Personne ne semble décidé à m’attaquer, alors j’envisage de continuer mon chemin, mais voilà que je devine l’éclat furtif d’une lame.
$ FIGHT('desIndividuSinistres', 'desIndividuSinistresVictoire', 'hotelDefaite')

#desIndividuSinistresVictoire
$ EVOLVE_DECK()
Je continue ma route, laissant derrière moi quelques cadavres.
D’autres personnes ont vu l’affrontement, mais sans réagir, comme si tout ça était normal.
$ VIEW('level')

#pantinEtIndividuSinistre
Je tombe sur une scène fort étrange. Un individu d’une souplesse surréaliste exécute des contorsions pour le bon plaisir d’un homme en costume chic.
L’homme, une coupe de vin en main, finit cependant par tourner la tête vers moi, attendant visiblement que je fasse pour lui un tour.
luminio: Une autre fois, peut-être.
Je veux m’éloigner, mais l’homme et le contorsionniste se jettent sur moi, comme pour me punir de ce manque de coopération.
$ FIGHT('pantinEtIndividuSinistre', 'pantinEtIndividuSinistreVictoire', 'hotelDefaite')

#pantinEtIndividuSinistreVictoire
$ EVOLVE_DECK()
luminio: Il vous va, ce numéro ?
Me voilà de nouveau tranquille. Il n’y a que des malades, ici !
$ VIEW('level')

#cannibale
Je passe à proximité d’une femme qui vient de vider le contenu de son assiette.
Elle donne l’impression de s’être goinfrée, elle pue également l’alcool. Elle lève la main pour appeler un serveur, seulement, elle est installée dans un couloir, pas dans un restaurant.
Frustrée qu’on ne vienne pas la servir sur l’instant, elle baisse les yeux sur moi et se lèche les babines.
La seconde d’après, son visage devient celui d’un monstre et elle se jette sur moi pour me dévorer.
$ FIGHT('cannibale', 'cannibaleVictoire', 'hotelDefaite')

#cannibaleVictoire
$ EVOLVE_DECK()
Mal à l’aise, je ne sais pas si j’ai détruit un monstre ou simplement une victime de ce lieu horrible qui semble pouvoir rendre fou n’importe qui.
Je m’éloigne.
$ VIEW('level')

// Combats intermédiaires hotel

#refletMalefique
J’évolue dans les couloirs cossus de ce lieu étouffant quand mon regard est attiré par un miroir mural.
Au début, je n’y vois que mon reflet ainsi que le cadre d’or ouvragé. Je m’apprête à me détourner quand mon reflet m’adresse un sourire sardonique.
Puis il se transforme, me montrant une version de moi-même pervertie.
luminio: Non, ça, ça n’arrivera jamais !
Mon reflet m’assure du contraire d’un clin d’œil tout en sortant du miroir.
$ FIGHT('refletMalefique', 'refletMalefiqueVictoire', 'hotelDefaite')

#refletMalefiqueVictoire
$ EVOLVE_DECK()
Le reflet a disparu et le miroir est brisé.
Je me détourne et continue mon exploration.
$ VIEW('level')

#fouleHostile
Je m’engage dans un grand salon où pas mal de monde écoute placidement un artiste mélancolique jouer de son piano dépressif.
Au début, tout va bien, personne ne semble me remarquer, et puis soudain, une fausse note, le piano se tait et tous les regards sont braqués sur moi.
luminio: Euh, salut !
D’un même mouvement, tout le monde se lève. C’est fou comme ils ont tous l’air sinistre ici !
$ FIGHT('fouleHostile', 'fouleHostileVictoire', 'hotelDefaite')

#fouleHostileVictoire
$ EVOLVE_DECK()
Le musicien, comme si de rien n’était, se remet à jouer de son piano. Peu lui importe visiblement que j’ai décimé son auditoire.
Je ne m’attarde pas pour écouter son morceau.
$ VIEW('level')

#leTheatre
Je pénètre dans un théâtre cossu.
Sur scène, des acteurs à la gestuelle singulière s’adonne visiblement à une pièce abstraite particulièrement recherchée. J’évite de trop y faire attention et je me glisse dans la pénombre pour traverser cet endroit sans attirer l’attention.
Seulement, de manière inexplicable, je me retrouve soudain sur scène, cerné par les acteurs qui ont tout de pantins désarticulés.
Ils font craquer leur nuque et me lancent un sourire meurtrier. Le public, lui, ne réagit pas, si ce n’est en me fixant.
$ FIGHT('leTheatre', 'leTheatreVictoire', 'hotelDefaite')

#leTheatreVictoire
$ EVOLVE_DECK()
Je me tourne face au public et je lui adresse une petite courbette.
Personne ne bronche. Je quitte la scène et file hors d’ici. Ils vont devoir se trouver de nouveaux acteurs.
$ VIEW('level')

// Combats majeurs hotel

#laSouris
Je passe devant ce qui semble être un aimable repas de famille lorsque soudain, le repas m’appelle à l’aide.
timothee: Luhinio ! Au checours !
Je réalise alors, stupéfait, que ce qui trône dans le plat au milieu de la table, ce n’est autre qu’un collègue agent des rêves, Timothée, une souris que je connais très bien.
Il est nu et ligoté, une grosse pomme dans la bouche. Et dans un instant, il va se faire couper en morceaux !
Je m’élance en avant…
Dès que je suis à proximité de la table, la famille s’interpose. Ils n’ont plus rien d’innocents humains et dans leurs yeux brûlent une faim malsaine.
$ FIGHT('laSouris', 'laSourisVictoire', 'hotelDefaite')

#laSourisVictoire
$ EVOLVE_DECK('upgrade')
timothee: Ho, merci Luminio, merci beaucoup !
Après l’avoir libéré de ses liens, j’aide mon collègue à descendre de la table. Il chancelle sur ses jambes, mais il est tout de même plus en forme que je m’y attendais.
luminio: Tu devrais filer d’ici. L’Organiste va se concentrer sur moi, profite-en.
timothee: Tu as raison, Luminio. Sois prudent. Tiens, il m’ont tout pris, sauf ça.
$ ADD_TRINKET(RANDOM_PICK(['cristal_celeste', 'cristal_belarcane', 'cristal_orfeu']))
timothee: Peut-être que ça te sera utile.
$ VIEW('level')

#galerieDesMiroirs
Après avoir franchi une porte, je me retrouve dans une galerie aux miroirs étincelants. Où que je regarde, mon reflet me fixe.
Certaines glaces étant déformantes, le résultat est assez stupéfiant. Je progresse quelques instants entre les miroirs, cherchant l’autre côté de la galerie, jusqu’au moment où l’expression hostiles d’un de mes reflets me fait m’immobiliser.
Dans un complet silence, plusieurs de mes reflets sortent de leur miroir respectifs.
Leurs intentions belliqueuses ne font aucun doute.
$ FIGHT('galerieDesMiroirs', 'galerieDesMiroirsVictoire', 'hotelDefaite')

#galerieDesMiroirsVictoire
$ EVOLVE_DECK('upgrade')
Le calme revient dans la galerie dévastée. 
L’un des miroirs brisés dissimulait une cachette contenant un coffret. Je décide de l’ouvrir pour voir ce qu’il contient.
$ ADD_TRINKET(RANDOM_PICK(['cristal_celeste', 'cristal_belarcane', 'cristal_orfeu']))
Le sol est jonché de morceaux de verre. Étant pieds nus, je me déplace avec précaution.
$ VIEW('level')
