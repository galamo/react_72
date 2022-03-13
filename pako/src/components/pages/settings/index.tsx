import React, { useContext } from "react"
import { ACTIONS, GlobalState } from "../../../App"
import { TimeZoneSettings } from "../../ui-components/timezone-settings"
import { UserProfile } from "../../ui-components/user-profile"


export function SettingsPage() {
    const context = useContext(GlobalState)
    console.log("settings page render")
    const dispatcher = context && context?.dispatch as Function
    return <div className="container">
        <div className="row" >
            <h1> Settings </h1>
            <UserProfile userName={context?.userProfile?.userName} save={(userName: string) =>
                dispatcher({ type: ACTIONS.USER_PROFILE.UPDATE_USER, payload: userName })} />
            <TimeZoneSettings selectedTimezone={context.timezone} onTimeZoneChnage={(timezone: string) =>
                dispatcher({ type: ACTIONS.TIMEZONE.SET_TIMEZONE, payload: timezone })} />
        </div>

    </div>
}