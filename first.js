let gameSeq=[];
let userSeq=[];

let start=false;
let Level=0;
let Highest_Score=0;
let colors=["orange","red","purple","green"];

//start game
let h3=document.querySelector("h3");
let body=document.querySelector("body");
  document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game Start!");
        start=true;
        levelUp();
    }
});

//flash buttons and level up
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },500);
}

function userFlash(btn){
    btn.classList.add("user_flash");
    setTimeout(function(){
      btn.classList.remove("user_flash");
    },500);
  }
function levelUp(){
    userSeq=[];
    Level++;
    h3.innerText=`Level ${Level}`;
    let random_no=Math.floor(Math.random()*3);
    let random_color=colors[random_no];

    gameSeq.push(random_color);
    console.log(`Game Sequence data: ${gameSeq}`);
    //console.log(random_color);
    let random_button=document.querySelector(`.${random_color}`);

    gameFlash(random_button);
}
// 
function matchSeq(index){

  if(gameSeq[index]==userSeq[index]){//color check krne k lye
    //console.log("good!!");
    if(gameSeq.length==userSeq.length){//last pata krne k lye color ka;
         setTimeout(levelUp,2000);
    }
  }
  else{
    let score=Level;
     if(score>Highest_Score){
           Highest_Score=score;
     }
     h3.innerHTML=`Game Over!. Your score was <b>${score}<b>.<br> Press any key to start again!! <br> `;
     h3.style.color="red";
     let h2=document.querySelector('h2');
     h2.innerHTML=`Highest Score: ${Highest_Score}`;
     body.classList.add("change_color");
     setTimeout(function(){
       body.classList.remove("change_color");
     },150);
     resetTo();
  }
}
 


//Button Event Listeners;
function pressButton(){
    console.log("button pressed");
    let btn=this;
    console.log(btn);
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    console.log(`User Sequence data: ${userSeq}`);

    matchSeq(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".part");
for(btn of allBtns){
    btn.addEventListener("click",pressButton);
}

//Reset game;
function resetTo(){
  start=false;
   gameSeq=[];
   userSeq=[];
   Level=0;
}

