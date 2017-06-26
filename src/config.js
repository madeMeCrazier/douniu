const Ratio = window.devicePixelRatio
const clientWidth = document.documentElement.clientWidth || document.body.clientWidth
const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
const gameWidth = Ratio * clientWidth
const gameHeight = Ratio * clientHeight


export const config = {
  gameWidth: gameWidth,
  gameHeight: gameHeight,
}

export const adapt = (designWidth, rem2px) => {
  let d = window.document.createElement('div')
  d.style.width = '1rem'
  d.style.display = 'none'
  let head = window.document.getElementsByTagName('head')[0]
  head.appendChild(d)
  let defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'))
  d.remove()
  let st = document.createElement('style')
  let portrait = '@media screen and (min-width: ' + window.innerWidth + 'px) {html{font-size:" + ((window.innerWidth / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}'
  let landscape = '@media screen and (min-width: ' + window.innerHeight + 'px) {html{font-size:' + ((window.innerHeight / (designWidth / rem2px) / defaultFontSize) * 100) + '%;}}'
  st.innerHTML = portrait + landscape
  head.appendChild(st)
  return defaultFontSize
}

export const setSize = (sprite, param, len) => {
  if (param === 'height') {
    let precent = len / sprite.height
    sprite.height = len
    sprite.width = sprite.width * precent
  } else {
    let precent = len / sprite.width
    sprite.width = len
    sprite.height = sprite.height * precent
  }
}

export const setFull = (sprite) => {
  let Ratio = window.devicePixelRatio
  let w = document.documentElement.clientWidth || document.body.clientWidth
  let h = document.documentElement.clientHeight || document.body.clientHeight

  let ww = Ratio * w
  let hh = Ratio * h
  sprite.width = ww
  sprite.height = hh
}



// 动画特效
/*
 Back
 Bounce
 Circular
 Cubic
 Elastic
 Exponential
 Linear
 Quadratic
 Quartic
 Quintic
 Sinusoidal
 */
//
// game.add.tween().to(properties, duration, ease, autoStart, delay, repeat, yoyo)