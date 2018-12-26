import {getImageData, getPos} from "../utils/helper";

let beginPoint = null
let endPoint = null
let isClearing = false

export default {
    name: '橡皮擦',
    icon: 'eraser',
    selectable: true,

    mousedown: (e) => {
        beginPoint = getPos(e)

        isClearing = true
    },
    mouseup: (e, cvs, cvsBg, cw) => {
        isClearing = false

        cw.storeAction(getImageData(cvsBg))
    },
    mousemove: (e, cvs, cvsBg) => {
        if (isClearing) {
            let ctxBg = cvsBg.getContext('2d')

            endPoint = getPos(e)

            ctxBg.save()
            ctxBg.beginPath()
            ctxBg.arc(endPoint.x, endPoint.y, 40, 0, 2 * Math.PI);
            ctxBg.clip()
            ctxBg.clearRect(0, 0, cvs.width, cvs.height);
            ctxBg.restore();

            beginPoint = endPoint
        }
    }
}
