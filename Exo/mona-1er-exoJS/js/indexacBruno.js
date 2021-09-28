function genererEntierAleatoireEntre(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nombreATrouver = genererEntierAleatoireEntre(1, 100);

let ceQuATapeLUtilisateur;

while (ceQuATapeLUtilisateur != nombreATrouver) {
    ceQuATapeLUtilisateur = prompt("Tapez un nombre entre 1 et 100.");
    if (!(ceQuATapeLUtilisateur >= 1) || !(ceQuATapeLUtilisateur <= 100)) {
        console.log("erreur");
    } else if (ceQuATapeLUtilisateur > nombreATrouver) {
        console.log("il faut viser plus bas");
    } else if (ceQuATapeLUtilisateur < nombreATrouver) {
        console.log("il faut viser plus haut");
    } else if (ceQuATapeLUtilisateur == nombreATrouver) {
        console.log("gagné !");
    } else {
        console.log("Une erreur inconnue est survenue");
    }
}

console.log("fin de la boucle");