import {_add2El, _addEvent, _removeClass, _setClass, _setCss} from "../utils/dom";
import Painter from "./Paninter";
import cw from "../cw"

class PaintTool {
    constructor (el, cvsIns, cvsInsBg, tools) {
        this.tools = _trans2Painter(tools)
        this.draggable = false

        this.$ins = _createPaintTool()
        this.$mountedEl = el
        this.$cvsIns = cvsIns
        this.$cvsInsBg = cvsInsBg
        this.$painter = null
    }

    bindTools2El () {
        // 调整canvas的size去适应被绑定元素
        const _makeOver = () => {
            _fixPos(this.$ins)
        }

        // 添加至目标元素
        _add2El(this.$ins, this.$mountedEl)

        _addToolsToPanel(
            this.tools,
            this.$ins,
            this.$cvsIns,
            this.$cvsInsBg,
            this
        )

        // 调整尺寸适应目标元素
        _makeOver()

        // 绑定尺寸调整时间
        _addEvent(window, 'resize', _makeOver)
    }

    setPainter(painter) {
        if (this.$painter) {
            this.$painter.dective()
            _removeClass(this.$mountedEl, 'cursor--' + this.$painter.icon)
        }
        this.$painter = painter
        this.$painter.active()
        _setClass(this.$mountedEl, 'cursor--' + this.$painter.icon)
    }
}

const _createPaintTool = () => {
    let ins = document.createElement('div')

    _setClass(ins, 'cw--painttool')

    return ins
}

const _fixPos = (sourceEl) => {
    _setCss(sourceEl, {
        right: 0,
        top: 0
    })
}

const _trans2Painter = (configs) => {
    return configs.map(c => new Painter(c))
}

const _addToolsToPanel = (tools, panelEl, cvsIns, cvsInsBg, ctx) => {
    tools.forEach(tool => {
        _addEvent(tool.$ins, 'click', e => {
            tool.selectable && ctx.setPainter(tool)

            if (tool.click) {
                tool.click(e, cvsIns, cvsInsBg, cw)
            }
        })

        _add2El(tool.$ins, panelEl)
    })
}

export default PaintTool
