var MainMenu = {
		preload: function(){
        // Load our main menu image.
		this.load.image('pressToStart', 'assets/pressToStart.png');
	},

	// Setting up our gameworld.
	create: function(){
		this.add.sprite((config.width / 2), config.height / 2, 'pressToStart');
	},

	// This function is called once each frame(60fps) 
	update: function(){
		if (this.input.activePointer.isDown)
			this.scene.start('Game');		
	}
};