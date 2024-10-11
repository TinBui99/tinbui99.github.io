var myGamePiece;      // Vật thể
var myObstacles = []; // Chướng ngại vật
var myScore;          // Điểm số

// Hàm khởi tạo Game
function startGame(){
	// myGamePiece = new component(30, 30, "red",10, 120);
	myGamePiece = new component(30, 30, "bird.gif", 10, 120, "image");
	myGamePiece.gravity = 0.05; // tốc độ vật thể bị kéo xuống, 
	                            // càng lớn thì vật (bird) càng rơi nhanh
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();	                          
}

// Tạo đối tượng myGameArea
var myGameArea = {
	canvas: document.createElement("canvas"),
	start: function(){
		this.canvas.width = 480;
		this.canvas.height = 270;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea, 20);
	}, 
	clear: function(){
		this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
	}, 
	stop: function(){
		clearInterval(this.interval);
	}
}

// Hàm component hay 1 contructor
function component(width, height, color, x, y, type){
	this.type = type;
	if (this.type == "image") {
    	this.image = new Image();
    	this.image.src = color;
    }
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.score = 0;
	this.speedX = 0;
	this.speedY = 0;
	this.update = function(){
		ctx = myGameArea.context;
		if(this.type == "text"){
			ctx.font = this.width + " " + this.height;
			ctx.fillStyle = color;
			ctx.fillText(this.text, this.x, this.y);
		} 

		else if (this.type == "image") {
        	ctx.drawImage(this.image,
        	this.x,
        	this.y,
        	this.width, this.height);
    	} 
		else{
			ctx.fillStyle = color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}
	this.newPos = function(){
        this.x += this.speedX;
        this.y += this.speedY;
	}

	this.crashWith = function(otherobj){
		var myleft = this.x;
		var myright = this.x + (this.width);
		var mytop = this.y;
		var mybottom = this.y + (this.height);
		var otherleft = otherobj.x;
		var otherright = otherobj.x + (otherobj.width);
		var othertop = otherobj.y;
		var otherbottom = otherobj.y + (otherobj.height);
		var crash = true;
		if((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)){
          crash  = false;
		}
		return crash;
	}
}


function updateGameArea(){
	var x, height, gap, minHeight, maxHeight, minGap, maxGap;
	for (i=0; i<myObstacles.length; i+=1){
		if(myGamePiece.crashWith(myObstacles[i])){
			return;
		}
	}
	myGameArea.clear();
	myGameArea.frameNo += 1;
	if(myGameArea.frameNo == 1 || everyinterval(150)){
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x-height-gap, "green", x, height+gap));
	}

	for(i=0; i<myObstacles.length; i+=1){
		myObstacles[i].x += -1;
		myObstacles[i].update();
	}
	myScore.text="SCORE: " + myGameArea.frameNo;
	myScore.update();
	myGamePiece.newPos();
	myGamePiece.update();
}

function everyinterval(n){
	if((myGameArea.frameNo / n) % 1 == 0) {return true;}
	return false;
}



function move(dir) {
    myGamePiece.image.src = "bird.gif";
    if (dir == "up") {myGamePiece.speedY = -1; }
    if (dir == "down") {myGamePiece.speedY = 1; }
    if (dir == "left") {myGamePiece.speedX = -1; }
    if (dir == "right") {myGamePiece.speedX = 1; }
}

function clearmove() {
    myGamePiece.image.src = "bird.gif";
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}