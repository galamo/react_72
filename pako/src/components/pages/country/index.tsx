import React, { useContext, useEffect } from "react"
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"
import { GlobalState } from "../../../App";
import { useAxios } from "../../../hooks/useAxios"
import { getCountryAction } from "../../../store/asyncFunctions/country";
import { TZComponent } from "../../ui-components/timezone";
import { Spinner } from "react-bootstrap"
import { WithLoading } from "../../ui-components/with-loading";

export function CountryPage() {
    const params = useParams()
    const navigate = useNavigate();
    const context = useContext(GlobalState)
    const { currentCountry, isLoading } = useSelector((state: any) => state?.settingsReducers?.currentCountry)
    const isPutin = params.country === "ru"

    useEffect(() => {
        if (params.country) getCountryAction(params?.country as string)
    }, [])


    return <div className="container">
        <WithLoading isLoading={isLoading}>
            <div className="row">
                <button onClick={() => {
                    navigate("/login")
                }}> Disconnect </button>

                <h1> The slected country is: {params.country} <TZComponent timezone={context.timezone} datetime={new Date().toString()} /></h1>
                <img style={{ border: "1px solid black" }} src={(currentCountry as any)?.flags?.png} alt="" />
                {isPutin && <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/139E0/production/_123425308_c653bda5-8652-450b-84a1-482dbc637017.jpg" alt="" />}
            </div>
        </WithLoading>
    </div>
}
