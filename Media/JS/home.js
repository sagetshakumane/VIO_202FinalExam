function AboutMe(){
    let about = document.querySelector(".nav_2");
    about.style.setProperty("z-index", 20000, "important");
    //about.style.zIndex = "21000";
    about.classList.add('openAB');
    setTimeout( function() { window.location = "AboutMe.html" }, 1000 );
}

function LoadAni(){
    var audio = document.querySelector('#snor');
    audio.volume = 0.02;
    //audio.play();
    var homeBub = document.querySelector('.nav_1');
    homeBub.style.zIndex = "20000";
    setTimeout( function() { 
        homeBub.style.animationName = "dream";
        homeBub.style.animationIterationCount = "infinite";
        homeBub.style.zIndex = "1";

    }, 6000 );
    
}
function ContactMe(){
    let about = document.querySelector(".nav_4");
    about.style.zIndex = "20000";
    about.classList.add('openCon');
    setTimeout( function() { window.location = "ContactMe.html" }, 1500 );
}
function Project(){
    var proj = document.querySelector('.nav_3');
    proj.style.zIndex = "20000";
    proj.classList.add('projects101');
    setTimeout( function() { window.location = "Projects.html" }, 1500 );
}
let on_Off = true; 
function snorBub(){
    var audio = document.querySelector('#snor');
    if(on_Off === true){
        audio.play();
        on_Off = false;
    }
    else{
        audio.pause();
        on_Off= true;
    }
}