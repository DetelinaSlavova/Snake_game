var Pickup = {
	snakePickup: null,
	pickupImageName: 'pickup',
	pickupImageSrc: 'assets/pickup.png', 
	pickupImageSize: 15,

	SpawnApple: function () {
		var pickupX = Math.floor(Math.random() * (game.config.width - this.pickupImageSize));
		var pickupY = Math.floor(Math.random() * (game.config.height - this.pickupImageSize));
		var gameScene = game.scene.scenes[1];
		this.snakePickup = gameScene.add.sprite(pickupX < this.pickupImageSize ? 30 : pickupX, pickupY < this.pickupImageSize ? 30 : pickupY, this.pickupImageName);
	}
}