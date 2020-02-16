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
}
var map;
var sloifiziki;
var kartinki;
function create() 
{
    map = game.add.tilemap('Mario');
    map.addTilesetImage('Mario','tiles');
    sloifiziki = map.createLayer('\u0421\u043b\u043e\u0439 \u0441 \u043f\u043b\u043e\u0447\u043a\u0438 1');
    kartinki = map.createLayer('Tuk ima kartinki');
    sloifiziki.scale.setTo(1);
    kartinki.scale.setTo(1);
    sloifiziki.resizeWorld();
    map.setCollision([1008,404,403],true);
    

    console.log("Created");
}

function update() 
{

}
// alt shift r