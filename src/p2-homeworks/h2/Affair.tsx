import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            <span>{props.affair.name + '______' + props.affair.priority + '_____'}</span>
            <button onClick={deleteCallback}>X</button>
        </div>

    )
}

export default Affair
