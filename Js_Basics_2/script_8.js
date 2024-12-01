function script8(){
  
function tarkistaAika(vastaus) {

    var nykyinenAika = new Date();
    var tunnit = nykyinenAika.getHours();
    var minuutit = nykyinenAika.getMinutes();

    if (vastaus === tunnit + ":" + minuutit) {
        console.log("Oikein!");
    } else {
        console.log("Väärin. Kello on " + tunnit + ":" + minuutit + ".");
    }
}

var vastaus = prompt("Mitä kello on?");
tarkistaAika(vastaus);

}