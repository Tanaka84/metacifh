import Phaser from 'phaser';
import config from './config';
import Office from './scenes/Game';
import Preloader from './scenes/Preloader';

new Phaser.Game(
  Object.assign(config, {
    scene: [Preloader, Office],
    scale: {
      width: 330,
      height: 155,
    
    autoCenter: Phaser.Scale.CENTER_BOTH,
    zoom: 5,
    }
  })
);
