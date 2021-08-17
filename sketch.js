var bg
var b1,b2,b3,b4,b5,b6,b7,b8,b9
var x,xIMG,o,oIMG
var chanceState,b1State,b2State,b3State,b4State,b5State,b6State,b7State,b8State,b9State,gameState
var reset,resetIMG
function preload(){

    bg = loadImage("Base.PNG")
    xIMG = loadImage("X.png")
    oIMG = loadImage("O.png")
    resetIMG = loadImage("reset.png")
}


function setup(){

    createCanvas(600,600)

    b1State = "unfull"
    b2State = "unfull"
    b3State = "unfull"
    b4State = "unfull"
    b5State = "unfull"
    b6State = "unfull"
    b7State = "unfull"
    b8State = "unfull"
    b9State = "unfull"

    b1 = createSprite(150,480,140,160)
    b2 = createSprite(302,480,140,160)
    b3 = createSprite(454,480,140,160)
    b4 = createSprite(150,307,140,160)
    b5 = createSprite(302,307,140,160)
    b6 = createSprite(454,307,140,160)
    b7 = createSprite(150,134,140,160)
    b8 = createSprite(302,134,140,160)
    b9 = createSprite(454,134,140,160)
    b1.visible = false
    b2.visible = false
    b3.visible = false
    b4.visible = false
    b5.visible = false
    b6.visible = false
    b7.visible = false
    b8.visible = false
    b9.visible = false

    chanceState = "player1"
    gameState = "play"
    
}
function draw(){
    background(bg)
    if(gameState === "end"){
        background("Yellow")
    }
    drawSprites()
    if(b1State === "fullx"&&b2State === "fullx"&&b3State === "fullx"){
        console.log("X ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 1 Wins! ",100,300)
        gameState = "end"
        
    }
    if(b4State === "fullx"&&b5State === "fullx"&&b6State === "fullx"){
        console.log("X ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 1 Wins! ",100,300)
        gameState = "end"
    }
    if(b7State === "fullx"&&b8State === "fullx"&&b9State === "fullx"){
        console.log("X ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 1 Wins! ",100,300)
        gameState = "end"
    }

    if(b1State === "fullx"&&b4State === "fullx"&&b7State === "fullx"){
        console.log("X ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 1 Wins! ",100,300)
        gameState = "end"
    }
    if(b2State === "fullx"&&b5State === "fullx"&&b8State === "fullx"){
        console.log("X ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 1 Wins! ",100,300)
        gameState = "end"
    }
    if(b3State === "fullx"&&b6State === "fullx"&&b9State === "fullx"){
        console.log("X ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 1 Wins! ",100,300)
        gameState = "end"
    }

    if(b1State === "fullx"&&b5State === "fullx"&&b9State === "fullx"){
        console.log("X ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 1 Wins! ",100,300)
        gameState = "end"
    }
    if(b3State === "fullx"&&b5State === "fullx"&&b7State === "fullx"){
        console.log("X ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 1 Wins! ",100,300)
        gameState = "end"
    }

    //checking for O

    if(b1State === "fullo"&&b2State === "fullo"&&b3State === "fullo"){
        console.log("O ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 2 Wins! ",100,300)
        gameState = "end"
    }
    if(b4State === "fullo"&&b5State === "fullo"&&b6State === "fullo"){
        console.log("O ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 2 Wins! ",100,300)
        gameState = "end"
    }
    if(b7State === "fullo"&&b8State === "fullo"&&b9State === "fullo"){
        console.log("O ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 2 Wins! ",100,300)
        gameState = "end"
    }

    if(b1State === "fullo"&&b4State === "fullo"&&b7State === "fullo"){
        console.log("O ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 2 Wins! ",100,300)
        gameState = "end"
    }
    if(b2State === "fullo"&&b5State === "fullo"&&b8State === "fullo"){
        console.log("O ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 2 Wins! ",100,300)
        gameState = "end"
    }
    if(b3State === "fullo"&&b6State === "fullo"&&b9State === "fullo"){
        console.log("O ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 2 Wins! ",100,300)
        gameState = "end"
    }

    if(b1State === "fullo"&&b5State === "fullo"&&b9State === "fullo"){
        console.log("O ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 2 Wins! ",100,300)
        gameState = "end"
    }
    if(b3State === "fullo"&&b5State === "fullo"&&b7State === "fullo"){
        console.log("O ONE!")
        fill("red")
        textSize(74)
        stroke(6)
        text("Player 2 Wins! ",100,300)
        gameState = "end"
    }
    
if(gameState === "play"){
    if(chanceState === "player1"){
    if(mousePressedOver(b1)&&b1State === "unfull"){
        x = createSprite(80,480)
        x.addImage(xIMG)
        x.scale = 0.4
        b1State = "fullx"
        chanceState = "player2"
        console.log(chanceState)
    }
    if(mousePressedOver(b2)&&b2State === "unfull"){
        x = createSprite(230,480)
        x.addImage(xIMG)
        x.scale = 0.4
        b2State = "fullx"
        chanceState = "player2"
        console.log(chanceState)
    }
    if(mousePressedOver(b3)&&b3State === "unfull"){
        x = createSprite(380,480)
        x.addImage(xIMG)
        x.scale = 0.4
        b3State = "fullx"
        chanceState = "player2"
        console.log(chanceState)
    }
    if(mousePressedOver(b4)&&b4State === "unfull"){
        x = createSprite(80,307)
        x.addImage(xIMG)
        x.scale = 0.4
        b4State = "fullx"
        chanceState = "player2"
        console.log(chanceState)
    }
    if(mousePressedOver(b5)&&b5State === "unfull"){
        x = createSprite(230,307)
        x.addImage(xIMG)
        x.scale = 0.4
        b5State = "fullx"
        chanceState = "player2"
        console.log(chanceState)
    }
    if(mousePressedOver(b6)&&b6State === "unfull"){
        x = createSprite(380,307)
        x.addImage(xIMG)
        x.scale = 0.4
        b6State = "fullx"
        chanceState = "player2"
        console.log(chanceState)
    }
    if(mousePressedOver(b7)&&b7State === "unfull"){
        x = createSprite(80,134)
        x.addImage(xIMG)
        x.scale = 0.4
        chanceState = "player2"
        b7State = "fullx"
    }
    if(mousePressedOver(b8)&&b8State === "unfull"){
        x = createSprite(230,134)
        x.addImage(xIMG)
        x.scale = 0.4
        chanceState = "player2"
        b8State = "fullx"
    }
    if(mousePressedOver(b9)&&b9State === "unfull"){
        x = createSprite(380,134)
        x.addImage(xIMG)
        x.scale = 0.4
        chanceState = "player2"
        b9State = "fullx"
    }
}
if(chanceState === "player2"){

    if(mousePressedOver(b1)&&b1State === "unfull"){
        o = createSprite(190,480)
        o.addImage(oIMG)
        o.scale = 0.65
        chanceState = "player1"
        b1State = "fullo"
    }
    if(mousePressedOver(b2)&&b2State === "unfull"){
        o = createSprite(340,480)
        o.addImage(oIMG)
        o.scale = 0.6
        chanceState = "player1"
        b2State = "fullo"
    }
    if(mousePressedOver(b3)&&b3State === "unfull"){
        o = createSprite(490,480)
        o.addImage(oIMG)
        o.scale = 0.6
        chanceState = "player1"
        b3State = "fullo"
    }
    if(mousePressedOver(b4)&&b4State === "unfull"){
        o = createSprite(190,307)
        o.addImage(oIMG)
        o.scale = 0.6
        chanceState = "player1"
        b4State = "fullo"
    }
    if(mousePressedOver(b5)&&b5State === "unfull"){
        o = createSprite(340,307)
        o.addImage(oIMG)
        o.scale = 0.6
        chanceState = "player1"
        b5State = "fullo"
    }
    if(mousePressedOver(b6)&&b6State === "unfull"){
        o = createSprite(490,307)
        o.addImage(oIMG)
        o.scale = 0.6
        chanceState = "player1"
        b6State = "fullo"
    }
    if(mousePressedOver(b7)&&b7State === "unfull"){
        o = createSprite(190,134)
        o.addImage(oIMG)
        o.scale = 0.6
        chanceState = "player1"
        b7State = "fullo"
    }
    if(mousePressedOver(b8)&&b8State === "unfull"){
        o = createSprite(340,134)
        o.addImage(oIMG)
        o.scale = 0.6
        chanceState = "player1"
        b8State = "fullo"
    }
    if(mousePressedOver(b9)&&b9State === "unfull"){
        o = createSprite(490,134)
        o.addImage(oIMG)
        o.scale = 0.6
        chanceState = "player1"
        b9State = "fullo"
    }
}
}
if(gameState === "end"){
    console.log("h")


}

}
