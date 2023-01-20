import Phaser from 'phaser';
import {DebugDraw}  from "../utils/debugcol"

export default class Office extends Phaser.Scene {
  private cursor!: Phaser.Types.Input.Keyboard.CursorKeys;
  private Hero!: Phaser.Physics.Arcade.Sprite;
  constructor() 
  {
    super('GameScene');
  }

  preload()
  {
  }


  create() 
  {
  this.cursor = this.input.keyboard.createCursorKeys();
  const map = this.make.tilemap({ key: 'cifh' });

	const tileset = map.addTilesetImage('Floor', 'tiles');
	map.createLayer('Floor', tileset);
	const WallLayer = map.createLayer('Walls', tileset);
  const OfficeLayer = map.createLayer('Office', tileset);
  
  WallLayer.setCollisionByProperty({ collides: true });
  OfficeLayer.setCollisionByProperty({ collides: true });
  
  
  const Wise = this.physics.add.sprite(300,220, 'Wise', "/assets/wisedown2.png");
  Wise.setScale(0.75,0.75);
  Wise.body.immovable = true


  this.Hero = this.physics.add.sprite(480,580, 'Hero', "/assets/protdown2.png");
  this.Hero.setScale(0.60,0.60);
  this.Hero.body.setSize(this.Hero.width * 0.1, this.Hero.height * 0.1)
  this.Hero.body.setOffset(9,32)
  
  
  
  this.physics.add.collider(this.Hero, WallLayer)
  this.physics.add.collider(this.Hero, OfficeLayer)
  this.physics.add.collider(this.Hero, Wise)

  this.anims.create({
    key: "prota-idle-down",
    frames: [{key: 'Hero', frame: "protdown2.png"}]
  });

  this.anims.create({
    key: "prota-move-down",
    frames: this.anims.generateFrameNames('Hero', {start: 1, end: 3, prefix: "protdown", suffix: ".png"}),
    repeat: -1,
    frameRate: 10,
  });

  this.anims.create({
    key: "prota-move-up",
    frames: this.anims.generateFrameNames('Hero', {start: 1, end: 3, prefix: "protup", suffix: ".png"}),
    repeat: -1,
    frameRate: 10,
  });

  this.anims.create({
    key: "prota-move-right",
    frames: this.anims.generateFrameNames('Hero', {start: 1, end: 3, prefix: "protright", suffix: ".png"}),
    repeat: -1,
    frameRate: 10,
  });

  this.anims.create({
    key: "prota-move-left",
    frames: this.anims.generateFrameNames('Hero', {start: 1, end: 3, prefix: "protleft", suffix: ".png"}),
    repeat: -1,
    frameRate: 10,
  });

this.cameras.main.startFollow(this.Hero, true)



  };

  update()
  {
    if (!this.Hero  || !this.cursor) {
      console.log("something went wrong")
      return;
    } 

  const speed = 50

  if (this.cursor.left?.isDown) {
    this.Hero.anims.play("prota-move-left", true)
    this.Hero.setVelocity(-speed, 0)
    } 
    else if (this.cursor.right?.isDown) 
  {
    this.Hero.anims.play("prota-move-right", true)
    this.Hero.setVelocity(speed, 0)
  } 
  else if (this.cursor.up?.isDown) 
  {
    this.Hero.anims.play("prota-move-up", true)
    this.Hero.setVelocity(0, -speed)
  } 
  else if (this.cursor.down?.isDown) 
  {
    this.Hero.anims.play("prota-move-down", true)
    this.Hero.setVelocity(0, speed)
  } 
  else {
    this.Hero.setVelocity(0, 0)
    this.Hero.anims.play("prota-idle-down",true)
  }

  };
};
