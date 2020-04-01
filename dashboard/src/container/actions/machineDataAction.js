import {GET_MACHINE_DATA} from '../types'



const fakeData = [{

}]

export const getMachineData = () => dispatch => {
    setTimeout(()=>{
        dispatch({
            type: 'GET_MACHINE_DATA',
            payload: fakeData
        });
    },2000)
};
