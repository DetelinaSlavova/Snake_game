var config = {
    type: Phaser.AUTO,
	width: null,
	height: null,
}

config.width = Math.floor((window.innerWidth / 15)* 5);
config.height = Math.floor((window.innerHeight / 15)* 10);
	
var game = new Phaser.Game(config);

game.scene.add('MainMenu', MainMenu);
game.scene.add('Game', Game);
game.scene.start('MainMenu');
