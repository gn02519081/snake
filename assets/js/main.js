var game;

// Create a new game instance 600px wide and 450px tall:
game = new Phaser.Game(600, 450, Phaser.AUTO, '');

// First parameter is how our state will be called.
// Second parameter is an object containing the needed methods for state functionality
game.state.add('Menu', Menu);

game.state.start('Menu');

var Menu = {

    preload : function() {
        // Loading images is required so that later on we can create sprites based on the them.
        // The first argument is how our image will be refered to, 
        // the second one is the path to our file.
        game.load.image('menu', './assets/images/menu.png');
    },

    create: function () {
        // Add a sprite to your game, here the sprite will be the game's logo
        // Parameters are : X , Y , image name (see above) 
        this.add.sprite(0, 0, 'menu');
    }

};