function script5(){
   
function tarkistaluku(luku) {
    if (luku > 0) {
        return "positiivinen";
    } else if (luku < 0) {
        return "negatiivinen";
    } else {
        return "nolla";
    }
}

var luku = prompt("Anna luku:");

luku = parseFloat(luku);

if (luku) {
    var tulos = tarkistaluku(luku);
    console.log("luku on " + tulos + ".");
} else {
    console.log("ei ole numero!");
}

}