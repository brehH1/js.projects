function laske() {
    var luvut = [];

    for (var x = 90; x <= 100; x++) {
        var lukurivi = [];
        for (var y = 90; y <= 100; y++) {
            lukurivi.push(y);
        }
        luvut.push(lukurivi);
    }

    var tekstikenttä = document.getElementById("teksti");
    tekstikenttä.innerText = "";

    for (var x = 90; x <= 100; x++) {
        for (var y = 90; y <= 100; y++) {
            tekstikenttä.innerText += "\n" + x + " + " + y + " = " + (x + y);
        }
    }
    for (var x = 90; x <= 100; x++) {
        for (var y = 90; y <= 100; y++) {
            tekstikenttä.innerText += "\n" + x + " * " + y + " = " + (x * y);
        }
    }
}