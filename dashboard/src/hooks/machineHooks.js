import {useEffect, useState} from "react";

export const useChartData = (data,key) => {
    const [chartArray, setChartArray] = useState([])

    useEffect(()=>{
        if(data){
            //Get the cumulative sum value of data
            const dataForChart = data.pods.reduce((accumulator, currentVal) => {
                return accumulator + currentVal[key]
            }, 0);

            //Round sum value
            const roundedVal = Math.floor((dataForChart * 1000))/1000

            setChartArray(prevState => {

                //Variable to remove the first element of array
                // and append the rounded value to the array
                let fiveLengthArray = prevState.length === 5 ? prevState.slice(1) : chartArray
                return [...fiveLengthArray, {value: roundedVal, time: new Date()}]
            })
        }
    }, [data])

    return chartArray
}