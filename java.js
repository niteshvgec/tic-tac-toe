const item1=document.getElementById("item1");
const item2=document.getElementById("item2");
const item3=document.getElementById("item3");
const item4=document.getElementById("item4");
const item5=document.getElementById("item5");
const item6=document.getElementById("item6");
const item7=document.getElementById("item7");
const item8=document.getElementById("item8");
const item9=document.getElementById("item9");
const newgame=document.getElementById("NewGame");
const textcontent=document.getElementById("text");
const collection=document.querySelectorAll("grid-item");
const tiecontent=document.getElementsByClassName("tieContent");
// function element(){
//     item1.innerHTML="t";
const Tplay=document.getElementById("btn1")
const Fplay=document.getElementById("btn2");
// }
const gamer=document.getElementById("gameover");
let currenttab=Tplay;
let hasitem1=item1;
let hasitem2=item2;
let hasitem3=item3;
let hasitem4=item4;
let hasitem5=item5;
let hasitem6=item6;
let hasitem7=item7;
let hasitem8=item8;
let hasitem9=item9;
const count=0;
function game(){
    count++;
    if(count==9){
// gamer.style.backgroundColor="#8B0000";
tiecontent.innerText="match tied";
    }
    else{
        return;
    }
}

   item1.addEventListener("click",()=>{
        if(currenttab==Tplay){
           item1.innerHTML="T";
            currenttab=Fplay;
            hasitem1="true";
            checkwin();
        }else{
           item1.innerHTML='F';
            currenttab=Tplay;
            hasitem1="false";
            checkwin();
        }
});
item2.addEventListener("click",()=>{
    if(currenttab==Tplay){
       item2.innerHTML="T";
        currenttab=Fplay;
        hasitem2="true";
        checkwin();
    }else{
       item2.innerHTML='F';
        currenttab=Tplay;
        hasitem2="false";
        checkwin();
    }
});
item3.addEventListener("click",()=>{
    if(currenttab==Tplay){
       item3.innerHTML="T";
        currenttab=Fplay;
        hasitem3="true";
        checkwin();
    }else{
       item3.innerHTML='F';
        currenttab=Tplay;
        hasitem3="false";
        checkwin();
    }
});
item4.addEventListener("click",()=>{
if(currenttab==Tplay){
   item4.innerHTML="T";
    currenttab=Fplay;
    hasitem4="true";
    checkwin();
}else{
   item4.innerHTML='F';
    currenttab=Tplay;
    hasitem4="false";
    checkwin();
}
});

 
item5.addEventListener("click",()=>{
    if(currenttab==Tplay){
       item5.innerHTML="T";
        currenttab=Fplay;
        hasitem5="true";
        checkwin();
    }else{
       item5.innerHTML='F';
        currenttab=Tplay;
        hasitem5="false";
        checkwin();
    }
});
item6.addEventListener("click",()=>{
if(currenttab==Tplay){
   item6.innerHTML="T";
    currenttab=Fplay;
    hasitem6="true";
    checkwin();
}else{
   item6.innerHTML='F';
    currenttab=Tplay;
    hasitem6="false";
    checkwin();
}
});
item7.addEventListener("click",()=>{
if(currenttab==Tplay){
   item7.innerHTML="T";
    currenttab=Fplay;
    hasitem7="true";
    checkwin();
}else{
   item7.innerHTML='F';
    currenttab=Tplay;
    hasitem7="false";
    checkwin();
}
});
item8.addEventListener("click",()=>{
if(currenttab==Tplay){
item8.innerHTML="T";
currenttab=Fplay;
hasitem8="true";
checkwin();
}else{
item8.innerHTML='F';
currenttab=Tplay;
hasitem8="false";
checkwin();
}
});
item9.addEventListener("click",()=>{
    if(currenttab==Tplay){
    item9.innerHTML="T";
    currenttab=Fplay;
    hasitem9="true";
checkwin();
    }else{
    item9.innerHTML='F';
    currenttab=Tplay;
    hasitem9="false";
checkwin();
    }
    });
function checkwin(){
    if((hasitem1=="true"&&hasitem2=="true" && hasitem3=="true")||(hasitem1=="true"&&hasitem4=="true" && hasitem7=="true")||(hasitem7=="true"&&hasitem8=="true" && hasitem9=="true")
   || (hasitem3=="true"&&hasitem6=="true" && hasitem9=="true") || (hasitem1=="true"&&hasitem5=="true" && hasitem9=="true") 
   || (hasitem3=="true"&&hasitem5=="true" && hasitem7=="true") || (hasitem2=="true"&&hasitem5=="true" && hasitem8=="true") &&(currenttab=Tplay)){
Tplay.style.backgroundColor="#006400";
gamer.style.backgroundColor="#8B0000";
textcontent.innerText="Start New Game";
newgame.style.backgroundColor="#8B0000";

    }else if((hasitem1=="false"&&hasitem2=="false" && hasitem3=="false")||(hasitem1=="false"&&hasitem4=="false" && hasitem7=="false")||(hasitem7=="false"&&hasitem8=="false" && hasitem9=="false")
    || (hasitem3=="false"&&hasitem6=="false" && hasitem9=="false") || (hasitem1=="false"&&hasitem5=="false" && hasitem9=="false") 
    || (hasitem3=="false"&&hasitem5=="false" && hasitem7=="false") || (hasitem2=="false"&&hasitem5=="false" && hasitem8=="false") &&(currenttab=Fplay)){
        Fplay.style.backgroundColor="#006400";
        gamer.style.backgroundColor="#8B0000";
        textcontent.innerText="Start New Game";
newgame.style.backgroundColor="#8B0000";
    }
    else{
        game();
    }
}

alert("hi iam working");