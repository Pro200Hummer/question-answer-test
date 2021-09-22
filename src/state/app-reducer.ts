import data from './data.json'

export type InitialStateType = { question: string, id: number }[]

const initialState: InitialStateType = data.data


export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {


        default:
            return state
    }
};