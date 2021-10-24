class Game{

    constructor(){}
    
    
    getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on("value",function(data)
    {
        gameState=data.val()
    })
    }
    
    update(state){
    database.ref('/').update({
        gameState:state
    })
    }
    
    
    async start(){
        
        
    if(gameState===0){
        player= new Player()
        var playerCountref=await database.ref('playerCount').once("value")
        if(playerCountref.exists()){
            playerCount=playerCountref.val();
            player.getCount();
        }
      form= new Form()
        form.display()}
    
        voldermort=createSprite(970, 300, 50, 50);
        voldermort.addImage(voldermort_img);
        voldermort.scale=0.30;
      
        potter=createSprite(250, 300, 50, 50);
        potter.addImage(potter_img);
        potter.scale=0.85;
    
        hp=createSprite(70, 300, 50, 50);
          hp.addImage(hpI);
          hp.scale=0.85;
          hp2=createSprite(80, 500, 50, 50);
          hp2.addImage(hp2I);
          hp2.scale=0.55;
          hp1=createSprite(60,76, 50, 50);
          hp1.addImage(hp1I);
          hp1.scale=0.65;

          vp=createSprite(1150, 300, 50, 50);
          vp.addImage(vpI);
          vp.scale=0.30;
          vp1=createSprite(1150, 479, 50, 50);
          vp1.addImage(vp1I);
          vp1.scale=0.40;
          vp2=createSprite(1150, 100, 50, 50);
          vp2.addImage(vp2I);
          vp2.scale=0.40;

          life1=createSprite(200,75)
        life1.addImage(life_bar1);
        life1.scale=0.15;
    
        life2=createSprite(999,75)
        life2.addImage(life_bar1);
        life2.scale=0.15;
          
          wall1=createSprite(560,6,10000,20);
           wall1.visible=false;

           wall2=createSprite(560,570,10000,20);
           wall2.visible=false;


        wizards=[potter,voldermort];
        
        potter.collide(wall1);
        potter.collide(wall2);
        voldermort.collide(wall1);
        voldermort.collide(wall2);
        
        }
    
    play(){
        form.hide()
        Player.getPlayerInfo()
        
        if(allPlayers!=undefined){
            image(bg,0,0,width,height);
            var index=0;
            var x=0;
            var y
            for(var plr in allPlayers){
                index+=1;
                x=0+(index*200)+allPlayers[plr].XPos;
            y=displayHeight-allPlayers[plr].distance
                wizards[index-1].x=x;
                wizards[index-1].y=y;
                



            }}
    if(keyDown("w")){
                potter.position.y-=10;
            }
            if(keyDown("s")){
                potter.position.y+=10;
            }
            if(keyDown(UP_ARROW)){
                potter.position.y-=10;
            }
            if(keyDown(DOWN_ARROW)){
                potter.position.y+=10;
            }
            if(keyDown("space")){
                gfireG.visible=true;
                fireG.visible=true;
                gfireG.velocityX=15;
                fireG.velocityX=-5;
            }
    if(fireG.isTouching(gfireG)){
        bomb1.velocityX=false;
        bomb2.visisble=false;
    }
    if(gfireG.isTouching(potter)){
        lives=lives-1;
        
         if(lives===3){
    life2.addImage(life_bar2);
    
    }else if(lives===1){
    life2.addImage(life_bar3);
    
    }else if(lives===0){
    //end();
    console.log("End");
    }
    }
    
    if(fireG.isTouching(voldermort)){
        lives=lives-1;
        
         if(lives===3){
    life1.addImage(life_bar2);
    
    }else if(lives===1){
    life1.addImage(life_bar3);
    }else if(lives===0){
        //end();
        console.log("End");
        
    }
            
            
            drawSprites();
    }
    
    
    
    end()
        console.log("End");
    
    
    
    
    
    
    
    
    
    
    
    
    
} }
