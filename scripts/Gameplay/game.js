var Direction = {
	left: 'left',
	right: 'right',
	up: 'up',
	down: 'down'
}

var Game = {
	delay: 0,

	// Loading our assets.
	preload: function () {
		cursors = this.input.keyboard.createCursorKeys();
		//Setting out starting direction
		Snake.direction = Direction.right;

		// Load our snake image.
		this.load.image(Snake.snakeImageName, Snake.snakeImageSrc);
		this.load.image(Pickup.pickupImageName, Pickup.pickupImageSrc);
	},

	// Setting up our gameworld.
	create: function () {
	
		//Display the snake 
		Snake.DisplaySnake();
		//Display the pickup 
		Pickup.SpawnApple();
	},

	// This function is called once each frame(60fps) 
	update: function () {
		Game.delay++;
		
				if(Game.delay%7 == 0){
			// Move our snake to the last given direction.
		
			Snake.MoveSnake();
			
		// Check the collision after the movement.
			Collision.AppleCollision();
			Collision.SelfCollision();
			Collision.WallCollision();
		 }

		 // Checking the input of out player each frame.
		 KeyboardInput.CheckDirection();
	}
};