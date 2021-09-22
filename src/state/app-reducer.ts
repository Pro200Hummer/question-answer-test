import data from './data.json'

export type DataType = {
    question: string
    id: number
    answer?: string
}
export type AnswerType = {
    id: number
    answer?: string
}

type ActionsType =
    |ReturnType<typeof setAnswer>

export const initialState: DataType[] = data.data

export const setAnswer = (answer: AnswerType) => ({type: "APP/SET_ANSWER", ...answer} as const)

export const appReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "APP/SET_ANSWER":
            return state.map(s => {
                return s.id === action.id ? {...s, answer: action.answer} : s
            })
        default:
            return state
    }
};

export const setStateToLocalStorage = (data: DataType[]) => {
    // eslint-disable-next-line array-callback-return
    data.map(el => {if(el.answer) localStorage.setItem(el.question, el.answer)})
}