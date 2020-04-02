import React from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';


const SidePanel = (props) => {

    return (
        <div className="SidePanelComponent">
            <div className="SidePanel">
                {props.machineData.map((machine, index) => {
                    return (
                        <Link to={`/${machine.name}`} key={index}>
                            <p className={machine.name === props.currentPage ? 'current' : ''}>
                                {machine.name}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentPage: state.currentPage
})


export default connect(mapStateToProps, null)(SidePanel);