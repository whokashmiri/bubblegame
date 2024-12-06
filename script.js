
function generateBubble(){
var bubble ="";

for(var i = 1; i<=70; i++){
    var random = Math.floor(Math.random()*10);
    bubble += `<div class="bubble">${random}</div>`;
}
document.querySelector("#panelb").innerHTML = bubble;
}


var timer = 60;
var score = 0;
function increaseScore(){
    score += 5;
    document.querySelector('#score').textContent = score;
}
function runTimer(){
var timerInside = setInterval(function(){
    if(timer>0){
        timer--;
    document.querySelector('#timerValue').textContent = timer;
    }else{

        clearInterval(timerInside )
        document.querySelector("#panelb").innerHTML= `<h1>Game Over!</h1>`
    }
    
},1000)
}
var ran =0;
function hitVal(){
     ran = Math.floor(Math.random()*10);
    document.querySelector('#hit').textContent= ran

}

document.querySelector('#panelb').addEventListener("click",function(details){
    var clickedNumber = (Number(details.target.textContent));
    if(clickedNumber === ran)
        increaseScore();
        generateBubble();
        hitVal();
    
    

})

hitVal();
generateBubble();
runTimer();