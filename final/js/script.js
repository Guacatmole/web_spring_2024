function magic8ball() {
    askAQuestion();
    shake();
    getAFortune();
}

function askAQuestion() {
    alert("speak a yes/no question then get an answer")
}
function shake() {
    alert("rumble rumble rumble")

}
function getAFortune() {
    var fortunes = ["yes","no","maybe","idk","phone a friend","rigged","um sure","read a book","touch grass","do your homework","shut up","leave your room some time this centrey"]
    var num = randomNumber(fortunes.length)
    displayFortune(fortunes[num])
    
}

function displayFortune(fortune) {
    //alert("fortune")
    document.getElementById("fortune").innerHTML = fortune
}

function randomNumber(n){
    return Math.floor(Math.random() * n)
}