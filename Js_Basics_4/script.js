function Sendtext(){
    
    var viesti = inputfield.value;
    var aiempiteksti = chatlog.innerText;

    var d = new Date();
    var aikaleima = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    viesti = aiempiteksti +"\n"+ aikaleima + "  "+viesti;
    chatlog.innerText = viesti;
}

function cleartext(){
    chatlog.innerText="";
}

function UpdateClock(){
    var d = new date();
    var aika = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds;
    clock.innerText = aika;
    setTimeout(UpdateClock,1000);

}
let inputfield = document.getElementById("input")
let chatlog = document.getElementById("log")
let clock = document.getElementById("kello");
UpdateClock();