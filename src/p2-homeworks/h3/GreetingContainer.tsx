import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserTypeArr} from "./HW3";

type GreetingContainerPropsType = {
    users: UserTypeArr, // need to fix any
    addUserCallback: (name: string) => void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
    }
    const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            addUser()
        }
    }

    let totalUsers = users.length // need to fix
    const addUser = () => {
        if (name.trim() === '') {
            setError('Имя не указано!')
        }
        if (name === 'Гарри') {
            setError('Указано плохое имя')
        }
        if (name !== 'Гарри' && name.trim() !== '') {
            alert(`Hello ` + name.trim() + '!') // need to fix
            addUserCallback(name.trim())
            setName('')
            setError('')
        }

    }
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
