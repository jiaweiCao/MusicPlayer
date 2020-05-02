import { throttle } from "./commonTool";
export const fontSize = 14;

(function() {
  const calc = function() {
    const maxFontSize = 18
    const minFontSize = 12
    const html = document.getElementsByTagName('html')[0]
    const width = html.clientWidth
    console.log(html.clientWidth)
    let calcSize = fontSize * (width / 1500)
    calcSize = Math.min(maxFontSize, calcSize)
    calcSize = Math.max(minFontSize, calcSize)
    html.style.fontSize = calcSize + 'px'
    console.log(calcSize)
  }
  calc()
  window.addEventListener('resize', throttle(calc, 500))
})()
