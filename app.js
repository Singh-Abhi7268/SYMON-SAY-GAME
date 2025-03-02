let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];  // array of classes 

//1st step
let started=false;
let level=0;
document.addEventListener("keypress",()=>{
if(started==false){
    console.log("game is started");
    started=true;
    levelup();
}    
});


//2nd-2
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
    btn.classList.remove("flash");
    },1000 );
}

//3rd-3
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
    btn.classList.remove("userflash");
    },1000);
}
let h2=document.querySelector("h2"); 
//2nd step-1
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
//4th-2
function checkans(idx){
//    console.log("current level :",level); 
if(userseq[idx]==gameseq[idx]){ //pehla idx dono ka same chahiye-base case
    if(userseq.length==gameseq.length){ //saare sequence agar same hue
       setTimeout(levelup(),1000);
    }
}
else{
    h2.innerHTML=`Game Over! your score was <b>${level}</b> <br> press any key to start.`;
    //we have used innerHTML instead of innertext as tag can be used into it
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(()=>{
    document.querySelector("body").style.backgroundColor="white";
    },1000); 
   
   // 5th step
    reset();
}
}

//3rd-2
function btnpress(){
   let btn =this; 
//'this' will be the btn which is pressed
   userflash(btn);
   userclr=btn.getAttribute("id");
   userseq.push(userclr);
   //4th-1
   checkans(userseq.length-1); //0th index

}

//3rd-1
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

//5th step-2
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}