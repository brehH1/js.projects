function script9(){
    function arvoLuku(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var luku1 = arvoLuku(1, 1000);
    var luku2 = arvoLuku(1, 1000);
    
    var oikeaVastaus = luku1 + luku2;
    
    var kayttajanVastaus = prompt("Paljonko on " + luku1 + " + " + luku2 + "?");
    
    if (parseInt(kayttajanVastaus) === oikeaVastaus) {
        console.log("Onneksi olkoon! Sinulla on suuret matikka-aivot!");
    } else {
        console.log("Väärin! Käy harjoittelemassa matikkaa uudelleen.");
    }
}
