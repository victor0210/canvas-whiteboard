export default {
    name: '撤销',
    icon: 'reset',
    click: (e, cvs, cvsBg, cw) => {
        cw.resetAction()

        const ctxBg = cvsBg.getContext('2d')
        const lastAction = cw.getLastAction() || new ImageData(cvs.width, cvs.height)

        ctxBg.putImageData(lastAction, 0, 0)
    }
}
