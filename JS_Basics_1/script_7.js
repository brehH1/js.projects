function script7(){
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

var formattedTime = `${hours}:${minutes}:${seconds}`;
console.log("Kello on : " + formattedTime);
}