import React, {useReducer} from 'react';
import {Input} from "./common/components/Input/Input";
import {AnswerType, appReducer, initialState, setAnswer, setStateToLocalStorage} from "./state/app-reducer";

export const App = () => {

    const [state, dispatch] = useReducer(appReducer, initialState)

    const setNewAnswer = (answer: AnswerType) => {
        dispatch(setAnswer(answer))
    }

    const onClickHandler = () => {
        setStateToLocalStorage(state)
    }

    return (
        <div>
            {state.map(i => {
                return <>
                    <div key={i.id}>{i.question}</div>
                    <Input id={i.id} setAnswerCallback={setNewAnswer}/>
                </>
            })}
            <button onClick={onClickHandler}>Отправить</button>
        </div>
    )
};

