import {getImageData, getPos, setCtxDefaultConfig} from "../utils/helper";

let beginPoint = null
let endPoint = null
let isDrawing = false

export default {
    name: '空心矩形',
    icon: 'rect',
    selectable: true,

    mousedown: (e) => {
        beginPoint = getPos(e)

        isDrawing = true
    },
    mouseup: (e, cvs, cvsBg, cw) => {
        isDrawing = false

        // 将数据同步到背景canvas
        const ctx = cvs.getContext('2d')
        const ctxBg = cvsBg.getContext('2d')

        setCtxDefaultConfig(ctxBg)

        ctxBg.strokeRect(beginPoint.x, beginPoint.y, endPoint.x - beginPoint.x, endPoint.y - beginPoint.y);

        ctx.clearRect(0, 0, cvs.width, cvs.height)

        cw.storeAction(getImageData(cvsBg))
    },
    mousemove: (e, cvs) => {
        if (isDrawing) {
            const ctx = cvs.getContext('2d')
            setCtxDefaultConfig(ctx)

            endPoint = getPos(e)
            ctx.clearRect(0, 0, cvs.width, cvs.height)
            ctx.strokeRect(beginPoint.x, beginPoint.y, endPoint.x - beginPoint.x, endPoint.y - beginPoint.y);
        }
    }
}
