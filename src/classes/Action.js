class Action {
    constructor () {
        this.actions = []
    }

    put (action) {
        this.actions.push(action)
        console.log('put', this.actions)
    }

    reset (step = 1) {
        while (step > 0) {
            this.actions.pop()
            step--
        }

        console.log('reset', this.actions)
    }

    clear () {
        this.actions = []
    }

    getLastAction () {
        console.log('get', this.actions[this.actions.length - 1])
        return this.actions[this.actions.length - 1]
    }
}

export default Action
