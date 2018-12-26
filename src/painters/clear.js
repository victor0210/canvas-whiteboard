export default {
    name: '清除',
    icon: 'clear',
    click: (e, cvs, cvsBg, cw) => {
        const ctxBg = cvsBg.getContext('2d')

        cw.storeAction(new ImageData(cvs.width, cvs.height))
        ctxBg.clearRect(0,0, cvs.width, cvs.height);
    }
}
