//alert('dose this work?!??!?!?!?')
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
    var fortunes = ["yes","no","maybe"]
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