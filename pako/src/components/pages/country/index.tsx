import React from "react"
import { useParams } from "react-router-dom"
import { useAxios } from "../../../hooks/useAxios"

export function CountryPage() {
    const params = useParams()
    const url = `https://restcountries.com/v3.1/alpha/${params.country}`
    const [data] = useAxios({ url, payload: { isArray: true } })
    const isPutin = params.country === "ru"
    return <div className="container">
        <div className="row">
            <button> NAVIGATE TO TOP HEADLINES </button>

            <h1> The slected country is: {params.country} </h1>
            <img style={{ border: "1px solid black" }} src={(data as any)?.flags?.png} alt="" />
            {isPutin && <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/139E0/production/_123425308_c653bda5-8652-450b-84a1-482dbc637017.jpg" alt="" />}
        </div>
    </div>
}