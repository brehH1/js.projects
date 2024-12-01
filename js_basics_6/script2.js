class Pet {
    constructor(nimi, laji) {
        this.nimi = nimi;
        this.laji = laji;
        this.nalka = 5;
    }

    Ruoki() {
        this.nalka -= 8;
        if (this.nalka < 0) {
            this.nalka = 0;
        }
    }

    Odota() {
        if (this.laji === "koira") {
            this.nalka += 2;
        } else {
            this.nalka += 1;
        }
        if (this.nalka > 20) {
            alert(`${this.nimi} - ${this.laji}lla on nälkä!`);
        }
    }
}


let lemmikit = [];
lemmikit.push(new Pet("Teppo", "Kissa"));
lemmikit.push(new Pet("Rex", "Koira"));
lemmikit.push(new Pet("Pörrö", "Kani"));
lemmikit.push(new Pet("Nemo", "Kala"));
lemmikit.push(new Pet("Sisu", "Koira"));

function paivitaInfo() {
    let info = "";
    lemmikit.forEach(function(lemmikki) {
        info += `${lemmikki.nimi} - ${lemmikki.laji}, Nälkä: ${lemmikki.nalka}<br>`;
        if (lemmikki.laji === "koira") {
            info += `<button onclick="ruoki('${lemmikki.nimi}', document.getElementById('maaraInput').value)">Ruoki ${lemmikki.nimi}</button>`;
        }
    });
    document.getElementById("lemmikkiInfo").innerHTML = info;
}

function ruoki(nimi, maara) {
    let ruokittava = lemmikit.find(function(lemmikki) {
        return lemmikki.nimi === nimi;
    });
    if (ruokittava) {
        ruokittava.Ruoki(parseInt(maara));
        paivitaInfo();
    }
}

function odota() {
    lemmikit.forEach(function(lemmikki) {
        lemmikki.Odota();
    });
    paivitaInfo();
}

paivitaInfo();