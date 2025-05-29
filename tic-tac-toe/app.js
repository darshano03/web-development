let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".resetButton");
let msg = document.querySelector(".msg");
let msgv = document.querySelector(".msgv");
let msgv2 = document.querySelector(".msgv2");
let resetBtn = document.querySelector(".reset-btn");
let turnO=true;
winnerpattren=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO == true){
            box.innerText="O"
            turnO=false;
            box.disabled=true;
        }
        else{
            box.innerText="X"
            turnO=true;
            box.disabled=true;
        }
        box.innerText.disabled=true;
       checkWinner();
    });
    });
    resetBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        msg.style.display="none";
        msgv.style.display="none";
        msgv2.style.display="none";
        resetBtn.style.display="none";
    })
})
    resetButton.addEventListener("click",()=>{
        boxes.forEach((box)=>{
            box.innerText="";
            box.disabled=false;
            msg.style.display="none";
            msgv.style.display="none";
            msgv2.style.display="none";
            resetBtn.style.display="none";
        })
})     

resetBtn.addEventListener("click",()=>{
    resetBtn.style.display="none";
})
const checkWinner=()=>{
    for(let pattern of winnerpattren){
       let patval1=boxes[pattern[0]].innerText;
       let patval2=boxes[pattern[1]].innerText;
       let patval3=boxes[pattern[2]].innerText;
            if(patval1 !="" && patval2 != "" && patval3 != "" ){
                if(patval1==patval2 && patval2==patval3){
                    msg.style.display="block";
                    msg.innerText=patval1+" "+patval2+" "+patval3;
                    msgv.style.display="block";
                    msgv.innerText="WINNER";
                    msgv2.style.display="block";
                    msgv2.innerText="WINNER";
                    resetBtn.style.display="block";
                }
            }
            
        }
    
}
