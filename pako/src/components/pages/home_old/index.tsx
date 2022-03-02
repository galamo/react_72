import React, { useEffect } from "react"
import { Link } from "react-router-dom"


export function HomePage() {
    useEffect(() => {
        return () => {
            console.log("component HomePage unmount!!!")
        }
    }, [])

    return <div className="container">
        <div className="row">
            <h2> <Link to={`/country/israel`}> Israel </Link> </h2>
            <h2> <Link to={`/country/usa`}> USA </Link> </h2>
            <h2> <Link to={`/country/ukraine/keyv`}> Ukraine </Link> </h2>
        </div>
    </div>
}