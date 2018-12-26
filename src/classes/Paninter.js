import {_appendDom, _removeClass, _setClass} from "../utils/dom";
const className = 'cw--painter'

class Painter {
    constructor(opts) {
        const {
            name,
            icon,
            mousedown,
            mouseup,
            mousemove,
            click,
            selectable
        } = opts

        this.name = name
        this.icon = icon
        this.selectable = selectable
        this.mousedown = mousedown
        this.mouseup = mouseup
        this.mousemove = mousemove
        this.click = click
        this.$ins = _createPainterEl(opts)
    }

    active() {
        _setClass(this.$ins, 'active')
    }
    dective() {
        _removeClass(this.$ins, 'active')
    }
}

const _createPainterEl = (tool) => {
    let toolEl = document.createElement('div')
    _setClass(toolEl, className)

    let toolIcon = document.createElement('i')
    _setClass(toolIcon, tool.icon)

    // let toolText = document.createElement('p')
    // toolText.textContent = tool.name

    _appendDom(toolEl, toolIcon)
    return toolEl
}

export default Painter
