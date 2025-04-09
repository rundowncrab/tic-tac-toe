let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let pWinner = document.querySelector("#winner");
let count=0;
const pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let flag=true;

boxes.forEach(box => {
    box.addEventListener('click', () =>{
        if(flag){
            box.innerText = "O";
            flag=false;
            
        }else{
            box.innerText = "X";
            flag=true;
        }
        box.disabled =true;
        count++;
        let winner = checkWinner();
        if(count==9 && !winner){
            draw();
        }
    })
});

const draw = () => {
    pWinner.innerText = `This ends in DRAWW`;
    resetGame();
};

const resetGame = ()=>{
    count=0;
    flag=true;
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    pWinner.innerText="Winner";

}

const showWinner=(winner)=> {
    pWinner.innerText = `Winner: ${winner}`;
    for(box of boxes){
        box.disabled=true;
    }
    // resetGame();
};

const checkWinner= () =>{
    for(let i of pattern){
        let pos1=boxes[i[0]].innerText;
        let pos2=boxes[i[1]].innerText;
        let pos3=boxes[i[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
                return pos1;
            }
        }
    } 
};


resetbtn.addEventListener("click", resetGame);






