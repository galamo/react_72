import { ACTIONS } from "../actions"


const initialState = { timezone: "local" }

export const reducer = (state: any = initialState, action: { type: string, payload?: any }) => {
    console.log(state)
    switch (action.type) {
        case ACTIONS.TIMEZONE.SET_TIMEZONE: {
            return { ...state, timezone: action.payload }
        }
        default:
            return state
    }
}
