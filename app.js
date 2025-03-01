let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];  // array of classes 

let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
if(started==false){
    console.log("game is started");
    started=true;
    levelup();
}    
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
    btn.classList.remove("flash");
    },1000 );
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
    btn.classList.remove("userflash");
    },1000);
}
function levelup(){
   userseq=[]; 
    level++;
h2.innerText=`level ${level}`;
let randidx=Math.floor(Math.random()*4);
let randclr=btns[randidx]; //will give classes e.g. rec yellow purple green
let randbtn=document.querySelector(`.${randclr}`);
gameseq.push(randclr);
btnflash(randbtn);

}

function checkans(idx){
//    console.log("current level :",level); 
if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
       setTimeout(levelup(),1000);
    }
    // console.log("same value");
}
else{
    h2.innerHTML=`Game Over! your score was <b>${level}</b> <br> press any key to start.`;
    //we have used innerHTML instead of innertext as tag can be used into it
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(()=>{
    document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
}
}

function btnpress(){
   let btn =this; 
//'this' will be the btn which is pressed
   userflash(btn);
   userclr=btn.getAttribute("id");
   userseq.push(userclr);
   checkans(userseq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}