import {_setClass, _setCss} from "../utils/dom";

class Painter {
    constructor(opts) {
        const {
            name,
            icon,
            mousedown,
            mouseup,
            mousemove,
            click
        } = opts

        this.name = name
        this.icon = icon
        this.mousedown = mousedown
        this.mouseup = mouseup
        this.mousemove = mousemove
        this.click = click
        this.$ins = _createPainterEl(opts)
    }
}

const _createPainterEl = (tool) => {
    let toolEl = document.createElement('div')

    // for test -------------------
    toolEl.innerText = tool.icon

    _setCss(toolEl, {
        display: 'flex',
        flexBasis: '50px',
        backgroundColor: '#ffcc00'
    })

    _setClass(toolEl, tool.icon)
    // for test -------------------

    return toolEl
}

export default Painter
