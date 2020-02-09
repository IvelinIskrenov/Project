'use strict'

const game = new Phaser.Game(
    800,
    800,
    Phaser.AUTO,
    '',
    { preload, create, update }
);

function preload() 
{
    console.log("Preloaded");
}

function create() 
{
    console.log("Created");
}

function update() 
{

}
// alt shift r