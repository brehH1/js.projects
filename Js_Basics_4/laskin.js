function Plus(){
    var luku1 = parseInt(luku1Input.value);
    var luku2 = parseInt(luku2Input.value);
    laskinScreen.innerText = luku1 + " + "+luku2+ " = "+(luku1+luku2);
}
function Miinus(){
    var luku1 = parseInt(luku1Input.value);
    var luku2 = parseInt(luku2Input.value);
    laskinScreen.innerText = luku1 + " - "+luku2+ " = "+(luku1-luku2);
}
function Kerto(){
    var luku1 = parseInt(luku1Input.value);
    var luku2 = parseInt(luku2Input.value);
    laskinScreen.innerText = luku1 + " * "+luku2+ " = "+(luku1*luku2);
}
function Jako(){
    var luku1 = parseInt(luku1Input.value);
    var luku2 = parseInt(luku2Input.value);
    laskinScreen.innerText = luku1 + " / "+luku2+ " = "+(luku1/luku2);
}
let laskinScreen = document.getElementById("laskinnäyttö");
let luku1Input = document.getElementById("luku1");
let luku2Input = document.getElementById("luku2");