paperCram = document.querySelector('#openP');
function displayInfo(actionN, paperN){
    var edu = document.querySelector(`.${actionN}`);
    var paper = document.querySelector(`.${paperN}`);
    edu.classList.add("display");
    paper.classList.add("movPaper");
    paperCram.play();
}
function removeDisplay(actionN,paper){
    var edu = document.querySelector(`.${actionN}`);
    edu.classList.remove('display');
    var paper = document.querySelector(`.${paper}`);
    paper.classList.remove('movPaper');
    paperCram.play();
}

function Home(){
    var about = document.querySelector(".H1");
    about.classList.add('HomeBig');
    setTimeout( function() { window.location = "index.html" }, 1000 );
}

function soundCheck(){
    var out = document.querySelector('#mountain');
    var board = document.querySelector('#board');
    var paper = document.querySelector('#paper');
    out.play();
    board.play();
    paper.play();
    board.volume = 0.4
    paper.volume = 0.1
}
var playSound = false;
function player(){
    var out = document.querySelector('#mountain');
    var board = document.querySelector('#board');
    var paper = document.querySelector('#paper');
    var imgChanger = document.querySelector('#soundControl');
    board.volume = 0.4
    paper.volume = 0.1
    if(playSound ===false){
        out.play();
        board.play();
        paper.play();
        imgChanger.src = "Media/IMG/General/volume_on.svg";
        playSound = true;
    }else{
        out.pause();
        board.pause();
        paper.pause();
        imgChanger.src = "Media/IMG/General/volume_off.svg";
        playSound=false;
    }
}