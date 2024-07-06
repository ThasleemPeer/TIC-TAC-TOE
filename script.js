let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let turnO=true;
 let newGameBtn=document.querySelector("#new-btn");
 let msgContainer=document.querySelector(".msg-container");
 let msg=document.querySelector("#msg");
const winPatterns=[
    [0,1,2],   
    [0,3,6],   
    [0,4,8],   
    [1,4,7],   
    [2,5,8],   
    [2,4,6],   
    [3,4,5],   
    [6,7,8]  
];
const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
       if (turnO){
        //player O turn
        box.innerText="O";
        turnO=false;
       }else{
        //palyer X turn
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       checkwinner();
    });
});
const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{
    msg.innerText=`Greetings, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkwinner = () => {
    for(let pattern of winPatterns){
    let posval1= boxes[pattern[0]].innerText;
    let posval2=boxes[pattern[1]].innerText;
    let posval3=boxes[pattern[2]].innerText;
    if (posval1!="" && posval2 !="" && posval3 !=""){
        if(posval1==posval2 && posval2==posval3 ){
            console.log("winner",posval1);

            showwinner(posval1);
        }

    }
    }

};
newGameBtn.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);