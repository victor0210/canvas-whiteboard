export const PARTIAL = 1
export const GLOBAL = 2
export const BOARD_ENABLE_EVENTS = [
    {
        name: 'mousedown',
        type: PARTIAL
    },
    {
        name: 'mousemove',
        type: GLOBAL
    },
    {
        name: 'mouseup',
        type: GLOBAL
    }
]
