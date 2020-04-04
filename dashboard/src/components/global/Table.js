import React, {useState} from 'react';

const Table = (props) => {
    const [sortVal, SetSortVal] = useState('')

    const dataFromColumnKey = (obj, key) => {
        const splitKey = key.split('.')
        const finalVal = splitKey.reduce((currentVal, accumulator) => {
            return obj[accumulator]
        }, obj)
        return finalVal
    }

    const calculateWidth = () => {
        let autoWidth = `${100 / props.tableKeys.length}`
        return props.autoWidth ? {width: `${autoWidth}%`} : ''
    }

    const sortedData = sortVal !== '' ? props.data.sort((a, b) => {
        const aVal = dataFromColumnKey(a, sortVal);
        const bVal = dataFromColumnKey(b, sortVal);
        return aVal > bVal ? 1 : aVal < bVal ? -1 : 0
    }) : props.data

    return (
        <div className="tableComponent">
            <ul className='tableHeaders'>
                {props.tableKeys.map((column, index) => {
                    return (
                        <li key={index} style={calculateWidth()}>
                            <div className={`${sortVal === column.columnKey ? 'active' : ''}`} onClick={column.sortColumn ? ()=>SetSortVal(column.columnKey) : null}>
                                {column.columnHeader}
                                {column.sortColumn && <i className={`fas fa-angle-down ${sortVal === column.columnKey ? 'active' : ''}`}></i>}
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className='tableData'>
                {sortedData.map((rowData, index) => {
                    return (
                        <ul key={index}>
                            {props.tableKeys.map((column, indx) => {
                                return (
                                    <li key={indx} style={calculateWidth()}>
                                        <div>
                                            {
                                                column.formatData
                                                    ?
                                                    column.formatData(dataFromColumnKey(rowData, column.columnKey))
                                                    :
                                                    dataFromColumnKey(rowData, column.columnKey)
                                            }
                                        </div>
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