import React, {ChangeEvent, FC, useState} from 'react';
import {AnswerType} from "../../../state/app-reducer";

type InputPropsType = {
    id: number
    className: string
    setAnswerCallback: (answer: AnswerType) => void
}


export const Input: FC<InputPropsType> = props => {

    const {
        id,
        className,
        setAnswerCallback,
    } = props

    const [value, setValue] = useState<string>('')

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onBlurHandler = () => {
        setAnswerCallback({id, answer: value})
    }

    return <>
        <input
            value={value}
            className={className}
            type="text"
            placeholder={"*Введите текст"}
            onChange={onChangeCallback}
            onBlur={onBlurHandler}/>
    </>
};