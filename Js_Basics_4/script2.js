function Aloita(){
    document.getElementById("aloita").hidden = true;
    document.getElementById("click").hidden = false;
    pisteet = 0;
    aika = 5;
    Sekuntikello();
}
function Sekuntikello(){
    aika = aika - 0.05;
    sekuntikello.innerText = Number((aika).toFixed(3));
    Sekuntikello.innerText = aika;
    if(aika <= 0){
sekuntikello.innerText = "sait "+pisteet+" klikkausta! pystyt parempaan!";
setTimeout(Reset,1000);
}
    else{
        setTimeout(Sekuntikello,50);
    }
}
function Reset(){
    document.getElementById("aloita").hidden = true;
    document.getElementById("click").hidden = false;
}
function Klik(){
if(aika>0){
    pisteet++;
    }

}
let sekuntikello = document.getElementById("sekuntikello")
let pisteet = 0;
var aika = 0;