import {GET_CPU_DATA, GET_MACHINE_DATA, GET_MEMORY_DATA, SET_CURRENT_PAGE} from '../types'
import {cpuApiCall, machines, memoryApiCall} from './fakeData' //just to get fake data


export const getMemoryUsage = (machine) => async dispatch => {
    const response = await memoryApiCall(machine)
    //would be:
    // axios.get('/')
    // .then(result => // dispatch here)
    // .catch(e => { //handleError})
    dispatch({
        type: GET_MEMORY_DATA,
        payload: response
    });
}

export const getCpuUsage = (machine) => async dispatch => {
    const response = await cpuApiCall(machine)
    dispatch({
        type: GET_CPU_DATA,
        payload: response
    });
}

export const getMachineData = () => dispatch => {
    setTimeout(()=>{
        dispatch({
            type: GET_MACHINE_DATA,
            payload: machines
        })
    }, 2000)
};


export const updateCurrentPage = (page) => dispatch => {
    dispatch({
        type: SET_CURRENT_PAGE,
        payload: page
    })
}