import {_add2El, _addEvent, _setCss} from "../utils/dom";

class Board {
    constructor(el) {
        this.painterResults = []

        // canvas dom instance
        this.$ins = _createBoardInstance()

        // binded element
        this.$mountedEl = el
    }

    bindCanvas2El () {
        // 调整canvas的size去适应被绑定元素
        const _makeOver = () => {
            _fill2ElSize(this.$ins, this.$mountedEl)
        }

        // 添加至目标元素
        _add2El(this.$ins, this.$mountedEl)

        // 调整尺寸适应目标元素
        _makeOver()

        // 绑定尺寸调整时间
        _addEvent(window, 'resize', _makeOver)
    }
}

const _createBoardInstance = () => {
    let _ins = document.createElement('canvas')

    _setCss(_ins, {
        position: 'absolute'
    })

    return _ins
}

const _fill2ElSize = (sourceEl, targetEl) => {
    const {offsetWidth, offsetHeight} = targetEl

    sourceEl.width = offsetWidth
    sourceEl.height = offsetHeight

    _setCss(sourceEl, {
        left: 0,
        top: 0
    })
}

export default Board
