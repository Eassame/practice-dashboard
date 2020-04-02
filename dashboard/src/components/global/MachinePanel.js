import React, {useEffect} from 'react'
import {updateCurrentPage} from "../../container/actions/machineDataAction";
import { connect } from 'react-redux'

const MachinePanel = props => {
    useEffect(()=>{
        props.updateCurrentPage(props.machine.name)
    },[])

    return (
        <div className="machinePanelComponent">
            <div className="machinePanel">
                <h1>{props.machine.name}</h1>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateCurrentPage: (page) => dispatch(updateCurrentPage(page))
})

export default connect(null, mapDispatchToProps)(MachinePanel);