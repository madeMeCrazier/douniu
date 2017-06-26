import Phaser from 'phaser'
import $ from 'jquery'
export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#000000'
    this.input.maxPointers = 1
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true
    this.scale.forceOrientation(false, true)
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true
        store.set('w', this.game.width)
    store.set('h', this.game.height)
  }

  preload() {
    this.load.crossOrigin = true;
    let baseUrl = store.get('baseUrl');

    //加载扑克序列帧
      this.load.atlasXML('poke', baseUrl + 'assets/poke.png', baseUrl + 'assets/poke.xml')

    // 音乐
    // this.load.audio('fujian_music', baseUrl + 'assets/fujian.mp3')
    // this.load.audio('hunan_music', baseUrl + 'assets/hunan.mp3')
    // this.load.audio('sichuan_music', baseUrl + 'assets/sichuan.mp3')
    // this.load.audio('guangdong_music', baseUrl + 'assets/guangdong.mp3')
    // this.load.audio('dongbei_music', baseUrl + 'assets/dongbei.mp3')


    // this.load.atlasXML('pic2', baseUrl+'assets/2.png', baseUrl+'assets/2.xml')

    this.load.onFileComplete.add((p) => {
      $('.loading p').html(`疯狂加载中 ${p}%`)

    })
    this.load.onLoadComplete.add(() => {

      if (store.get('isFirst') === '100') {
        this.state.start('State1')
      } else {
        this.state.start('State10')
      }
      $('.loading').fadeOut()
    })
  }

  create() {


    $('#main_btn').on('touchstart', (event) => {
      event.preventDefault()
      this.game.paused = false

    })

    $('#main_btn').on('touchend', (event) => {
      event.preventDefault()
      this.game.paused = true

    })
  }
}
