function PiirräRuudukko() {
    var txt = "";
    var textkenttä = document.getElementById("teksti");
    textkenttä.innerText = "";
    for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
            txt += ruudukko[x][y] + " ";
        }
        txt += "\n";
    }
    textkenttä.innerText = txt;
}

function LisääRuksi() {
    var luku1 = parseInt(document.getElementById("input").value);
    var luku2 = parseInt(document.getElementById("input2").value);
    if (luku1 >= 0 && luku1 < 10 && luku2 >= 0 && luku2 < 10) {
        ruudukko[luku1][luku2] = "X";
        PiirräRuudukko();
    } else {
        alert("Virhe: Anna kelvolliset rivin ja sarakkeen numerot (0-9)!");
    }
}

var ruudukko = [];
for (var x = 0; x < 10; x++) {
    var kirjainrivi = [];
    for (var y = 0; y < 10; y++) {
        kirjainrivi.push("O");
    }
    ruudukko.push(kirjainrivi);
}
PiirräRuudukko();