import React, { useContext } from "react"
import { GlobalState } from "../../../App"

import { TimeZoneSettings } from "../../ui-components/timezone-settings"
import { UserProfile } from "../../ui-components/user-profile"
import { useDispatch, useSelector } from "react-redux"
import { ACTIONS } from "../../../store/actions"

export function SettingsPage() {
    // Using useContext + userReducer
    const context = useContext(GlobalState) // ONLY FOR USER PROFILE
    const dispatcher = context && context?.dispatch as Function
    // Using Redux
    const state: any = useSelector(state => state)
    const reduxDispatch = useDispatch()

    return <div className="container">
        <div className="row" >
            <h1> Settings </h1>
            <UserProfile userName={context?.userProfile?.userName} save={(userName: string) =>
                dispatcher({ type: ACTIONS.USER_PROFILE.UPDATE_USER, payload: userName })} />
            <TimeZoneSettings selectedTimezone={state.timezone} onTimeZoneChnage={(timezone: string) =>
                reduxDispatch({ type: ACTIONS.TIMEZONE.SET_TIMEZONE, payload: timezone })} />
        </div>

    </div>
}