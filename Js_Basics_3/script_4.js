function script4(){
    
    var rahat = 15;
    var kaupassa = true;
    console.log("Tervetuloa Kauppaan!");
    while(kaupassa){
        var osto = prompt("Mitä laitetaan? Meiltä löytyy megistä(2€/kpl) , tikkareita (1€/kpl) , lounas (6€) ja kirjat (10€/kpl).\nSinulla on rahaa "+rahat+"€");
        if(osto=="megis" && rahat >= 1){
            if(rahat<1){
                console.log("rahat ovat lopussa!");
                kaupassa=false;
            }
            else
            { 
                rahat-=2;  
                console.log("tässä megis!");
            }
        }
        else if(osto == "tikkari"){
            if(rahat<2){
                console.log("rahat loppuu!");
                kaupassa=false;
            }
            else
            {
                rahat-=1;  
                console.log("tässä tikkari!");
            }
        }
        else if(osto == "lounas"){
            if(rahat<2){
                console.log("rahat loppuu!");
                kaupassa=false;
            }
            else
            {
                rahat-=6;  
                console.log("ostit lounaan!");
            }
        }
        else if(osto == "kirja"){
            if(rahat<2){
                console.log("rahat loppuu!");
                kaupassa=false;
            }
            else
            {
                rahat-=10;  
                console.log("ostit kirjan!");
            }
        }
        else if(osto == "moro"){
            kaupassa=false;
            console.log("tule käymään uudestaan!")
        }
        else{
            console.log("Anteeksi, en ymmärtänyt?");
        }
    }
}