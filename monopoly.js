
var board = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];

const player1_button = document.getElementById("player1");
const player2_button = document.getElementById("player2");


class Player {
    constructor(name,position,money){
        this.name = name;
        this.position = position;
        this.money = money;
    }
rollDice(){
    let pos = Math.floor(Math.random()*6)+1;  //Minimum 1
    console.log(pos);
    this.updatePosition(pos);
}

updatePosition(pos){
    this.position += pos;
    console.log(this.position);
    this.updateMoney();
}

updateMoney(){
    if(this.position < board.length)
        this.money -= board[this.position];
    else {
        this.position %= 15;
        this.money -= board[this.position];
    }
    console.log(player1);
    console.log(player2);
}
}

let player1 = new Player("Yash",0,500);
let player2 = new Player("Adi",0,500);

player1_button.addEventListener('click', function(){
    player1.rollDice();
}, false);
player2_button.addEventListener('click', function(){
    player2.rollDice();
}, false);
/*
player1_button.addEventListener('click', rollDice_1);
player2_button.addEventListener('click', rollDice_2);

var player1 = ["ProGrad",0,1000];
var player2 = ["FacePrep",0,1000];

function rollDice_1()
{
    let position = Math.floor(Math.random()*6)+1;  //Minimum 1
    changePosition_1(player1[1], position);
}

function rollDice_1()
{
    let position = Math.floor(Math.random()*6)+1;  //Minimum 1
    changePosition_2(player2[1], position);
}

function changePosition_1(old, currentPos)
{
    var newPosition = old+currentPos;
    console.log("Player one rolls", position)
    player1[1] = newPosition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}

function changePosition_2(old, currentPos)
{
    var newPosition = old+currentPos;
    console.log("Player one rolls", position)
    player2[1] = newPosition;
    console.log(player2[1]);
    updateMoney_2(player2[1]);
}

function updateMoney_1(p1)
{
    var updateMoney = 0;
    if(p1<board.length)
        updateMoney = player1[2] - board[p1-1];
    else
    {
        p1 = p1%15;
        updateMoney = player1[2] - board[p1-1];
    }
       
    console.log(updateMoney);
}

function updateMoney_2(p2)
{
    var updateMoney = 0;
    if(p1<board.length)
        updateMoney = player2[2] - board[p2-1];
    else
    {
        p2 = p2%15;
        updateMoney = player2[2] - board[p2-1];
    }
    console.log(updateMoney);
}

*/
