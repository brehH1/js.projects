function script6(){
   
function sanankääntö(sana) {
    return sana.split('').reverse().join('');
}

function kysy() {

    var syote = prompt("Syötä sana:");

    var käännetty = sanankääntö(syote);
    console.log ("väärinpäin on" + käännetty);
}

kysy();

}