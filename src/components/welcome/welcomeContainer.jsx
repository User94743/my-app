import React from "react";
import {connect} from "react-redux";
import Welcome from "./welcome";
import {actionCreatorEnter} from "../../redux/welcomeReducer";
import {compose} from "redux";

let mapStateToProps = (state) => {
        return {
            users: state.WelcomePage.users
        }
}

export default compose(connect(mapStateToProps, {actionCreatorEnter})) (Welcome);