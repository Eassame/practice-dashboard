import React from 'react';

const Table = (props) => {

    const dataFromColumnKey = (obj, key) => {
        const splitKey = key.split('.')
        const finalVal = splitKey.reduce((currentVal, accumulator) => {
            return obj[accumulator]
        }, obj)
        return finalVal
    }


    return (
        <div>
            <ul className={'flexbox'}>
                {props.tableKeys.map((column, index) => {
                    return (
                        <li key={index}><p>{column.columnHeader}</p></li>
                    )
                })}
            </ul>
            <div className={'flexbox'}>
                {props.data.map((rowData, index) => {
                    return (
                        <ul key={index}>
                            {props.tableKeys.map((column, ind) => {
                                return (
                                    <li key={ind}>
                                        <p>{
                                            dataFromColumnKey(rowData, column.columnKey)
                                        }
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    )
                })}
            </div>
        </div>
    );
}

export default Table;