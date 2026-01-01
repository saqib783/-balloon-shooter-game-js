
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 } }
    },
    scene: { preload, create, update }
};

let game = new Phaser.Game(config);

let plane, bullets, balloons, spaceKey;
let score = 0;
let scoreText;

function preload() {
  
    this.load.image('sky','https://i.imgur.com/3e5L7dA.png'); 
    this.load.image('plane','https://i.imgur.com/n9YtY8A.png'); 
    this.load.image('balloon','https://i.imgur.com/7QKp3ms.png'); 
    this.load.image('bullet','https://i.imgur.com/5bXwU1g.png'); 
    this.load.image('cart','https://i.imgur.com/y6q3cR0.png'); 
    this.load.image('floor','https://i.imgur.com/1P1BBuH.png'); 
}

function create() {
    this.add.image(400, 300, 'sky').setScale(1);

    this.floor = this.add.tileSprite(400, 550, 800, 100, 'floor');

    this.cart = this.add.image(740, 500, 'cart').setScale(0.6);

    balloons = this.physics.add.group();

    this.time.addEvent({
        delay: 1500,
        callback: spawnBalloon,
        callbackScope: this,
        loop: true
    });

    plane = this.physics.add.image(100, 300, 'plane').setScale(0.8);
    plane.setImmovable(true);
    plane.body.allowGravity = false;

    bullets = this.physics.add.group({
        defaultKey: 'bullet',
        maxSize: 20
    });

    spaceKey = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    scoreText = this.add.text(16, 16, 'Score: 0', {
        fontSize: '24px',
        fill: '#fff'
    });

    this.physics.add.overlap(
        bullets,
        balloons,
        hitBalloon,
        null,
        this
    );
}

function spawnBalloon() {
    let balloon = balloons.create(
        this.cart.x,
        this.cart.y - 50,
        'balloon'
    );
    balloon.setScale(0.4);
    balloon.setVelocityY(-150);
}

function fireBullet() {
    let bullet = bullets.get(plane.x + 40, plane.y);
    if (bullet) {
        bullet.setActive(true);
        bullet.setVisible(true);
        bullet.body.allowGravity = false;
        bullet.setVelocityX(400);
    }
}

function hitBalloon(bullet, balloon) {
    bullet.destroy();
    balloon.destroy();
    score += 10;
    scoreText.setText('Score: ' + score);
}

function update() {
    this.floor.tilePositionX += 2;

    if (Phaser.Input.Keyboard.JustDown(spaceKey)) {
        fireBullet();
    }

    balloons.children.iterate(b => {
        if (b && b.y < -50) b.destroy();
    });

    bullets.children.iterate(b => {
        if (b && b.x > 800) b.destroy();
    });
}
