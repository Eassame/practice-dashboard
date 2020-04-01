import {GET_MACHINE_DATA} from '../types'


export default (state = {}, {type, payload}) => {
    switch (type) {
        case GET_MACHINE_DATA:
            return {
                ...state,
                machineData: payload
            }
        default:
            return {
                ...state
            }
    }
}