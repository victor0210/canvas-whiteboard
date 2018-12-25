import {getImageData, getPos} from "../utils/helper";

let beginPoint = null
let endPoint = null
let isClearing = false

export default {
    name: '橡皮擦',
    icon: 'eraser',
    mousedown: (e) => {
        beginPoint = getPos(e)

        isClearing = true
    },
    mouseup: (e, cvs, cw) => {
        isClearing = false

        cw.storeAction(getImageData(cvs))
    },
    mousemove: (e, cvs) => {
        if (isClearing) {
            let ctx = cvs.getContext('2d')
            endPoint = getPos(e)

            ctx.save()
            ctx.beginPath()
            ctx.arc(endPoint.x, endPoint.y, 20, 0, 2 * Math.PI);
            ctx.clip()
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            ctx.restore();

            beginPoint = endPoint
        }
    }
}
