function script8(){
    var Teksti = "";

    function teksti2() {
        const käyttäjä = prompt("Kirjoita tekstiä (kirjoita lopuksi 'poistu'):");
        
        if (käyttäjä.toLowerCase() === "poistu") {
            teskti();
        } else {
            Teksti += käyttäjä + ", ";
            teksti2();
        }
    }
    
    function teskti() {
        const muotoiltuTeksti = Teksti.slice(0, -2); 
        console.log(muotoiltuTeksti);
    }
    
    teksti2();
    
}