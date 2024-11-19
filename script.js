const boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newbtn");
let wintxt = document.querySelector("#wintxt");
let turn = "X";
const winpatt = [
    [0,1,2], [3,4,5],[6,7,8],
    [0,3,6], [1,4,7],[2,5,8],
    [0,4,8], [2,4,6]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn == "X"){
        box.innerText = "X";

        turn = "O";
        } else{
            box.innerText = "O";
            turn = "X"; 
        }
        box.disabled = true;
        checkWinner();
    });
});

let resetgame = () => {
    turn = "X";
    unableboxes();
    wintxt.classList.add("hide");
}


let disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let unableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
let displayWinner = (winner) => {
    wintxt.innerText = `Congrats, ${winner} is the Winner!`;
    wintxt.classList.remove("hide");
    disableboxes();
}
let checkWinner = () => {
    for(let pattern of winpatt){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val !== "" && pos2val !== "" && pos3val !== ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner", pos1val);
                displayWinner(pos1val);
            }
        }
    }
}

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);