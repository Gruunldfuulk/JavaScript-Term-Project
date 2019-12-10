// game components
var myGamePiece;
var myBackground;
var myObstacles = [];
var myScore;
var gameOverSound;
var myGameMusic;
var gameOverText;

function startGame() {
    document.getElementById("playAgain").style.visibility = "hidden"; 
    myGamePiece = new component(130, 110, "media/icon3.png", 10, 150, "image");
    myBackground = new component(900, 600, "media/hackBackground.jpg", 0, 0, "background")
    myScore = new component("30px", "Orbitron", "white", 10, 30, "text");
    gameOverSound = new sound("media/gameover.wav");
    myGameMusic = new sound("media/A_Melody_for_Those_Who_Seek_Truth.mp3");
    gameOverText = new component("70px", "Orbitron", "Green", 210, 320, "text");
    myGameMusic.play();
    myGameArea.start();
}

// creates a canvas which is the game area
var myGameArea = {
    canvas : document.getElementById("myCanvas"),
    start : function() {
        this.canvas.width = 900;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        //document.body.innerHTML(this.canvas, document.div.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);

        // checks if a key is pressed
        window.addEventListener('keydown', function(e){
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
            e.preventDefault();
        })
        window.addEventListener('keyup', function(e){
            myGameArea.keys[e.keyCode] = false;
        })

        },

    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stop : function() {
        clearInterval(this.interval);
    }
}

function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    if(src == "media/A_Melody_for_Those_Who_Seek_Truth.mp3"){
        this.sound.setAttribute("loop", true);
    }
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }

    this.stop = function(){
        this.sound.pause();
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
            if(type == "background"){
                ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
            }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        if(this.type == "text"){
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }
    }

    // function to change the x and y positions
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;     
        
        // checks if the x position has reach the end of the image
        if(this.type == "background"){
            if(this.x == -(this.width)){
                this.x = 0;
            }
        }   
    }

    // function that returns boolean value for if the game piece crashed with game obstacles
    this.crashWith = function(otherobj){
        var myLeft = this.x;
        var myRight = this.x + (this.width);
        var myTop = this.y;
        var myBottom = this.y + (this.height);
        var otherLeft = otherobj.x;
        var otherRight = otherobj.x + (otherobj.width);
        var otherTop = otherobj.y;
        var otherBottom = otherobj.y + (otherobj.height);
        var crash = true;
        if((myBottom < otherTop) ||
            (myTop > otherBottom) ||
            (myRight < otherLeft) ||
            (myLeft > otherRight)){
            
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for(i = 0; i < myObstacles.length; i += 1){
        if(myGamePiece.crashWith(myObstacles[i])){
            myGameMusic.stop();
            gameOverSound.play();
            myGameArea.stop();
            myGameArea.clear();
            myBackground.update();
            myScore.text = "Credits: " + myGameArea.frameNo;
            myScore.update();
            gameOverText.text = "GAME OVER!";
            gameOverText.update();
            document.getElementById("playAgain").style.visibility = "visible"; 
            return;
        }
    }

    myGameArea.clear();
    myBackground.speedX = -1;
    myBackground.newPos();
    myBackground.update();

    myGameArea.frameNo += 1;
    if(myGameArea.frameNo == 1 || everyInterval(110)){
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 300;
        height = Math.floor(Math.random()*(maxHeight - minHeight + 1) +minHeight);
        minGap = 130;
        maxGap = 220;
        gap = Math.floor(Math.random()*(maxGap - minGap +1) +minGap);
        myObstacles.push(new component(40, height, "media/firewall.png", x, 0, "image"));
        myObstacles.push(new component(40, x - height - gap, "media/firewall.png", x, height + gap, "image"));
    }
    for(i = 0; i < myObstacles.length; i += 1){
        myObstacles[i].x += -3;
        myObstacles[i].update();
    }

    // update the score
    myScore.text = "Credits: " + myGameArea.frameNo;
    myScore.update();

    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
    if(myGameArea.keys && myGameArea.keys[37]){myGamePiece.speedX = -3;} //move left
    if(myGameArea.keys && myGameArea.keys[39]){myGamePiece.speedX = 3;} // move right
    if(myGameArea.keys && myGameArea.keys[38]){myGamePiece.speedY = -3;} // move up
    if(myGameArea.keys && myGameArea.keys[40]){myGamePiece.speedY = 3;} // move down
    myGamePiece.newPos();
    myGamePiece.update();
}

function everyInterval(n){
    if((myGameArea.frameNo / n) % 1 == 0) {return true;}
        return false;
}