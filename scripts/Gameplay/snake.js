var snake;

var Snake = {
	
	direction: 'right',
	snake: [],
	speed: 10,
	snakeImageName: 'snake',
	snakeImageSrc: 'assets/snake.png',
	snakeImageSize: 15,
	startPartAmount: 10,

	// Coordinates of our snake head.
	snakeHeadX: null,
	snakeHeadY: null,

	oldPosX: null,
	oldPosY: null,

	DisplaySnake() {

		// Set the random position for snake and pickup
		var snakeX = Math.floor(Math.random() * game.config.width) - this.snakeImageSize * this.startPartAmount;
		var snakeY = Math.floor(Math.random() * game.config.width) - this.snakeImageSize;
		var gameScene = game.scene.scenes[1];
	
		for (var i = 0; i < this.startPartAmount; i++) {
			this.snake[i] = gameScene.add.sprite(snakeX < 0 ? 100 + i * this.snakeImageSize : snakeX + i * this.snakeImageSize, snakeY < 0 ? 100 : snakeY, this.snakeImageName);
		}
	},

	AddSnakePart() {
		var gameScene = game.scene.scenes[1];
		// Add another sprite to the beginning of our array and place it on the last changed position.
		this.snake.unshift(gameScene.add.sprite(this.oldPosX, this.oldPosY, this.snakeImageName));
	},

	MoveSnake() {
		var firstCell = this.snake[this.snake.length - 1];
		var lastCell = this.snake.shift();
		this.oldPosX = lastCell.x;
		this.oldPosY = lastCell.y;

		switch (this.direction) {
			case "right":
				lastCell.x = firstCell.x + this.snakeImageSize;
				lastCell.y = firstCell.y;
				break;
			case "left":
				lastCell.x = firstCell.x - this.snakeImageSize;
				lastCell.y = firstCell.y;
				break;
			case "up":
				lastCell.x = firstCell.x;
				lastCell.y = firstCell.y - this.snakeImageSize;
				break;
			case "down":
				lastCell.x = firstCell.x;
				lastCell.y = firstCell.y + this.snakeImageSize;
				break;
		}

		this.snakeHeadX = lastCell.x;
		this.snakeHeadY = lastCell.y;

		this.snake.push(lastCell);
		firstCell = lastCell;
	}
};