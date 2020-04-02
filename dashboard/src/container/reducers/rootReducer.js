import {GET_CPU_DATA, GET_MACHINE_DATA, GET_MEMORY_DATA, SET_CURRENT_PAGE} from '../types'


export default (state = {}, {type, payload}) => {
    switch (type) {
        case GET_MACHINE_DATA:
            return {
                ...state,
                machineData: payload
            }
        case GET_MEMORY_DATA:
            const mergeIntoData = (originalArray, payloadArray) => {
                const payloadObject = {};
                payloadArray.pods.forEach((element)=>{
                    payloadObject[element.name] = element
                })
                return originalArray.map(machine => {
                    machine.pods.forEach(pod=>{
                        pod.memory = payloadObject[pod.name].memory
                    })
                    return machine
                })
            }

            return{
                ...state,
                memory: state.memory ? [...state.memory, payload] : [payload],
                machineData: mergeIntoData(state.machineData, payload)
            };
        case GET_CPU_DATA:
            return{
                ...state,
                cpu: state.cpu ? [...state.cpu, payload] : [payload]
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