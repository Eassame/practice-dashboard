import {GET_MACHINE_DATA, SET_CURRENT_PAGE} from '../types'


const fakeData = Array.from({ length: 20 }, (element, index) => (
    {name: `machine_${index}`, machine: `machine_${index*2}${index*3}${index*4}`}
    ))

export const getMachineData = () => dispatch => {
    setTimeout(()=>{
        dispatch({
            type: GET_MACHINE_DATA,
            payload: fakeData
        });
    },4000)
};


export const updateCurrentPage = (page) => dispatch => {
    dispatch({
        type: SET_CURRENT_PAGE,
        payload: page
    })
}