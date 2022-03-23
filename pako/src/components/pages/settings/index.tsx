import React, { useContext } from "react"
import { GlobalState } from "../../../App"

import { TimeZoneSettings } from "../../ui-components/timezone-settings"
import { UserProfile } from "../../ui-components/user-profile"
import { useDispatch, useSelector } from "react-redux"
import { ACTIONS } from "../../../store/actions"

export function SettingsPage() {
    const { timezone, userName } = useSelector((state: any) => state.settingsReducers)
    const reduxDispatch = useDispatch()
    return <div className="container">
        <div className="row" >
            <h1> Settings </h1>
            <UserProfile userName={userName} save={(userName: string) =>
                reduxDispatch({ type: ACTIONS.USER_PROFILE.UPDATE_USER, payload: userName })} />
            <TimeZoneSettings selectedTimezone={timezone} onTimeZoneChnage={(timezone: string) =>
                reduxDispatch({ type: ACTIONS.TIMEZONE.SET_TIMEZONE, payload: timezone })} />
        </div>
    </div>
}