import React from "react";
import style from './machine.module.css'
import PhotoExcavator from './images/2346595.png'
import MachineParameterChange from "./machineParameterChange";
import Menu from "../menu/menuContainer";

class Machine extends React.Component {

    render() {
        let machineNum = this.props.currentMachine;
        return <div className="container-lg center">
            <Menu/>
            <h5 className="display-5"><img width={50} src={PhotoExcavator}/> Экскаватор - №{machineNum.number}</h5>
            <p className="h4">Схема - {machineNum.schema}</p>
            <h5 className="display-5">Параметры</h5>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Подъем</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Холостое напряжение</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.ClimbUxx}
                                            parameterName={'ClimbUxx'} updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Стопорный ток</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.ClimbIct}
                                            parameterName={'ClimbIct'} updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток возбуждения</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.ClimbIvz}
                                            parameterName={'ClimbIvz'} updateParameter={this.props.updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Вращение</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Холостое напряжение</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.SpinUxx}
                                            parameterName={'SpinUxx'} updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Стопорный ток</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.SpinIct}
                                            parameterName={'SpinIct'} updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток возбуждения</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.SpinIvz}
                                            parameterName={'SpinIvz'} updateParameter={this.props.updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Ход от вращения</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Холостое напряжение</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.SpinHodUxx}
                                            parameterName={'SpinHodUxx'} updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Стопорный ток</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.SpinHodIct}
                                            parameterName={'SpinHodIct'} updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток возбуждения</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.SpinHodIvz}
                                            parameterName={'SpinHodIvz'} updateParameter={this.props.updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Напор</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Холостое напряжение</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.pressureUxx}
                                            parameterName={'pressureUxx'} updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Стопорный ток</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.pressureIct}
                                            parameterName={'pressureIct'} updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток возбуждения</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.pressureIvz}
                                            parameterName={'pressureIvz'} updateParameter={this.props.updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Ход от напора</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Холостое напряжение</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.pressureHodUxx}
                                            parameterName={'pressureHodUxx'}
                                            updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Стопорный ток</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.pressureHodIct}
                                            parameterName={'pressureHodIct'}
                                            updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток возбуждения</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.pressureHodIvz}
                                            parameterName={'pressureHodIvz'}
                                            updateParameter={this.props.updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ДОДК</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Ток подмотки</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.dodkIpodm}
                                            parameterName={'dodkIpodm'} updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток рывка</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.dodkIct}
                                            parameterName={'dodkIct'} updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток возбуждения</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.dodkIvz}
                                            parameterName={'dodkIvz'} updateParameter={this.props.updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Разрядная цепь</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Ток</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.dischargeСircuit}
                                            parameterName={'dischargeСircuit'}
                                            updateParameter={this.props.updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">БУСМ</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Ток 1</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.busmI1}
                                            parameterName={'busmI1'} updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток 2</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.busmI2}
                                            parameterName={'busmI2'} updateParameter={this.props.updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток 3</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.busmI3}
                                            parameterName={'busmI3'} updateParameter={this.props.updateParameter}/>
                </tr>
                </tbody>
            </table>
            <br/>
        </div>
    }
}







export default Machine;