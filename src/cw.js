import Board from "./classes/Board";
import PaintTool from "./classes/PaintTool";
import {_addEvent} from "./utils/dom";
import Action from "./classes/Action";

class CW {
    constructor() {
        // $mountedEl 为挂载的宿主元素
        this.$mountedEl = null

        // 画板
        this.board = null

        // 工具栏
        this.paintTool = null

        // 保存操作记录
        this.action = new Action()
    }

    init(opts) {
        const {el, tools} = opts

        // 提供配置
        this.$mountedEl = el
        this.board = new Board(el)

        let cvsIns = this.board.$ins

        this.paintTool = new PaintTool(el, cvsIns, tools)

        this.board.bindCanvas2El()
        this.paintTool.bindTools2El()

        // // 绑定canvas画布上的事件
        // BOARD_ENABLE_EVENTS.forEach((evt) => {
        //     const { name, type } = evt
        //     const target = type === PARTIAL ? cvsIns : document
        //
        //     _addEvent(target, name, (e) => {
        //         const painter = this.paintTool.$painter
        //         if (painter && painter[name]) painter[name](e, cvsIns, this)
        //     })
        // })

        let containEmit = false

        _addEvent(cvsIns, 'mousedown', (e) => {
            console.log('mousedown')
            containEmit = true
            const painter = this.paintTool.$painter
            if (painter && painter['mousedown']) {
                painter['mousedown'](e, cvsIns, this)
            }
        })
        _addEvent(document, 'mousemove', (e) => {
            if (containEmit) {
                console.log('move')
                const painter = this.paintTool.$painter
                if (painter && painter['mousemove']) painter['mousemove'](e, cvsIns, this)
            }
        })
        _addEvent(document, 'mouseup', (e) => {
            if (containEmit) {
                console.log('up')
                containEmit = false
                const painter = this.paintTool.$painter
                if (painter && painter['mouseup']) painter['mouseup'](e, cvsIns, this)
            }
        })
    }

    getCanvas() {
        return this.board.$ins
    }

    storeAction(action) {
        this.action.put(action)
    }

    resetAction(step) {
        this.action.reset(step)
    }

    clearAction() {
        this.action.clear()
    }

    getLastAction() {
        const cvsIns = this.board.$ins
        return this.action.getLastAction() || new ImageData(cvsIns.width, cvsIns.height)
    }
}

let cw = new CW();

export default cw;
