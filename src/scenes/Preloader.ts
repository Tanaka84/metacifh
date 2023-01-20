import Phaser from "phaser";

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader');
    };

    preload() 
    {
        this.load.image('tiles', '/assets/tilest.png');
    
        // load the JSON file
        this.load.tilemapTiledJSON('cifh', '/assets/CIFH.json');
        this.load.atlas('Hero', "./assets/Hero.png", "./assets/Hero.json")
        this.load.atlas("Wise", "./assets/Wise.png", "./assets/Wise.json")
      };

    create() 
    {
       
        this.scene.start('GameScene');

    };
}