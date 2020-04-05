import React, {useEffect} from 'react'
import {getCpuUsage, getMemoryUsage, updateCurrentPage} from "../../container/actions/machineDataAction";
import {connect} from 'react-redux'
import Table from "./Table";
import moment from "moment";
import DataChart from "./Chart";
import {useChartData} from "../../hooks/machineHooks";

const MachinePanel = props => {
    const cpuChartArray = useChartData(props.cpu, 'cpu');
    const memoryChartArray = useChartData(props.memory, 'memory');

    let ConstantCallTimeOut;

    useEffect(() => {
        props.updateCurrentPage(props.machineName);
        constantCalls()

        return () => {
            clearTimeout(ConstantCallTimeOut)
        }
    }, [])

    const pods = props.machineData.find(x => x.name === props.machineName).pods

    const constantCalls = () => {
        props.getMemoryUsage(props.machineName);
        props.getCpuUsage(props.machineName);
        ConstantCallTimeOut = setTimeout(() => {
            constantCalls()
        }, 1000)
    }

    const dataForTable = [
        {
            columnKey: 'name',
            columnHeader: 'Name',
            sortColumn: true
        },
        {
            columnKey: 'node',
            columnHeader: 'Node',
            sortColumn: true
        },
        {
            columnKey: 'status',
            columnHeader: 'Status',
            sortColumn: true
        },
        {
            columnKey: 'restarts',
            columnHeader: 'Restarts',
            sortColumn: true
        },
        {
            columnKey: 'age',
            columnHeader: 'Age',
            sortColumn: true,
            formatData: currentData => {
                return moment(currentData).fromNow(true)
            }
        },
        {
            columnKey: 'cpu',
            columnHeader: 'CPU',
            formatData: currentData => {
                return Math.ceil(currentData * 100) / 100
            }
        },
        {
            columnKey: 'memory',
            columnHeader: 'Memory',
        }
    ]


    const dataForCpuTable = cpuChartArray.map((cpuTotal) => {
        return ({
            name: moment(cpuTotal.time).format('HH:mm:ss'),
            uv: cpuTotal.value
        })
    })

    const dataForMemoryTable = memoryChartArray.map((memoryTotal) => {
        return ({
            name: moment(memoryTotal.time).format('HH:mm:ss'),
            uv: memoryTotal.value
        })
    })


    return (
        <div className="machinePanelComponent">
            <div className="machinePanel">
                <h1><i className="fas fa-server"></i> {props.machineName}</h1>
                <div className='charts'>
                    <DataChart data={dataForCpuTable} width={300} height={200}/>
                    <DataChart data={dataForMemoryTable} width={300} height={200}/>
                </div>
                <Table
                    data={pods}
                    tableKeys={dataForTable}
                    autoWidth
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    machineData: state.machineData,
    memory: state.memory,
    cpu: state.cpu
})

const mapDispatchToProps = dispatch => ({
    updateCurrentPage: (page) => dispatch(updateCurrentPage(page)),
    getMemoryUsage: (machine_name) => dispatch(getMemoryUsage(machine_name)),
    getCpuUsage: (machine_name) => dispatch(getCpuUsage(machine_name))
})

export default connect(mapStateToProps, mapDispatchToProps)(MachinePanel);