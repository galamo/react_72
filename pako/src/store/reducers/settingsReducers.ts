import { ACTIONS } from "../actions"


const initialState = {
    timezone: "local",
    userName: "Adina Funis Yaniv",
    currentCountry: {
        isLoading: false,
        currentCountry: null
    },
    appModalError: {
        isOpen: false,
        message: null,
        header: null
    }
}

export const reducer = (state: any = initialState, action: { type: string, payload?: any }) => {
    console.log(state)
    switch (action.type) {
        case ACTIONS.TIMEZONE.SET_TIMEZONE: {
            return { ...state, timezone: action.payload }
        }
        case ACTIONS.USER_PROFILE.UPDATE_USER: {
            return { ...state, userName: action.payload }
        }
        case ACTIONS.CURRENT_COUNTRY.GET_COUNTRY_SET_LOADER: {
            return { ...state, currentCountry: { ...state.currentCountry, isLoading: action.payload } }
        }
        case ACTIONS.CURRENT_COUNTRY.GET_CURRENT_COUNTRY_SUCCESS: {
            return { ...state, currentCountry: { ...state.currentCountry, currentCountry: action.payload } }
        }
        case ACTIONS.CURRENT_COUNTRY.GET_CURRENT_COUNTRY_ERROR: {
            console.log(action.payload)
            const { message } = action.payload
            return {
                ...state, currentCountry: {
                    ...state.currentCountry,
                    currentCountry: null
                },
                appModalError: { ...state.appModalError, isOpen: true, header: "Get Country Failed", message }
            }
        }
        case ACTIONS.MODAL_ERROR.CLOSE_MODAL: {
            return {
                ...state, currentCountry: {
                    ...state.currentCountry,
                    currentCountry: null
                },
                appModalError: { ...state.appModalError, isOpen: false }
            }
        }

        default:
            return state
    }
}
