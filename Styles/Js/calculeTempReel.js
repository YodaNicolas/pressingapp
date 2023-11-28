// Fonction de calcul
function Calculer() {
    // Récupérer les valeurs saisies
    var total = 0;
    for (var i = 1; i <= 4; i++) {
        var qte = parseInt(document.getElementById(-i).value) || 0;
        if (qte < 0) {
            alert("Vous avez saisi une valeur négative à la ligne N°" + i + " veuillez corriger si non cette ligne sera ignoré et ne figurera pas dans votre commande MERCI.");
            qte = 0;
        }
        var prx = parseInt(document.getElementById(i).value);
        total += prx * qte;
    }

    // Afficher le résultat
    var outputElement = document.getElementById("output");
    outputElement.textContent = total;
}

// Ajouter un gestionnaire d'événement à chaque input
for (var i = 1; i <= 4; i++) {
    document.getElementById(-i).addEventListener("input", Calculer);
}





