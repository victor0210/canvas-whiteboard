import {getImageData, getPos, setCtxDefaultConfig} from "../utils/helper";

let beginPoint = null
let endPoint = null
let isDrawing = false

export default {
    name: '直线',
    icon: 'pen',
    selectable: true,

    mousedown: (e, cvs, cvsBg) => {
        beginPoint = getPos(e)
        const ctx = cvs.getContext('2d')
        const ctxBg = cvsBg.getContext('2d')

        setCtxDefaultConfig(ctx)
        setCtxDefaultConfig(ctxBg)

        isDrawing = true
    },
    mouseup: (e, cvs, cvsBg, cw) => {
        isDrawing = false
        // 保存整段操作，也可放入move中拆分
        cw.storeAction(getImageData(cvsBg))
    },
    mousemove: (e, cvs, cvsBg) => {
        const ctxBg = cvsBg.getContext('2d')

        if (isDrawing) {
            endPoint = getPos(e)

            ctxBg.beginPath();
            ctxBg.moveTo(beginPoint.x, beginPoint.y);
            ctxBg.lineTo(endPoint.x, endPoint.y);
            ctxBg.closePath();
            ctxBg.stroke();

            beginPoint = endPoint
        }
    }
}
