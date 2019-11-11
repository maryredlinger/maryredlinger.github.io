var counter=5
var winningSpot = Math.floor(Math.random()*16)
var losingSpot = Math.floor(Math.random()*16)
if(winningSpot === losingSpot){
    losingSpot = Math.floor(Math.random()*16)
}


function tableClick(location){
    counter = counter - 1
    document.getElementById("counter").innerHTML=counter
    if (counter < 1){
        document.getElementById("gameBoard").innerHTML=""
    }
    if(location === winningSpot){
        document.getElementById("gameBoard").innerHTML="☕️"
    } else if(location === losingSpot ) {
        document.getElementById("gameBoard").innerHTML=""
        alert("😵 GAME OVER!")
    } else {
      document.getElementById(location).innerHTML="💩"
      alert("Crappy, try again")
    }
}
