function script7(){

function tarkistaVastaus(vastaus) {
   
    if (vastaus === new Date().getDate()) {
        console.log("Oikein!");
    } else {
        console.log("Väärin. Kuukauden päivä on " + new Date().getDate() + ".");
    }
}
var vastaus = parseInt(prompt("Monesko päivä kuukaudessa on?"));

tarkistaVastaus(vastaus);

}