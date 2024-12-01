var valikoima = [
    { nimi: "Muumitikkari", hinta: 1 },
    { nimi: "Möfö", hinta: 2 },
    { nimi: "Lounas", hinta: 6 },
    { nimi: "Kirja", hinta: 10 }
];

function naytaValikoima() {
    var kaupanValikoimaElementti = document.getElementById("kaupanValikoima");
    kaupanValikoimaElementti.innerHTML = "";
    valikoima.forEach(function(tuote) {
        kaupanValikoimaElementti.innerHTML += tuote.nimi + " - " + tuote.hinta + "€<br>";
    });
}

function lisaaTuote() {
    var tuotenimi = document.getElementById("tuotenimi").value;
    var hinta = parseFloat(document.getElementById("hinta").value);
    if (!isNaN(hinta)) {
        valikoima.push({ nimi: tuotenimi, hinta: hinta });
        naytaValikoima();
        document.getElementById("tuotenimi").value = "";
        document.getElementById("hinta").value = "";
    } else {
        alert("Virheellinen hinta!");
    }
}


function ostaTuote() {
    var ostotuote = document.getElementById("ostotuote").value;
    var jalkirahat = parseFloat(document.getElementById("jalkirahat").textContent);
    var loytyi = false;
    for (var i = 0; i < valikoima.length; i++) {
        if (valikoima[i].nimi === ostotuote) {
            if (valikoima[i].hinta <= jalkirahat) {
                jalkirahat -= valikoima[i].hinta;
                document.getElementById("jalkirahat").textContent = jalkirahat.toFixed(2);
                document.getElementById("ostoskori").innerHTML += valikoima[i].nimi + " - " + valikoima[i].hinta + "€<br>";
                valikoima.splice(i, 1);
                naytaValikoima();
            } else {
                alert("Ei tarpeeksi rahaa!");
            }
            loytyi = true;
            break;
        }
    }
    if (!loytyi) {
        alert("Tuotetta ei löytynyt kaupan valikoimasta!");
    }
}
