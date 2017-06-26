import 'pixi'
import 'p2'
import Phaser from 'phaser'
import $ from 'jquery'
import BootState from './states/Boot'
import State1 from './states/State1'

import { config } from './config'
import './scss/app.scss'


class Game extends Phaser.Game {
  constructor() {
    super(config.gameWidth, config.gameHeight, Phaser.AUTO, 'content', null)
    /**
     * key state autostart 
     */
    this.state.add('Boot', BootState, false)
    this.state.add('State1', State1, false)
    this.state.start('Boot')
  }
}
window.isOnputDown = true
window.game = new Game()




