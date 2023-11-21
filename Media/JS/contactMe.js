var element = 0;
var signDoc = document.querySelector('#signing');
function sign(){
    if(element ==0){
        element++;
        var img = document.createElement('img');
        img.src = "./Media/IMG/Page_4/home.png";
        img.id = "home";
        console.log("img");
        const contact = document.querySelector('.contactPage');
        contact.appendChild(img);
        signDoc.play();
        setTimeout( function() { 
            var backHome = document.querySelector('.backHome');
            backHome.classList.add('slideIN');
            setTimeout(function(){
            backHome.classList.add('colorChange');
            setTimeout(function(){ window.location = "index.html";},1000) 
            },500);
         }, 1500 );
    }
    
}   