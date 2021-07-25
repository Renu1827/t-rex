var box;

function setup() {
    //function in library p5.js
    createCanvas(400,400);
    //create sprite for square box in middle of canvas
    box = createSprite(200,200,30,30);
}

function draw(){
    //color code
    background(30);

    if(keyIsDown(RIGHT_ARROW)){
        //sprite.position.x
        box.position.x = box.position.x + 5;
    }

    if(keyIsDown(LEFT_ARROW)){
        //sprite.position.x
        box.position.x = box.position.x - 5;
    }

    if(keyIsDown(UP_ARROW)){
      //sprite.position.y
      box.position.y = box.position.y - 5;
  }
    

  if(keyIsDown(DOWN_ARROW)){
    //sprite.position.y
    box.position.y = box.position.y + 5;
}
    drawSprites();


  }
