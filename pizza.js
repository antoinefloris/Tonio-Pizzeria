// 14: Pizzeria JS
document.getElementById("btnCde").addEventListener("click", gererCde);

function gererCde() {
    // Récupération des valeurs du formulaire
    var nbrPizzas = document.getElementById("chNbrPiz").value;
    var typePizza = document.getElementById("chTypePizza").value;
    var livVille  = document.getElementById("chLivVille").value;
    var anniv     = document.getElementById("chCliNai").value;
    var sexe      = document.getElementById("chClsex").value;
    var ingredient = document.getElementById("chCingr").value;


    var prixCde = calculerPrix(nbrPizzas, typePizza);
    var livFrais = calculerLivraison(prixCde, livVille, anniv, sexe);
    var frais = calculerLivraison(ingredient);

    // Frais de livraison
    if ((livVille === "En ville") && (prixCde > 10) ){
        livFrais = 0;
    } else {
        livFrais = 7;
    }

    // Frais ingrédient
    if (ingredient === "Aucun") {
        frais = 0;
    } else {
        frais = 2;
    }


    var ticket = "<p>Merci pour votre commande.</p>";
    var promo = "";


    // Affiche les frais
    if (livFrais === 0) {
        ticket += "<p>Livraison gratuite !</p>";
    } else {
        ticket += "<p>La livraison est de " + livFrais +"€.";
    }

    if (frais === 0) {
        ticket += "<p>Pas d'ingrédient suplémentaire</p>";
    } else {
        ticket += "<p>L'ingrédient suplémentaire est de " + frais +"€.";
    }

    ticket += "<p>Soit au total " + (prixCde + livFrais + frais) +"€.";
    if (anniv === "chOui") {
        ticket += "<p>Et bon anniversaire !</p>";
    }
    if (sexe === "bOui") {
        promo += "<p>vous avez une pizza gratuite !</p>";
    } else {
        promo += "<p>vous avez aucune pizza en plus désolé !</p>";
    }

    // Affiche le ticket de caisse
    document.getElementById("affTicket").innerHTML = ticket;
    document.getElementById("affPromo").innerHTML = promo;
}

function calculerPrix(nbrPizzas, typePizza) {
    var prixCde = Number(nbrPizzas) * 4;
    var supplement = 0;

    if (typePizza === "pRoyale") {
        supplement = Number(nbrPizzas) * 0.5;
    }

    if (typePizza === "pMilanaise") {
        supplement = Number(nbrPizzas) * 0.7;
    }

    prixCde += supplement;
    return prixCde;
}

function calculerLivraison(prixCde, livVille, anniv) {
    var livFrais = 0;

    if (((livVille === "En ville") && (prixCde > 10)) || (anniv === "chOui")) {
        livFrais = 0;
    } else {
        livFrais = 7;
    }

    return livFrais;
}