var TouchInput = {
	startPosX: null,
	startPosY: null,
	endPosX: null,
	endPosY: null,
	differenceX: null,
	differenceY: null,
	touchGet: false,

	CalculateDifference: function(){
		this.differenceX = this.startPosX - this.endPosX;
		this.differenceY = this.startPosY - this.endPosY;
	},

	CalculateDirection: function(){
		if (Math.abs(this.differenceX) > Math.abs(this.differenceY)){
			if (this.differenceX < 0 && Snake.direction != Direction.left)
				Snake.direction = Direction.right;
			else if (this.differenceX > 0 && Snake.direction != Direction.right)
				Snake.direction = Direction.left;
		}
		else if (Math.abs(this.differenceY) > Math.abs(this.differenceX)){
			if (this.differenceY < 0 && Snake.direction != Direction.up)
				Snake.direction = Direction.down;
			else if (this.differenceY > 0 && Snake.direction != Direction.down)
				Snake.direction = Direction.up;
		}
	}
}