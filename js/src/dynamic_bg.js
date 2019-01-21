var imgs =["background1.jpg", "background2.jpg", "background3.jpg", "background4.jpg", "background5.jpg", "background6.jpg"];
var index=Math.floor(Math.random()*6);
var img = imgs[index];
function time(){    
    document.body.style.backgroundImage="url(/images/background/"+img+")";
    }  
document.body.onload = function(){
//window.onload=function(){
 time();
//setInterval(time,2000);
}