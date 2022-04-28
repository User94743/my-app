import React from "react";
import style from './welcome.module.css';
import Paramaters from '../tableParamaters/parametersContainer.jsx';
import {Link, NavLink, Route} from "react-router-dom";

class Welcome extends React.Component {

    componentDidMount() {

    }


    render() {

        return <div className={style.wrap}>
            {
                <div className="align-self-xl-center">

                <div className="container-lg overflow-hidden">
                    <div className="row gy-35">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <NavLink to="/parameters" className="btn btn-primary">Submit</NavLink>
                        </form>

                    </div>
                </div>
                </div>
            }
        </div>
    }
}

export default Welcome;