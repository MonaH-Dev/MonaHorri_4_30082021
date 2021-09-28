// Modify the code here
// ======================

const calculateAverageRating = (ratings) => {

  if(ratings.length === 0) {
    return 0;
  }
  
/*   Explication :
  on souhaite faire la moyenne des valeurs présentes 
  dans le tableau   ratings  . Mais dans le cas où le tableau 
  est vide, on souhaite retourner la valeur 0. La propriété
  length  de   ratings  permet donc de connaître la longueur 
  du tableau et de faire alors une condition en conséquence. */

  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }

/*   Explication : Ce code a pour objectif de faire la somme 
  de tous les éléments du tableau. Pour cela, on crée une 
  variable   sum  avec comme valeur initiale 0. Ensuite 
  on parcourt le tableau   ratings  et pour chaque élément
  on additionne la valeur avec la valeur de   sum  et
  le résultat est stocké dans   sum  . Une fois l’ensemble
  de ce code exécuté,   sum  contient donc la somme de
  toutes les valeurs du tableau. */
  
  return sum / ratings.length;

/*   Explication : Nous disposons maintenant de la variable   sum  
  qui contient la somme de tous les éléments du tableau,
  et de l’expression   ratings.length  qui donne le
  nombre d'éléments du tableau. Avec ces éléments,
  nous retournons le calcul de la moyenne. */
}

// ======================

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

if (tauAverage && colinAverage) {
  document.querySelector('#tau-score').innerText = tauAverage.toFixed(1) + ' stars';
  document.querySelector('#colin-score').innerText = colinAverage.toFixed(1) + ' stars';
  document.querySelector('#clara-score').innerText = `${calculateAverageRating([]) === 0 ? 'No ratings' : calculateAverageRating([]) + ' stars'}`
}