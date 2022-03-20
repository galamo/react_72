import React, { useState, useEffect } from "react"
import { API_KEY, TOP_HEADLINES_API_URL } from "../../../settings"
import { TopHeadlinesList } from "./top-headlines-list"
import axios from "axios"
import { useAxios } from "../../../hooks/useAxios"
import { WithLoading } from "../../ui-components/with-loading"


const SOURCES_PATH = "sources"
export function TopHeadlinesPage() {
    const initialState: Array<any> = []
    const url = `${TOP_HEADLINES_API_URL}/${SOURCES_PATH}?apiKey=${API_KEY}`
    const [data, setData] = useAxios({ url, payload: { key: "sources" } })

    return <div className="container">
        <WithLoading isLoading={!data.length}>
            <div className="row">
                <h1> Top Headlines </h1>
                <TopHeadlinesList sources={data} />
            </div>
        </WithLoading>
    </div>
}



