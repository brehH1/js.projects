function KirjotaMätsit() {
    var viesti = "";
    var x = 0;
    while (x < mätsit.length) {
        viesti = viesti + "\n" + mätsit[x];
        x++;
    }
    document.getElementById("teksti").innerText = viesti;
}

function Hae() {
    var x = 0;
    var hakusana = document.getElementById("input").value;
    mätsit = [];
    while (x < ihmiset.length) {
        if (ihmiset[x].toLowerCase().indexOf(hakusana.toLowerCase()) >= 0) {
            mätsit.push(ihmiset[x]);
        }
        x++;
    }
    KirjotaMätsit();
}

var mätsit = [];
var ihmiset = ["Raili", "Marko", "Teppo", "Matti", "Teuvo", "Taneli", "Kristiina", "Tiina", "Seppo"];