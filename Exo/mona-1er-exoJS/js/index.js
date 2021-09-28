function genererEntierAleatoireEntre(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* Explication : ici on écrit simplement la fonction qu'on va utiliser 
Nom de la fonction : genererEntierAleatoireEntre
Paramètres : min et max 
Valeur de retour : return (permet de donner le résultat voulu)*/


let nombreATrouver = genererEntierAleatoireEntre(1,100);
/* ici on déclare une variable, à laquelle on attribue
la fonction précédemment créée, en remplaçant les paramètres
par des arguments  */

let saisieUtilisateur; // déclarer une variable vide  


while (saisieUtilisateur !== nombreATrouver) {
    saisieUtilisateur = prompt ("recherchez un nombre entre 1 et 100");
    /* permet de créer une boite de dialogue */
    if (!(saisieUtilisateur >= 1) || !(saisieUtilisateur <= 100)) {
        console.log ("erreur");
    } else if (saisieUtilisateur > nombreATrouver) {
        console.log ("et non, vise plus bas")
    } else if (saisieUtilisateur < nombreATrouver) {
        console.log ("et non, vise plus haut")
    } else if (saisieUtilisateur == nombreATrouver) {
        console.log (`Le nombre à trouver était bien ${nombreATrouver}`)
    } else {
        console.log ("erreur, réessayez") 
    }
}

console.log("fin de la boucle"); 