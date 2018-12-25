export const _add2El = (sourceEl, targetEl) => {
    targetEl.appendChild(sourceEl)
}

export const _addEvent = (el, evtName, cb, isCapture) => {
    el.addEventListener(evtName, cb, isCapture)
}

export const _setCss = (el, styles) => {
    for (let key in styles) {
        el.style[key] = styles[key]
    }
}

export const _setClass = (el, className) => {
    // 后面再优化
    el.className = el.className
        ? el.className.trim() + '' + className
        : className
}
