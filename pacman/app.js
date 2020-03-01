'use strict'

const game = new Phaser.Game(
    960,
    960,
    Phaser.AUTO,
    '',
    { preload, create, update }
);
var map;
var sloi_fIZIKI;
var choveche;
var cursor;
function preload() 
{
    game.load.image('pac','libs/pac.png');
    game.load.tilemap('map','libs/map.json',null,Phaser.Tilemap.TILED_JSON);
    game.load.image('tileset','libs/32x32_tileset_mario.png');
}

function create() 
{
    map = game.add.tilemap('map');
    map.addTilesetImage('mario','tileset');
    sloi_fIZIKI = map.createLayer(0);
    sloi_fIZIKI.resizeWorld();

    sloi_fIZIKI = map.createLayer('Fiziki');
    sloi_fIZIKI.resizeWorld();
    map.setCollision([287,314,283,315,319,288,282,320,318], true , sloi_fIZIKI);
    game.physics.startSystem(Phaser.Physics.ARCADE);

    cursor = game.input.keyboard.createCursorKeys();

    choveche = game.add.sprite(32,32,'pac');
    choveche.scale.setTo(0.022);
    game.physics.enable(choveche);
    choveche.body.gravity
}

function update() 
{
    if(cursor.right.isDown)
    {
        choveche.body.velocity.x = 150;
        choveche.body.velocity.y = 0;
    }
    if(cursor.left.isDown)
    {
        choveche.body.velocity.x = -150;
        choveche.body.velocity.y = 0;
    }
    if(cursor.down.isDown)
    {
        choveche.body.velocity.x = 0;
        choveche.body.velocity.y = 150;
    }
    if(cursor.up.isDown)
    {
        choveche.body.velocity.x = 0;
        choveche.body.velocity.y = -150;
    }
    
    game.physics.arcade.collide(choveche,sloi_fIZIKI, () =>{
    } );

}
// alt shift r