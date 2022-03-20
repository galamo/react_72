import { ACTIONS } from "../actions"


const initialState = { timezone: "local", userName: "Adina Funis Yaniv" }

export const reducer = (state: any = initialState, action: { type: string, payload?: any }) => {
    console.log(state)
    switch (action.type) {
        case ACTIONS.TIMEZONE.SET_TIMEZONE: {
            return { ...state, timezone: action.payload }
        }
        case ACTIONS.USER_PROFILE.UPDATE_USER: {
            return { ...state, userName: action.payload }
        }
        default:
            return state
    }
}
