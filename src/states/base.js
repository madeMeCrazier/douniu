/**
 * 福建人
 */

import Phaser from 'phaser'
import { setSize, setFull } from '../config'
const w = store.get('w')
const h = store.get('h')

export default class extends Phaser.State {

  init() {
    this.stage.backgroundColor = '#e71f19'
  }
  preload() {
  }
  create() {
  }

  doShake(obj) {
    return this.add.tween(obj).to({ width: obj.width * 1.05, height: obj.height * .975 }, 600, Phaser.Easing.Linear.In, true, 0, 1000, true)
  }
  doRotate(obj) {
    return this.add.tween(obj).to({ angle: 10 }, 600, Phaser.Easing.Linear.In, true, 0, 1000, true)
  }
  doUp(obj) {
    return this.add.tween(obj).to({ y: obj.y - 10 }, 800, Phaser.Easing.Linear.In, true, 0, 1000, true)
  }
  doDown(obj) {
    return this.add.tween(obj).to({ y: obj.y + 10 }, 800, Phaser.Easing.Linear.In, true, 0, 1000, true)
  }
  doLeft(obj) {
    return this.add.tween(obj).to({ x: obj.x - 10 }, 800, Phaser.Easing.Linear.In, true, 0, 1000, true)
  }
  doRight(obj) {
    return this.add.tween(obj).to({ x: obj.x + 10 }, 800, Phaser.Easing.Linear.In, true, 0, 1000, true)
  }
  doScale(obj) {
    return this.add.tween(obj).to({ width: obj.width * .98, height: obj.height * .98, y: obj.y - 2 }, 300, Phaser.Easing.Linear.In, true, 0, 1000, true)
  }
  doScale2(obj) {
    return this.add.tween(obj).to({ width: obj.width * .95, height: obj.height * .9 }, 1000, Phaser.Easing.Linear.In, true, 0, 1000, true)
  }
  fromLeft(obj, delayTime = 500) {
    return this.add.tween(obj).from({ x: -500 }, 800, Phaser.Easing.Linear.In, true, delayTime, 0, false)
  }

  fromRight(obj, delayTime = 500) {
    return this.add.tween(obj).from({ x: w + 500 }, 800, Phaser.Easing.Linear.In, true, delayTime, 0, false)
  }


  fromTop(obj, delayTime = 500) {
    let tt = delayTime ? delayTime : 500
    return this.add.tween(obj).from({ y: -500 }, 300, Phaser.Easing.Linear.In, true, delayTime, 0, false)
  }

  fromBottom(obj, delayTime = 500) {
    let tt = delayTime ? delayTime : 500
    return this.add.tween(obj).from({ y: h + 500 }, 800, Phaser.Easing.Linear.In, true, delayTime, 0, false)
  }
  fromZoom(obj, delayTime = 500) {
    return this.add.tween(obj).from({ width: obj.width * .05, height: obj.height * .05, alpha: .5 }, 600, Phaser.Easing.Linear.In, true, delayTime, 0, false)
  }


  as(x, y, key, size, isHeight) {

    let temp = this.add.sprite(x, y, key)
    temp.anchor.set(0.5)
    if (isHeight) {
      setSize(temp, 'height', (size / 100) * h)
    } else {
      setSize(temp, 'width', (size / 100) * w)
    }
    return temp
  }



}
