$(document).ready(function () {
    $("#barreRechercheArticle").on("input", function () {
        var valeurRecherche = $(this).val().toLowerCase();
        $("table tbody tr").each(function () {
            var texteLigne = $(this).text().toLowerCase();
            if (texteLigne.indexOf(valeurRecherche) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});


// RECHERCHE CARD
$(document).ready(function () {
    $("#barreRechercheTeinte").on("input", function () {
        var valeurRecherche = $(this).val().toLowerCase();
        $(".cardPrincTeinte .itemTeinte  .Textcard").each(function () {
            var texteLigne = $(this).text().toLowerCase();
            if (texteLigne.indexOf(valeurRecherche) === -1) {
                $(this).closest('.itemTeinte').hide();
            } else {
                $(this).closest('.itemTeinte').show();
            }
        });
    });
});