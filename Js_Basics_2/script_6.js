function script6(){

var kayttajatiedot = {
    "Akseli": "koposenkikka123",
    "admin": "root"
};

function tarkistus(tunnus, salasana) {
    if (kayttajatiedot.hasOwnProperty(tunnus)) {
        if (kayttajatiedot[tunnus] === salasana) {
            console.log("Kirjautuminen onnistui!");
        } else {
            console.log("Väärä salasana!");
        }
    } else {
        console.log("Väärä käyttäjätunnus!");
    }
}

var Tunnus = prompt("Anna käyttäjätunnus:");
var Salasana = prompt("Anna salasana:");

tarkistus(Tunnus, Salasana);

}