function HaeKasvi() {
    var x = 0;
    var teksti = document.getElementById("teksti");
    var hakusana = document.getElementById("input").value;
    teksti.innerText = hakusana + " ei löydy hakemistosta.";

    while (x < puut.length) {
        if (puut[x].toLowerCase().indexOf(hakusana.toLowerCase()) >= 0) {
            teksti.innerText = hakusana + " on puu!";
        }
        x++;
    }

    x = 0;
    while (x < kukat.length) {
        if (kukat[x].toLowerCase().indexOf(hakusana.toLowerCase()) >= 0) {
            teksti.innerText = hakusana + " on kukka!";
        }
        x++;
    }

    x = 0;
    while (x < sienet.length) {
        if (sienet[x].toLowerCase().indexOf(hakusana.toLowerCase()) >= 0) {
            teksti.innerText = hakusana + " on sieni!";
        }
        x++;
    }
}

var puut = ["kuusi", "koivu", "mänty", "kataja", "vaahtera", "pihlaja"];
var kukat = ["ruusu", "tulppaani", "orkidea", "narsissi", "vuokko"];
var sienet = ["rousku", "tatti", "hapero", "kantarelli", "kääpä"];