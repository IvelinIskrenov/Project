'use strict'

const game = new Phaser.Game(
    965,
    965,
    Phaser.AUTO,
    '',
    { preload, create, update }
);

function preload() 
{
    game.load.tilemap('Mario' , 'libs/MyTileSet.json', null , Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles' , 'libs\\32x32_tileset_mario.png');
    game.load.image('player' , 'libs\\player.png');
}
var map;
var sloifiziki;
var kartinki;
var player;
var cursor;
function create() 
{
    map = game.add.tilemap('Mario');
    map.addTilesetImage('Mario','tiles');
    sloifiziki = map.createLayer('\u0421\u043b\u043e\u0439 \u0441 \u043f\u043b\u043e\u0447\u043a\u0438 1');
    kartinki = map.createLayer('Tuk ima kartinki');
    sloifiziki.scale.setTo(1);
    kartinki.scale.setTo(1);
    sloifiziki.resizeWorld();
    map.setCollision([1008,404,403], true , sloifiziki);

    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    player = game.add.sprite(10,640,'player');
    player.scale.setTo(0.32);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.linearDaping = 1;
    cursor = game.input.keyboard.createCursorKeys();
    game.camera.follow(player); 
    
    player.body.gravity.y += 30;
    // on floor
    console.log("Created");
}
var right = false;
var left = false;
var down = false;
var up = false;
var isOntheFloor = 0;
function update() 
{
    right = false;
    left = false;
    down = false;
    up = false;
    if(cursor.right.isDown)
    {
        right = true;
        player.body.x += 2;
    }
    if(cursor.left.isDown)
    {
        left = true;
        player.body.x -= 2;
    }
    if(cursor.down.isDown)
    {
        down = true
        player.body.y += 2;
    }
    if (cursor.up.isDown && player.body.wasTouching.down)
    {
        player.body.velocity.y = -350;

    }
    // if(cursor.up.isDown)
    // {
    //     up = true
    //     player.body.y -= 2;
    // }


    game.physics.arcade.collide(player,sloifiziki, () =>{
        // if(right)
        // {
        //     player.body.x -= 2;
        // }
        // if(left)
        // {
        //     player.body.x += 2;
        // }
        // if(down)
        // {
        //     player.body.y -= 2;
        // }
        // if(up)
        // {
        //     player.body.y += 2;
        // }
        
    } );
}
// alt shift r