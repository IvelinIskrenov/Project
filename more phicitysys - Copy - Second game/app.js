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
    game.load.spritesheet('ball','assets\\ball.jpg');
    game.load.spritesheet('hero', 'assets\\hero.jpg');
}

let ball = [];
var mouse;
var hero;
var count = 1;
var i = 0;
function create() 
{
    hero = game.add.sprite(300,100,'hero');
    hero.scale.setTo(0.2);
    mouse = game.input.activePointer;
    game.physics.enable(hero);

    //ball = game.add.group();
  
        //var ball = ball.create(40 * i, 34 * i,'ball');
        ball[0] = game.add.sprite(20, 34 ,'ball');

        ball[0].scale.setTo(0.3);
        game.physics.enable(ball);
        //ball[0].body.gravity.y = 50;
        ball[0].body.velocity.y = game.rnd.integerInRange(-50,50);
        ball[0].body.velocity.x = game.rnd.integerInRange(-50,50);
        ball[0].body.collideWorldBounds = true;
        ball[0].body.bounce.setTo(0.5);

    
}
var dist;
function update() 
{
    dist = game.physics.arcade.distanceToPointer(hero,mouse);
    if(dist > 10)
    {
        game.physics.arcade.moveToPointer(hero,400);
    }

    if(game.physics.arcade.collide(ball , hero))
    {
        i += 30;
        count++;
        game.physics.arcade.collide(ball , hero)
        ball[count] = game.add.sprite(game.rnd.integerInRange(0,800),game.rnd.integerInRange(0,800),'ball');

        ball[count].scale.setTo(0.3);
        game.physics.enable(ball[count]);
        //ball[count].body.gravity.y = 50;
        ball[0].body.velocity.y = game.rnd.integerInRange(-50,50);
        ball[0].body.velocity.x = game.rnd.integerInRange(-50,50);
        ball[count].body.collideWorldBounds = true;
        ball[count].body.bounce.setTo(1.01);
    }
    ball.forEach(element1 => {
        ball.forEach(element2 => {
            game.physics.arcade.collide(element1 , element2)
        });
    });
}
// alt shift r