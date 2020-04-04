import React, {useEffect} from 'react'
import {getCpuUsage, getMemoryUsage, updateCurrentPage} from "../../container/actions/machineDataAction";
import {connect} from 'react-redux'
import Table from "./Table";
import moment from "moment";

const MachinePanel = props => {
    let ConstantCallTimeOut;

    useEffect(() => {
        props.updateCurrentPage(props.machineName);
        constantCalls()

        return () => {
            clearTimeout(ConstantCallTimeOut)
        }
    }, [])


    const constantCalls = () => {
        props.getMemoryUsage(props.machineName);
        props.getCpuUsage(props.machineName);
        ConstantCallTimeOut = setTimeout(() => {
            constantCalls()
        }, 300)
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

    return (
        <div className="machinePanelComponent">
            <div className="machinePanel">
                <h1><i className="fas fa-server"></i> {props.machineName}</h1>
                <Table
                    data={props.machineData.find(x => x.name === props.machineName).pods}
                    tableKeys={dataForTable}
                    autoWidth
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    machineData: state.machineData
})

const mapDispatchToProps = dispatch => ({
    updateCurrentPage: (page) => dispatch(updateCurrentPage(page)),
    getMemoryUsage: (machine_name) => dispatch(getMemoryUsage(machine_name)),
    getCpuUsage: (machine_name) => dispatch(getCpuUsage(machine_name))
})

export default connect(mapStateToProps, mapDispatchToProps)(MachinePanel);