function script2(){
    
    var vastaus = parseInt(prompt("Kerro ikäsi"));

    if (vastaus >= 18){
            console.log("ikäsi riittää auton ajamiseen!"); }
        else if (vastaus <=18){
            console.log("ikäsi ei riitä ajamiseen!")
        }
    
   vastaus = prompt("Onko sinulla ajokorttia (kyllä/ei)");
        
    if(vastaus == "kyllä"){
            console.log("Saat ajaa!"); }
        else if (vastaus == "ei"){
            console.log("et saa ajaa autoa")
        }
    
}