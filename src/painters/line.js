import {getImageData, getPos} from "../utils/helper";

let beginPoint = null
let endPoint = null
let isDrawing = false

export default {
    name: '直线',
    icon: 'pen',
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
        const ctx = cvs.getContext('2d')

        if (isDrawing) {
            endPoint = getPos(e)

            ctx.strokeStyle = 'red';
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(beginPoint.x, beginPoint.y);
            ctx.lineTo(endPoint.x, endPoint.y);
            ctx.closePath();
            ctx.stroke();

            beginPoint = endPoint
        }
    }
}
