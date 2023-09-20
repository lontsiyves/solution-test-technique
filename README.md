# Test React Dev MDA

## Criteres d'evaluation

Voici les critères d'évaluation pour l'application :
1. **Qualité du code** : clarté, structure, modularité, lisibilité et maintenabilité.
2. **Fonctionnalités** : toutes les fonctionnalités demandées doivent être implémentées et fonctionner correctement.
3. **Expérience utilisateur** : interface utilisateur intuitive et agréable.
4. **Performance** : rapidité et réactivité avec des temps de chargement minimaux.
5. **Gestion des erreurs** : gestion adéquate des erreurs et messages d'erreur clairs.

## Description du test pratique

0. Type d'application: Application Next.JS V13 SSR
1. Fonctionnalites a inclure:
    - Deux pages, une page de liste de restaurants et une page pour un restaurant simple
    - La page de restaurants doit afficher une liste de restaurants, c'est la page d'acceuil de l'application
    - Les donnees pour la page de restaurant sont chargees via REST api sur la ressource `GET http://localhost:3020/restaurants`
    - La page de restaurant simple affiche un restaurant en particulier sur la base de son identifiant
    - Les donnees pour une page de restaurant sont chargees dans via REST API sur la ressource `GET http:localhost:3020/restaurants/<id du restaurant>`
    - Quand un utilisateur clique sur un restaurant dans la liste de la page d'acceuil, il devrait etre redirige sur la page du restaurant correspondant
    - Sur une page de restaurant, le titre de la page (balise HTML <title>) devrait etre le contenu de la donnee restaurant a la cle `seo > en`
    - (Bonus) Les donnees doivent etre obtenu cote serveur si bien qu'au premier rendu de la page, l'utilisateur voit des resulats
    - (Bonus) Bonne gestion du design responsive
    - (Bonus) Resect stricte des maquettes
2. Maquettes: Les maquettes sont disponibles dans le dossier `maquettes`

## Comment soumettre votre test pratique

Vos possibilites sont les suivantes:
- Creer un depot public git avec tout le code et nous faire parvenir le lien de ce depot
- Zipper votre code dans une archive et l'envoyer a l'adresse contact@mdagency.tech avec comme object: "Solution test technique"

