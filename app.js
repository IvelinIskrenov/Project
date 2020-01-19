'use strict'
const game = new Phaser.Game(
    850,800,Phaser.AUTO,"",{preload,create,update}
)

function preload()
{

    loadResources();
    
}

function loadResources() {

    //for(let index = 0; index < 10 ; index++)
   // {
        game.load.image('bubble', 'pictures\\bubble.png');
   // }
    
}

var bubble1;
var bubble2;
var bubble3;
var bubble4;
var bubble5;
var bubble6;
var bubble7;
var bubble8;
var bubble9;
var bubble10;
var bubble11;
var bubble12;

function create()
{

    for(let i = 0; i < 12; i++)
    {
        //defining a bubbles
        let bubble = game.add.sprite(i*70,0,'bubble');
        //adding physics on all bubbles
        game.physics.enable(bubble);
        //settings
        bubble.body.gravity.y = i*10;
        bubble.body.bounce.y += i/12;
        bubble.body.collideWorldBounds = true;
    }
}

function update()
{
    
}

