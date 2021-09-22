import React, {ChangeEvent, FC, useState} from 'react';
import {AnswerType} from "../../../state/app-reducer";

type InputPropsType = {
    setAnswerCallback: (answer: AnswerType) => void
    id: number
}


export const Input: FC<InputPropsType> = props => {

    const {
        id,
        setAnswerCallback,
    } = props

    const [value, setValue] = useState<string>('')


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onBlurHandler = () => {
        setAnswerCallback({id, answer: value})
        setValue('')
    }

    return <>

        <input
            type="text"
            placeholder={"*Введите текст"}
            onChange={onChangeCallback}
            onBlur={onBlurHandler}/>
    </>
};