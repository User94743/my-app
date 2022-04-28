import React, {useEffect, useState} from "react";
import style from './machine.module.css'
import PhotoExcavator from './images/2346595.png'




const MachineParameterChange = ({machineId, machineParameter, parameterName, updateParameter}) => {
    const [editMode, setEditMode] = useState(false);
    const [machineParameterLocal, setMachineParameterLocal] = useState(machineParameter);

    useEffect(() => {
        setMachineParameterLocal(machineParameter)
    }, [machineParameter]);
    let activateEditMode = () => {
        setEditMode(true)}
    let deactivateEditMode = () => {
        updateParameter(Number(machineParameterLocal), machineId, parameterName)
        setEditMode(false)}
    let onParameterChange = (e) => {
        setMachineParameterLocal(e.currentTarget.value)}

    return <td>
            {!editMode && <td onClick={activateEditMode}>{machineParameterLocal}</td>}
            {editMode && <td><input onChange={onParameterChange} autoFocus={true}
             onBlur = {deactivateEditMode} value={machineParameterLocal} /></td>}
            </td>
}

export default MachineParameterChange;