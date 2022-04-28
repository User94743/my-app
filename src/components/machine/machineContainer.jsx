import React from "react";
import Machine from './machine'
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getNumMachine, updateParameter} from "../../redux/parametersReducer";

const MachineContainer = (props) => {
    props.getNumMachine(props.match.params.number);
    return <Machine currentMachine={props.currentMachine} updateParameter={props.updateParameter}  />
}


let mapStateToProps = (state) => {
    return {
        currentMachine: state.ParamsPage.currentMachine
    }
}

export default compose(
    connect(mapStateToProps, {
        getNumMachine, updateParameter})
    ,withRouter) (MachineContainer);
