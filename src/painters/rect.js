import {getImageData, getPos} from "../utils/helper";

let beginPoint = null
let endPoint = null
let isDrawing = false

export default {
    name: '空心矩形',
    icon: 'rect',

    mousedown: (e) => {
        beginPoint = getPos(e)

        isDrawing = true
    },
    mouseup: (e, cvs, cw) => {
        isDrawing = false
        // 保存整段操作，也可放入move中拆分
        cw.storeAction(getImageData(cvs))
    },
    mousemove: (e, cvs) => {
        if (isDrawing) {
            const ctx = cvs.getContext('2d')

            endPoint = getPos(e)
            ctx.clearRect(0, 0, cvs.width, cvs.height)
            ctx.strokeRect(beginPoint.x, beginPoint.y, endPoint.x - beginPoint.x, endPoint.y - beginPoint.y);
        }
    }
}
