let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload,
        create,
        update
    }
};

let game = new Phaser.Game(config);
let plane, bullets, balloons, cursors, spaceKey;
let score = 0;
let scoreText;
let bgMusic;


function preload() {
    this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png');
    this.load.image('plane', 'https://labs.phaser.io/assets/sprites/ship.png');
    this.load.image('balloon', 'https://labs.phaser.io/assets/sprites/purple_ball.png');
    this.load.image('bullet', 'https://labs.phaser.io/assets/sprites/bullet.png');
  this.load.audio('bgMusic', 'https://assets.mixkit.co/music/preview/mixkit-game-level-music-689.mp3');
}

function create() {
    this.add.image(400, 300, 'sky');
    plane = this.physics.add.image(100, 300, 'plane');
    plane.setScale(1);
    plane.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();
    spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    bullets = this.physics.add.group({
        defaultKey: 'bullet',
        maxSize: 20
    });

    balloons = this.physics.add.group();
    this.time.addEvent({
        delay: 1000,
           callback: () => {
            let balloon = balloons.create(800, Phaser.Math.Between(50, 550), 'balloon');
            balloon.setVelocityX(-150);
            balloon.body.setAllowGravity(false);
        },
        loop: true
    });

  
    this.physics.add.overlap(bullets, balloons, hitBalloon, null, this);
}

function hitBalloon(bullet, balloon) {
    bullet.destroy();
    balloon.destroy();
    score += 10;
    console.log("Score:", score);
}

function update() {
    if (cursors.up.isDown) {
        plane.setVelocityY(-200);
    } else if (cursors.down.isDown) {
        plane.setVelocityY(200);
    } else {
        plane.setVelocityY(0);
    }

    if (Phaser.Input.Keyboard.JustDown(spaceKey)) {
        let bullet = bullets.get(plane.x + 40, plane.y);
        if (bullet) {
            bullet.setActive(true);
            bullet.setVisible(true);
            bullet.body.velocity.x = 400;
        }
    }
     bullets.children.each(bullet => {
        if (bullet.active && bullet.x > 850) {
         
            bullet.setActive(false);
            bullet.setVisible(false);
            bullet.body.velocity.x = 0;
        }
    });
}
