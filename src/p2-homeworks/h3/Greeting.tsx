import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (event: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    // let inputClass = s.someClass
    // if (error === '') {
    //     let inputClass = s.someClass
    // } else {
    //     // inputClass = `${s.someClass} ${s.error}`
    //     inputClass = s.error
    // }
    // const inputClass = s.error // need to fix with (?:)
    const inputClass = (error === '') ? s.someClass : `${s.someClass} ${s.error}`

        return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={onEnter}
            />
            <span>{error}</span>
            <button onClick={addUser} className={s.button}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
