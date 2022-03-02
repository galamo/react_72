import moment from "moment"

export function getApiDateFormat(date: Date): string | any {
    const isInstanceOfDate = date instanceof Date
    if (!isInstanceOfDate) throw new Error("Invalid Date")
    return moment(date).format("YYYY-MM-DD")
}