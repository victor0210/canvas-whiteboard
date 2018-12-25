export default {
    name: '清除',
    icon: 'clear',
    click: (e, cvs, cw) => {
        const ctx = cvs.getContext('2d')

        cw.storeAction(new ImageData(cvs.width, cvs.height))
        ctx.clearRect(0,0, cvs.width, cvs.height);
    }
}
