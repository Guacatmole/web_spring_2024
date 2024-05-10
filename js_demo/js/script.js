function askQuestion(){
    var q = prompt('how much wood chuck chuck if a wood chuck could chuck wood?');
    if (q != null ){
        document.getElementById('question').innerHTML='yikes! ' + q + ' is a lot of wood';
    }
}

function showImage(){
    var image=document.getElementById('promac');
    image.src = "images/promac.png";
    var p = document.getElementById('money');
    p.innerHTML='The mac pro can get so expencive';
}