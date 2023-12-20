// Liste de phrases possibles pour accéder au bonheur 
// Enfin Gg
var motsPhrases = ["L'homme noir ne trompe pas", "Argent", "i am atomic"];

function verifierReponse() {
    var reponseUtilisateur = document.getElementById('reponseInput').value.trim().toLowerCase();
    var message = document.getElementById('message');
    var reponseCorrecte = false;

    for (var i = 0; i < motsPhrases.length; i++) {
        if (reponseUtilisateur === motsPhrases[i].toLowerCase()) {
            reponseCorrecte = true;
            break;
        }
    }


    if (reponseCorrecte) {
        window.location.href = 'gift.html';
    } else {

        message.textContent = "Décu, la réponse est incorrecte.";
        message.classList.add('show');


        setTimeout(function() {
            message.classList.remove('show');
        }, 3000);
    }
}
