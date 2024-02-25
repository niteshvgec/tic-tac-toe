const boxes=document.querySelectorAll(".box");
// boxes[5].innerText='hello';
const gameinfo=document.querySelector(".game-info");
const newGameBtn= document.querySelector(".btn");
let currentPlayer;
let gameGrid;
// const count=0;
const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        //for restarting again and removing javascript properties
        box.classList=`box box${index+1}`;
    })
     
    newGameBtn.classList.remove("active");
    gameinfo.innerText=`Current Player -${currentPlayer}`;
}
initGame();
function checkGameOver(){
    let answer="";
        winningPosition.forEach((position)=>{
            if((gameGrid[position[0]]!==""|| gameGrid[position[1]]!==""||gameGrid[position[2]]!=="")&&(gameGrid[position[0]]==gameGrid[position[1]])&&(
          gameGrid[position[1]]==gameGrid[position[2]])){
if(gameGrid[position[0]]=="X")
answer="X";
else
    answer="O";
boxes[position[0]].classList.add("win");
boxes[position[1]].classList.add("win");
boxes[position[2]].classList.add("win");
              }
        });
        if(answer!==""){
gameinfo.innerText=`winner Player-${answer}`;
newGameBtn.classList.add('active');
return;
        }
        
      let fillcount=0;
      gameGrid.forEach((box)=>{
        if(box!==""){
            fillcount++;
        }
      });
      if(fillcount==9){
        gameinfo.innerText="match tied";
        newGameBtn.classList.add("active");
      }
    
}
function swapTurn(){
    if(currentPlayer=="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer="X";
    }
    gameinfo.innerText=`current Player-${currentPlayer}`;
}

function handleClick(index){
    if(gameGrid[index]==""){
        boxes[index].innerHTML=currentPlayer;
        gameGrid[index]=currentPlayer;
        boxes[index].style.pointerEvents="none";
        swapTurn();
        checkGameOver();
    }
}
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        // box[index].innerText="hello";
        handleClick(index);
    });
});
newGameBtn.addEventListener("click",initGame);