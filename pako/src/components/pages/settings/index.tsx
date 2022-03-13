import React, { useContext } from "react"
import { ACTIONS, GlobalState } from "../../../App"
import { UserProfile } from "../../ui-components/user-profile"


export function SettingsPage() {
    const context = useContext(GlobalState)
    const dispatcher = context && context?.dispatch as Function
    return <div>
        <h1> Settings </h1>
        <UserProfile save={(userName: string) =>
            dispatcher({ type: ACTIONS.USER_PROFILE.UPDATE_USER, payload: userName })} />
    </div>
}