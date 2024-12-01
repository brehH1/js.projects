function script10(){
var kokonimi = prompt("Syötä koko nimesi välilyönnillä eroteltuna (etunimi sukunimi):");
var valilyonninIndeksi = kokonimi.indexOf(" ");

var etunimi = kokonimi.substring(0, valilyonninIndeksi);
var sukunimi = kokonimi.substring(valilyonninIndeksi + 1);

console.log("etunimesi on: " + etunimi);
console.log("sukunimesi on: " + sukunimi);
}
