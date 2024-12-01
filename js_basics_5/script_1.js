function KirjoitaAutot() {
    var viesti = "";
    var x = 0;
    while (x < autot.length) {
        viesti = viesti + "\n" + autot[x];
        x++;
    }
    document.getElementById("teksti").innerText = viesti;
}

function LisääAuto() {
    autot.push(document.getElementById("input").value);
    KirjoitaAutot();
}

var autot = [];
autot[0] = "Volvo";
autot[1] = "Volkswagen";
autot[2] = "Honda";
autot[3] = "BMW";


KirjoitaAutot();