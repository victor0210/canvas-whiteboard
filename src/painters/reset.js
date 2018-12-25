export default {
    name: '撤销',
    icon: 'reset',
    click: (e, cvs, cw) => {
        cw.resetAction()

        const ctx = cvs.getContext('2d')
        ctx.putImageData(cw.getLastAction(), 0, 0)
    }
}
