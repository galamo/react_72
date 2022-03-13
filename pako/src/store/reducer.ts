export const reducer = (state: any, action: { type: string, payload?: any }) => {
    console.log(state)
    switch (action.type) {
        //   case ACTIONS.USER_PROFILE.UPDATE_USER: {
        //     return { ...state, userProfile: { userName: action.payload } }
        //   }
        //   case ACTIONS.TIMEZONE.SET_TIMEZONE: {
        //     return { ...state, timezone: action.payload }
        //   }
        default:
            return state
    }
}