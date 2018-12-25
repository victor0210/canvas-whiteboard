import cw from '../src/cw'
import linePainter from '../src/painters/line'
import clearPainter from '../src/painters/clear'
import eraserPainter from '../src/painters/eraser'
import resetPainter from '../src/painters/reset'
import rectPainter from '../src/painters/rect'

window.cw = cw

window.onload = () => {
    // 将tools单独抽象出去
    cw.init({
        el: document.getElementById('for-binding'),
        tools: [
            linePainter,
            clearPainter,
            eraserPainter,
            resetPainter,
            rectPainter
        ]
    })
}
