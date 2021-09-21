import React, {ChangeEvent, FC} from 'react';

type InputPropsType = {
    onChange?: (value: string) => void
}

export const Input: FC<InputPropsType> = props => {
    const {
        onChange,
    } = props

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.currentTarget.value)
    }

    return <>

        <input type="text" placeholder={"*Введите текст"} onChange={onChangeCallback}/>
    </>
};