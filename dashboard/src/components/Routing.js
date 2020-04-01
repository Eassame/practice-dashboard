import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {getMachineData} from "../container/actions/machineDataAction";

const Routing = (props) => {
    useEffect(() => {
        props.getMachineData()
    }, []);

    if (props.machineData) {
        return (
            <Router>
                <div id="dashboard">
                    <Switch>
                        <Route>

                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    } else {
        return <h1>Loading...</h1>

    }

}

const mapStateToProps = state => ({
    machineData: state.machineData
});

export default connect(mapStateToProps, {getMachineData})(Routing);