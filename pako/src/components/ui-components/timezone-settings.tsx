import react, { useState } from "react"


export function TimeZoneSettings(props: { onTimeZoneChnage: Function, selectedTimezone: string }) {

    return <div className="mt-5">
        <h1> TimeZone ({props.selectedTimezone}) </h1>
        <div className="form-check">
            <input checked={props.selectedTimezone === "utc"} onChange={(e) => { props?.onTimeZoneChnage(e.target.value) }} className="form-check-input" type="radio" name="timzone" id="timzone1" value={"utc"} />
            <label className="form-check-label" >
                UTC
            </label>
        </div>
        <div className="form-check">
            <input checked={props.selectedTimezone === "local"} onChange={(e) => { props?.onTimeZoneChnage(e.target.value) }} className="form-check-input" type="radio" name="timzone" id="timzone2" value={"local"} />
            <label className="form-check-label" >
                Local time
            </label>
        </div>

    </div>
}