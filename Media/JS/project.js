function goHome(){
    var homeN = document.querySelector('.homePage');
    var homeT = document.querySelector('.homeTxt');
    var home = homeN.querySelector(".text");
    homeT.classList.add('unseen');
    //alert(homeT);
    home.classList.add('HomePageGo');
    setTimeout(function(){
        window.location = "index.html"
    },1000);
}
function Promo(){
    var trans = document.querySelector('.transitionNext');
    trans.style.animation = "blurIt 3s";
    setTimeout(function(){
        window.location = "./projects/promo.html"
    },2800);
}
function Comic(){
    var trans = document.querySelector('.transitionNext');
    trans.style.animation = "blurIt 3s";
    setTimeout(function(){
        window.location = "./projects/comic.html"
    },2800);
}

setTimeout(()=>{
    var openIt = document.querySelector('#pT');
    openIt.classList.add('pTVisible');
},2900);