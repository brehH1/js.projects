function script7(){

function Kertotaulu(luku, maara) {
    for (var i = 1; i <= maara; i++) {
        console.log(luku + " x " + i + " = " + (luku * i));
    }
}

function kysy() {

    var ensimmainen = parseInt(prompt("Syötä luku:"));
    var toinen = parseInt(prompt("Syötä toinen luku:"));

    console.log("Kertotaulu luvulle " + ensimmainen + " verran " + toinen + " kertaa:");
   Kertotaulu(ensimmainen, toinen);
}

kysy();

}