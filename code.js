let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let count=0;
let turnO=true;

const winPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],
[2,4,6],[2,5,8],[3,4,5],[6,7,8]];

 boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        count++;
       console.log("button clicked");
       if(turnO){
        box.style.color="#174478";
        box.innerText="O";
        turnO=false;
       }
       else{
        box.style.color="#AC2020"
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       checkWin();
       if(count==9){
        drawGame();
       }
    });
 });
 
//  ###########  draw ##############
const drawGame=()=>{
    msgContainer.classList.remove("hide");
    msg.innerText="DRAW! try again";  
}

//  ################ to check whether win or not#####################
 const checkWin=()=>{
    let a,b,c;
    for(let p of winPattern){
       a=boxes[p[0]].innerText;
       b=boxes[p[1]].innerText;
       c=boxes[p[2]].innerText;
    //    console.log(p[0],p[1],p[2]);
    //    console.log(a,b,c);
     if(a!="" && b!="" && c!=""){
        if(a===b && b===c){
            console.log(`Winner ${a}`);
            disableBox();
            showWinner(a);
        }
     }
    }
 }


 const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
 }

 
 const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
 

 const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }

 const resetGame=()=>{
    count=0;
    enableBox();
    turnO=true;
    msgContainer.classList.add("hide");
 }
 
 resetbtn.addEventListener("click",resetGame);
 newGameBtn.addEventListener("click",resetGame);

 