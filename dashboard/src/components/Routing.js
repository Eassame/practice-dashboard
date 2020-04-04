import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {getMachineData} from "../container/actions/machineDataAction";
import SidePanel from "./global/SidePanel";
import MachinePanel from "./global/MachinePanel";
import Loading from "./global/Loading";

const Routing = (props) => {
    useEffect(() => {
        props.getMachineData()
    }, []);


    if (props.machineData) {
        return (
            <Router>
                <div id="dashboard">
                    <SidePanel machineData={props.machineData}/>
                    <Switch>
                        {props.machineData.map((machine, index) => {
                            return (
                                <Route exact path={`/${machine.name}`} key={machine.name}
                                       render={renderProps =>
                                           <MachinePanel {...renderProps} machineName={machine.name}/>
                                       }
                                />
                            )
                        })}
                        <Route render={() => <Redirect to={`/${props.machineData[0].name}`}/>} />
                    </Switch>
                </div>
            </Router>
        )
    } else {
        return <Loading/>

    }

}

const mapStateToProps = state => ({
    machineData: state.machineData
});

export default connect(mapStateToProps, {getMachineData})(Routing);