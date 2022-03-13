import React, { useContext } from "react"
import { GlobalState } from "../../../App"
import { TZComponent } from "../../ui-components/timezone"


export function LoginPage() {
    const context = useContext(GlobalState)
    return <div>
        Login page
        <TZComponent timezone={context.timezone} datetime={new Date().toString()} />
    </div>
}