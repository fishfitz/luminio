#start
// Ambiance audio : orage sinistre
// Musique (sans bouclage) : intro
Quelque part dans l’Onirium, le monde des rêves et des cauchemars…
// Bruitage : apparition de Luminio
// Illustration : le château vu de l’extérieur avec, devant, Luminio qui apparaît.
Luminio: Organiste ! Tu as bafoué toutes les règles, transgressé toutes les limites ! Moi, Luminio, le Porte-joie, je viens mettre fin à ta folie !
Mon rêveur, il a pris mon rêveur… Cette pensée raisonne en échos furieux dans ma tête et me fait oublier ma peur. J’ignore si l’Organiste va relever mon défi. J’attends, dans le vent et la pluie. Aucune goutte ne me mouille car j’en ai décidé ainsi.
// Bruitage : la grande porte du château qui s’ouvre en cliquetant de manière menaçante
La porte s’ouvre… Je ne peux m’empêcher de frémir, mais mon devoir m’interdit d’hésiter. J’entre dans le château de l’Organiste d’un pas décidé.
// Remarque : ici, normalement, la musique doit être arrivée à son terme
// Musique : aucune
// Son : la porte qui se referme en claquant, son percutant et immédiat pour servir de transition entre les deux ambiances audio.
// Ambiance audio : acte 1
// Illustration : Luminio, de face, se tenant devant la porte close, dans un hall sinistre
$ TEST(2, 'default_victory', 'default_defeat')
Me voilà à l’intérieur. Je suis certain que l’Organiste m’attend, que tout ceci n’est qu’un piège. Mais ça ne se passera pas comme la dernière fois. Bon sang, il a prit mon rêveur, je ne peux pas échouer…
$ VIEW('level')

#default_defeat
$ VIEW('play')
Oh non, je suis mort
Game over

#default_victory
$ VIEW('play')
Youpi j'ai gagné
$ VIEW('level')