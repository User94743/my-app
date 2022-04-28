import React from "react";
import style from './menu.module.css'
import {NavLink} from "react-router-dom";
class menu extends React.Component {

    componentDidMount() {

    }

    render() {
        return <div className={style.wrap}>
            {
                <div className="container-lg">

                    <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                            <NavLink to={'/parameters'} className={"nav-link active"}>Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/welcome'} className={"nav-link"}>Статистика</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/welcome'} className={"nav-link"}>Библиотека</NavLink>
                        </li>
                    </ul>

                </div>
            }
        </div>
    }
}

export default menu;