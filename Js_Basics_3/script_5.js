function script5(){

var arvattuLuku = Math.floor(Math.random() * 101);

function aloitaArvausPeli() {
    console.log("numero arvaus peli!");
    console.log("Arvaa luku 0-100.");

    arvaaLuku();
}
function arvaaLuku() {
    var arvaus = parseInt(prompt("Arvaa luku:"));

    if (isNaN(arvaus)) {
        console.log("ei kirjamia!!!.");
        arvaaLuku();
    } else if (arvaus < arvattuLuku) {
        console.log("Enemmän");
        arvaaLuku();
    } else if (arvaus > arvattuLuku) {
        console.log("Vähemmän");
        arvaaLuku();
    } else {
        console.log(" jessirr! luku oli " + arvattuLuku + ".");
    }
}

aloitaArvausPeli();

}