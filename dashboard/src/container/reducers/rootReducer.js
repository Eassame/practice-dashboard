import {GET_CPU_DATA, GET_MACHINE_DATA, GET_MEMORY_DATA, SET_CURRENT_PAGE} from '../types'

const mergeIntoData = (originalArray, payloadArray, key) => {
    const payloadObject = {};
    payloadArray.pods.forEach((element)=>{
        payloadObject[element.name] = element
    })
    return originalArray.map(machine => {
        machine.pods.forEach(pod=>{
            pod[key] = payloadObject[pod.name][key]
        })
        return machine
    })
}

export default (state = {}, {type, payload}) => {
    switch (type) {
        case GET_MACHINE_DATA:
            return {
                ...state,
                machineData: payload
            }
        case GET_MEMORY_DATA:
            return{
                ...state,
                memory: payload,
                machineData: mergeIntoData(state.machineData, payload, 'memory')
            };
        case GET_CPU_DATA:
            return{
                ...state,
                cpu: payload,
                machineData: mergeIntoData(state.machineData, payload, 'cpu')
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload
            }
        default:
            return state
    }
}