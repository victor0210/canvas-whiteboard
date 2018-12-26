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
    let re = '(?:^|\\s)'+className+'(?!\\S)'
    let regexp = new RegExp(re, '')
    console.log(regexp.test(el.className))

    if (!regexp.test(el.className)) {
        el.className = el.className
            ? el.className.trim() + ' ' + className
            : className
    }
}

export const _removeClass = (el, className) => {
    el.className = el.className.replace( new RegExp('(?:^|\\s)'+className+'(?!\\S)') ,'');
}

export const _setId = (el, id) => {
    el.id = id
}

export const _appendDom = (parent, ...children) => {
    children.forEach(c => {
        parent.appendChild(c)
    })
}
