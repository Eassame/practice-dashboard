import React, {useState, useEffect} from 'react'
import {updateCurrentPage, getMemoryUsage, getCpuUsage} from "../../container/actions/machineDataAction";
import { connect } from 'react-redux'
import Table from "./Table";

const MachinePanel = props => {
    let ConstantCallTimeOut;

    useEffect(()=>{
        props.updateCurrentPage(props.machineName);
        constantCalls()
        // props.getCpuUsage(props.machine.name)

        return ()=>{
            clearTimeout(ConstantCallTimeOut)
        }
    },[])


    const constantCalls = () => {
        props.getMemoryUsage(props.machineName);
        ConstantCallTimeOut = setTimeout(()=>{
            constantCalls()
        }, 500)
    }

    const dataForTable = [
        {
            columnKey: 'name',
            columnHeader: 'Name',
            formatData: (currentData, currentObject)=>{
                return currentData
            }
        },
        {
            columnKey: 'node',
            columnHeader: 'Node',
            formatData: (currentData, currentObject)=>{
                return currentData
            }
        },
        {
            columnKey: 'status',
            columnHeader: 'Status',
            formatData: (currentData, currentObject)=>{
                return currentData
            }
        },
        {
            columnKey: 'restarts',
            columnHeader: 'Restarts',
            formatData: (currentData, currentObject)=>{
                return currentData
            }
        },
        {
            columnKey: 'age',
            columnHeader: 'Age',
            formatData: (currentData, currentObject)=>{
                return currentData
            }
        },
        {
            columnKey: 'cpu',
            columnHeader: 'CPU',
            formatData: (currentData, currentObject)=>{
                return currentData
            }
        },
        {
            columnKey: 'memory',
            columnHeader: 'Memory',
            formatData: (currentData, currentObject)=>{
                return currentData
            }
        }
    ]

    return (
        <div className="machinePanelComponent">
            <div className="machinePanel">
                <h1>{props.machineName}</h1>
                <Table data={props.machineData.find(x => x.name === props.machineName).pods} tableKeys={dataForTable}/>
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