import {GET_MACHINE_DATA, SET_CURRENT_PAGE} from '../types'


export default (state = {}, {type, payload}) => {
    switch (type) {
        case GET_MACHINE_DATA:
            return {
                ...state,
                machineData: payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload
            }
        default:
            return {
                ...state
            }
    }
}