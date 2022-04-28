import React from "react";
import TableParams from "./parameters";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getNumMachine} from "../../redux/parametersReducer";

let mapStateToProps = (state) => {
    return {
        machineList: state.ParamsPage.machine
    }
}

export default compose(connect(mapStateToProps, {}), withRouter) (TableParams);