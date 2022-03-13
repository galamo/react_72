import moment from "moment"
import react from "react"


export function TZComponent(props: { datetime: string, timezone: string }): any {
    const { timezone, datetime } = props;
    if (!datetime) return;
    const format = "YY-MM-DD HH:mm:ss"
    const defaultTimeZone = timezone ? timezone.toLowerCase() : "local"
    const currentTime = defaultTimeZone === "utc" ?
        moment(datetime).utc().format(format).toString() : moment(datetime).format(format).toString()
    return <span>
        {currentTime}
    </span>
}
