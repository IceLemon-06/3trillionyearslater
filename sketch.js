//var ball;
var hypotheticball, database, position ;
function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    hypotheticball = createSprite(250,250,10,10);
    hypotheticball.shapeColor = "red";
    var hypotheticballPosition = database.ref('ball/position'); 
    hypotheticballPosition.on("value", readPosition, showError);

}

//database = firebase.database(); 
//console.log(database); 
//createCanvas(500,500); 
//hypnoticBall = createSprite(250,250,10,10); 
//hypnoticBall.shapeColor = "red"; 
//var hypnoticBallPosition = database.ref('ball/position'); 
//hypnoticBallPosition.on("value", readPosition, showError);
//
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
    
}

function readPosition(data) {
    position = data.val(); 
    console.log(position.x); 
    hypotheticball.x = position.x; 
    hypotheticball.y = position.y;
}

function showError() {
    console.error("ERROR, Data not receieved.");
}