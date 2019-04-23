var Collision = {

	AppleCollision: function(){
            if (Math.abs(Snake.snakeHeadX - Pickup.snakePickup.x) <= Pickup.pickupImageSize/2
             && Math.abs(Snake.snakeHeadY - Pickup.snakePickup.y) <= Pickup.pickupImageSize/2){
				// Remove the apple.
				Pickup.snakePickup.destroy();

				// Add snake part.
				Snake.AddSnakePart();
               
				// Spawn a new apple.
				Pickup.SpawnApple();
			}
		
	},

	SelfCollision: function(){
		for (var i = 0; i < Snake.snake.length - 1; i++) {
			if (Snake.snakeHeadX == Snake.snake[i].x && Snake.snakeHeadY == Snake.snake[i].y){
				// Change to gameover scene.
				game.scene.start('MainMenu', true, false);
			}
		}
	},

	WallCollision: function(){
        if (Snake.snakeHeadX > game.config.width || Snake.snakeHeadY > game.config.height
            || Snake.snakeHeadX < 0 || Snake.snakeHeadY < 0){

            // Remove the apple.
            Pickup.snakePickup.destroy();

            // Remove the snake.
            for (var i = 0; i < Snake.snake.length; i++) {
            Snake.snake[i].destroy();
            }
            
            // Change to gameover scene.
            game.scene.start('MainMenu', true, false);
		}
	}
}