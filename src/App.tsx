import React, {useReducer} from 'react';
import {Input} from "./common/components/Input/Input";
import {AnswerType, appReducer, initialState, setAnswer, setStateToLocalStorage} from "./state/app-reducer";
import style from './common/styles/commonStyle.module.scss'

export const App = () => {

    const [state, dispatch] = useReducer(appReducer, initialState)

    const setNewAnswer = (answer: AnswerType) => {
        dispatch(setAnswer(answer))
    }

    const onClickHandler = () => {
        setStateToLocalStorage(state)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {state.map(i => {
                    return (
                        <div className={style.item}>
                            <div
                                key={i.id}
                                className={style.itemTitle}
                            >
                                {i.question}
                            </div>
                            <Input
                                className={style.input}
                                id={i.id}
                                setAnswerCallback={setNewAnswer}/>
                        </div>
                    )

                })}
            </div>
            <button onClick={onClickHandler} className={style.btnSend}>Send</button>
        </div>
    )
};

