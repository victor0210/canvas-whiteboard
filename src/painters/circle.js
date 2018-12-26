import {getImageData, getPos, setCtxDefaultConfig} from "../utils/helper";

let beginPoint = null
let endPoint = null
let isDrawing = false

export default {
    name: '空心圆形',
    icon: 'circle',
    selectable: true,

    mousedown: (e, cvs) => {
        beginPoint = getPos(e)

        isDrawing = true

        const ctx = cvs.getContext('2d')
        setCtxDefaultConfig(ctx)
    },
    mouseup: (e, cvs, cvsBg, cw) => {
        isDrawing = false

        // 将数据同步到背景canvas
        const ctx = cvs.getContext('2d')
        const ctxBg = cvsBg.getContext('2d')
        setCtxDefaultConfig(ctxBg)

        endPoint = getPos(e)

        // clear front canvas
        ctx.clearRect(0, 0, cvs.width, cvs.height)
        ctx.save();

        // render bg canvas
        const rx = Math.abs(endPoint.x - beginPoint.x) / 2
        const ry = Math.abs(endPoint.y - beginPoint.y) / 2

        ctxBg.beginPath();
        ctxBg.ellipse(
            (endPoint.x + beginPoint.x) / 2,
            (endPoint.y + beginPoint.y) / 2,
            rx,
            ry,
            0, 2 * Math.PI, false);

        ctxBg.closePath();
        ctxBg.stroke()

        // save action
        cw.storeAction(getImageData(cvsBg))
    },
    mousemove: (e, cvs) => {
        if (isDrawing) {
            const ctx = cvs.getContext('2d')

            endPoint = getPos(e)
            ctx.clearRect(0, 0, cvs.width, cvs.height)

            ctx.save();
            const rx = Math.abs(endPoint.x - beginPoint.x) / 2
            const ry = Math.abs(endPoint.y - beginPoint.y) / 2

            ctx.beginPath();
            ctx.ellipse(
                (endPoint.x + beginPoint.x) / 2,
                (endPoint.y + beginPoint.y) / 2,
                rx,
                ry,
                0, 2 * Math.PI, false);

            ctx.closePath();
            ctx.stroke()
        }
    }
}
