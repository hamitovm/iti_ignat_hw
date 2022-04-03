import React from 'react'
import mod from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={mod.background}>
            <div className={mod.green_background}>
                <div className={mod.avatar}>
                    <img src={props.avatar} alt=""/>
                </div>
                <div className={mod.chat}>
                    <div className={mod.user_name_message}>
                        <div>
                            <div className={mod.user__name}>{props.name}</div>
                        </div>
                        <div className={mod.user__message}>
                            <div>{props.message}</div>
                        </div>
                    </div>
                    <div className={mod.message_time}>
                        <div>{props.time}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Message
