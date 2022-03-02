import React from "react"
import { useParams } from "react-router-dom"

export function CountryPage() {
    const params = useParams()
    console.log(params)
    return <div>
        <h1> The slected country is: {params.country} </h1>
        {/* shoe the coutnry info from Countries APi */}
    </div>
}