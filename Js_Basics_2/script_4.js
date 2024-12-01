function script4(){


function onkoparillinen(luku) {
    if (luku % 2 === 0) {
        return "parillinen";
    } else {
        return "pariton";
    }
}


var luku = prompt("Anna luku:");
luku= parseInt(luku);

if (luku) {
    var tulos = onkoparillinen(luku);
    console.log("luku on " + tulos + ".");
} else {
    console.log("Syöte ei ole luku!");
}

}