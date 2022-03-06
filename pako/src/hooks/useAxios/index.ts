import React, { useState, useEffect } from "react"
import axios from "axios"

export function useAxios(hookState: { url: string, payload?: any }) {
    const initialState: Array<any> = []
    const [data, setData] = useState(initialState)
    useEffect(() => {
        async function getDataFromApi() {
            try {
                const result = await axios.get(hookState.url)
                const { data } = result
                console.log(data)
                setData(hookState?.payload.isArray ? data[0] : data[hookState?.payload?.key])
            } catch (error) {
                // Error Liad - 100%
            }
        }
        // return ()=>{} unmount
        getDataFromApi();
    }, [])
    return [data]
}