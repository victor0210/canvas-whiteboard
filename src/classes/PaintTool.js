import {_add2El, _addEvent, _setClass, _setCss} from "../utils/dom";
import Painter from "./Paninter";
import cw from "../cw"

class PaintTool {
    constructor (el, cvsIns, tools) {
        this.tools = _trans2Painter(tools)
        this.draggable = false

        this.$ins = _createPaintTool()
        this.$mountedEl = el
        this.$cvsIns = cvsIns
        this.$painter = null
    }

    bindTools2El (el) {
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
            this
        )

        // 调整尺寸适应目标元素
        _makeOver()

        // 绑定尺寸调整时间
        _addEvent(window, 'resize', _makeOver)
    }

    setPainter(painter) {
        console.log('set painter', painter.icon)
        this.$painter = painter
    }
}

const _createPaintTool = () => {
    let ins = document.createElement('div')

    _setClass(ins, 'tc--wb__pt')

    _setCss(ins, {
        width: '50px',
        top: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#444'
    })

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

const _addToolsToPanel = (tools, panelEl, cvsIns, ctx) => {
    tools.forEach(tool => {
        _addEvent(tool.$ins, 'click', e => {
            ctx.setPainter(tool)

            if (tool.click) {
                tool.click(e, cvsIns, cw)
            }
        })

        _add2El(tool.$ins, panelEl)
    })
}

export default PaintTool
