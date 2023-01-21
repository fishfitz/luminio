// Combats mineurs chateau

#duoDOmbresFugaces
Je marche dans un des sombres couloirs du château quand mon attention est attirée par des ombres mouvantes.
C'est une torche maladive qui les engendre sans guère éclairer quoi que ce soit. Un instant plus tard, ces ombres fugaces prennent substance et se jettent sur moi.
$ FIGHT('duoDOmbresFugaces', 'duoDOmbresFugacesVictoire', 'chateauDefaite')

#duoDOmbresFugacesVictoire
$ EVOLVE_DECK()
Les ombres se sont évaporées, je peux poursuivre mon exploration.
$ VIEW('level')

#murmure
Alors que je marche dans les sombres couloirs du château, j'entends mon nom murmuré par un courant d'air glacial.
En tournant la tête, je constate qu'il ne s'agit pas d'un simple courant d'air, mais d'un fantôme.
$ FIGHT('murmure', 'murmureVictoire', 'chateauDefaite')

#murmureVictoire
$ EVOLVE_DECK()
Le fantôme a été détruit, non sans essayer une dernière fois de murmurer mon nom. Si ça lui fait plaisir... Je reprends ma marche.
$ VIEW('level')

#armureHantee
Alors que je marche dans le sinistre dédale des sombres couloirs, un pesant bruit de pas métallique se fait entendre. Il résonne entre les murs froids.
Encore un peu et la haute forme d'une armure s'avance à ma rencontre. Il ne semble n'y avoir personne à l'intérieur.
$ FIGHT('armureHantee', 'armureHanteeVictoire', 'chateauDefaite')

#armureHanteeVictoire
$ EVOLVE_DECK()
L'armure se disloque et tombe sur les dalles dans un grand vacarme de métal. Ça me fait un peu penser à un tas de boîtes de conserve qu'on aurait renversé. Quoi qu'il en soit, j'enjambe quelques morceaux pour continuer mon trajet.
$ VIEW('level')

#armureEtFantome
Je découvre, au détour d'un virage, une vieille armure sur son support. Elle ne semble pas vouloir bouger, mais voilà qu'une voix murmure dans l'air.
fantome: Luminio nous rend visite. Comme c'est gentil.
C'en suit un rire qui me fait me retourner. Un fantôme est là. L'armure choisit cet instant pour remuer. Il va falloir se battre.
$ FIGHT('armureEtFantome', 'armureEtFantomeVictoire', 'chateauDefaite')

#armureEtFantomeVictoire
$ EVOLVE_DECK()
L'armure est en pièces et le fantôme s'est volatilisé. Deux monstres de moins sur ma route, plus que quelques centaines probablement.
$ VIEW('level')

// Combats intermédiaires chateau

#ombreEpaisse
Je passe à proximité d'une pièce plongée dans une totale obscurité.
Je préfère ne pas m'y aventurer, mais voilà qu'une ombre épaisse émerge de cette noirceur pour m'attaquer !
$ FIGHT('ombreEpaisse', 'ombreEpaisseVictoire', 'chateauDefaite')

#ombreEpaisseVictoire
$ EVOLVE_DECK('upgrade')
L'ombre se cabre, puis fond sous mes yeux, sa substance noire retournant dans les ténèbres de cette salle. Je me détourne de cette dernière et m'éloigne.
$ VIEW('level')

#litanie
Un chant sinistre me fait dresser les oreilles. Il est lancinant, désincarné, et il vient à moi.
Il faut que je le fasse taire ou la peur va me dévorer, j'ai déjà la chair de poule.
Je m'oriente vers ce chant et me retrouve vite face à face avec un fantôme.
$ FIGHT('litanie', 'litanieVictoire', 'chateauDefaite')

#litanieVictoire
$ EVOLVE_DECK('upgrade')
Voilà, le fantôme n'est plus, ainsi que son chant sinistre. Je peux poursuivre mon chemin.
$ VIEW('level')

#embuscade
fantome: Où crois-tu aller, comme ça, le lapin ?
Cette voix, à la limite de l'audible, vient de surgir des ombres du couloir. Soudain, des monstres me barrent le chemin.
$ FIGHT('embuscade', 'embuscadeVictoire', 'chateauDefaite')

#embuscadeVictoire
$ EVOLVE_DECK('upgrade')
luminio: Je vais où je dois aller.
Il n'y a cependant plus personne pour entendre ma réponse car j'ai fait le ménage. Il va falloir plus que ça pour me stopper.
$ VIEW('level')

// Combats majeurs chateau

#laGalerieAuxArmures
Me voilà arrivé à l'entrée d'une galerie bordée de chaque côté d'armures poussiéreuses. La lueur de flambeaux répartis à distance régulière jette d'inquiétants reflets sur le métal.
Au bout de la galerie, quelque chose est entreposé sur un petit autel.
Après un regard lancé aux armures, parfaitement immobiles, je décide de m'avancer.
C'est alors que d'un même mouvement, toutes les armures dégainent leurs épées. J'imagine que j'aurai dû m'en douter.
$ FIGHT('laGalerieAuxArmures', 'laGalerieAuxArmuresVictoire', 'chateauDefaite')

#laGalerieAuxArmuresVictoire
$ EVOLVE_DECK('upgrade')
La dernière armure est tombée au sol dans un grand vacarme. Toute la galerie est jonchée de débris métalliques.
Maintenant, je peux m'approcher de l'autel pour voir ce qui est posé dessus.
$ ADD_TRINKET(RANDOM_PICK(['cristal_celeste', 'cristal_belarcane', 'cristal_orfeu', 'patte_de_lapin', 'montre_du_lapin_blanc']))
Une bonne chose de faite...
$ VIEW('level')

#leFaiseurDOmbres
Je pénètre dans un salon où crépite un feu maigrichon dans une trop vaste cheminée de pierre. En quête d'un peu de chaleur, je m'approche en examinant le décor encore relativement bien conservé.
Un tapis, des fauteuils, une table basse...
Je suis presque en train de me dire que mes sens m'ont trompé, que ce lieu pourrait m'accorder un répit, quand soudain le feu s'éteint et qu'un rire mauvais retentit dans la salle.
Des ombres ont surgi des ombres et un individu se tient derrière elles, une lanterne à la main, une lanterne qui ne semble être là que pour engendrer davantage d'ombres.
Pas le choix, il va me falloir faire le ménage !
$ FIGHT('leFaiseurDOmbres', 'leFaiseurDOmbresVictoire', 'chateauDefaite')

#leFaiseurDOmbresVictoire
$ EVOLVE_DECK('upgrade')
Je plisse les yeux, mon attention attirée par quelque chose qui est tombé par terre, à proximité de ce qui reste du Faiseur d'ombres.
$ ADD_TRINKET(RANDOM_PICK(['cristal_celeste', 'cristal_belarcane', 'cristal_orfeu', 'patte_de_lapin', 'montre_du_lapin_blanc']))
Le silence retombe dans le petit salon désormais plongé dans une quasi obscurité.
$ VIEW('level')
