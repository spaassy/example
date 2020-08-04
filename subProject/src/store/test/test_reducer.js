import {
    createReducer
} from 'spaassy-redux'

let initial = {
    str: '我是子系统里的redux数据!'
}

export default createReducer(initial, {
    ['SETTEST']: (state, data) => {
        return Object.assign({}, state, {
            str: data
        })
    }
})