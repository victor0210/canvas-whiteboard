export const getPos = (evt) => {
    return {
        x: evt.clientX,
        y: evt.clientY
    }
}

export const isContain = (el, targetEl) => {
    let parent = el.parentNode
    let contained = false

    while (parent) {
        if (parent === targetEl) {
            contained = true
            parent = null
        }

        parent = parent && parent.parentNode
    }

    return contained
}

export const getImageData = (cvs) => {
    return cvs.getContext('2d').getImageData(0, 0, cvs.width, cvs.height)
}

export const setCtxDefaultConfig = (ctx) => {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
}
