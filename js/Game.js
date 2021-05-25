class Game{
    constructor(){
        this.rank1=loadImage("images/rank1.png");
        this.rank2=loadImage("images/rank2.png");
        this.rank3=loadImage("images/rank3.png");
        this.rank4=loadImage("images/rank4.png");
    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
           player=new Player ();
           var playerCountRef=await database.ref("playerCount")
           .once("value")
           if(playerCountRef.exists()){
               playerCount=playerCountRef.val();
               player.getCount();

           }
           
           form=new Form();
           form.display();
        }
car1=createSprite(100,200);
car2=createSprite(300,200);
car3=createSprite(500,200);
car4=createSprite(700,200);
cars=[car1,car2,car3,car4];

car1.addImage(car1IMG);
car2.addImage(car2IMG);
car3.addImage(car3IMG);
car4.addImage(car4IMG);

    }
    play(){
        form.hide();
    //    textSize(30);
      //  text("Game Started",120,100);
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        
        
if(allPlayers !==undefined){
    background(ground);
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
    var index=0;

    var x =200;
    var y =0;
    for(var i in allPlayers){
      index=index+1;
      x=x+220;
      y=displayHeight-allPlayers[i].distance;
      cars[index-1].x=x;
      cars[index-1].y=y;

      if(index===player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
        //  cars[index-1].shapeColor="red";
          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y;

      }

    }
}
if (keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance+=30;
    player.update();

    if(player.distance>4350){
        gameState=2
        player.rank+=1;
        Player.updateCarsAtEnd(player.rank)
}
if(player.rank==1){
    image(this.rank1,displayWidth/2-200,-displayHeight*4,400,400);
}
if(player.rank==2){
    image(this.rank2,displayWidth/2-200,-displayHeight*4,400,400);
}
if(player.rank==3){
    image(this.rank3,displayWidth/2-200,-displayHeight*4,400,400);
}
if(player.rank==4){
    image(this.rank4,displayWidth/2-200,-displayHeight*4,400,400);
}
}
drawSprites()

    }
    end(){
        console.log("Game Ended")
    }
}