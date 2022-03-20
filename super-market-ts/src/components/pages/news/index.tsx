import React, { useEffect, useState } from "react"
import axios from "axios"
import { Search } from "../../ui-components/search"

import moment from "moment"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getApiDateFormat } from "./utils";

const DATE_FORMAT = "yyyy-MM-dd"
const NEWS_API_URL = `https://newsapi.org/v2/everything`
const TOP_HEADLINES_API_URL = `https://newsapi.org/v2/top-headlines`
const API_KEY = `5cc86e158bfd4d919b9d2b8b8043036e`
// const ?q=ukraine&apiKey=


export function NewsPage() {
    const initialArticles: Array<any> = []
    const [articles, setArticles] = useState(initialArticles)
    const [isLoading, setIsLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    const [search, setSearch] = useState("")
    const [country, setCountry] = useState("")
    const before1Month = moment().subtract(1, "month").toDate()
    const [fromDate, setFromDate] = useState(before1Month)
    const [toDate, setToDate] = useState(new Date())
    useEffect(() => {
        async function getNews() {
            setIsLoading(true)
            const result = await axios.get(`${NEWS_API_URL}?q=${search}&apiKey=${API_KEY}`)
            const { data } = result
            const { totalResults, articles } = data
            setGroupState(articles, totalResults)
        }
        if (typeof search === 'string' && search.length > 3) getNews()
    }, [search])

    useEffect(() => {
        async function getTopHeadlines() {
            setIsLoading(true)
            const result = await axios.get(`${TOP_HEADLINES_API_URL}?country=${country}&apiKey=${API_KEY}`)
            const { data } = result
            const { totalResults, articles } = data
            setGroupState(articles, totalResults)
        }
        if (country) getTopHeadlines()
    }, [country])

    async function searchNews() {
        if (!search) return;
        setIsLoading(true)
        const from = getApiDateFormat(fromDate)
        const to = getApiDateFormat(toDate)
        const result = await axios.get(`${NEWS_API_URL}?q=${search}&from=${from}&to=${to}&sortBy=popularity&apiKey=${API_KEY}`)
        const { data } = result
        const { totalResults, articles } = data
        setGroupState(articles, totalResults)
    }

    function setGroupState(articles: Array<any>, totalResults: number) {
        setArticles(articles)
        setTotalResults(totalResults)
        setIsLoading(false)
    }

    const showSearchHeader = !!search.length || !!country
    return <div className="container">
        <div className="row">
            <h1> News Page </h1>
            {showSearchHeader && <h3> Total results for {search} is: {!isLoading ? totalResults : <Loader />} </h3>}
            <div className="col-lg-4 offset-4">
                <Search onInputChange={(value: string) => { setSearch(value) }} />
            </div>
            <div className="col-lg-4 offset-4">
                <button className="btn btn-primary" onClick={() => setCountry("us")}>USA</button>
                <button className="btn btn-primary" onClick={() => setCountry("il")}>Israel</button>
                <button className="btn btn-primary" onClick={() => setCountry("fr")}>France</button>
            </div>
            <div className="col-lg-4 offset-4 mt-5">
                <span>From</span> <DatePicker showTimeInput dateFormat={DATE_FORMAT}
                    maxDate={toDate} selected={fromDate} onChange={(date: Date) => { setFromDate(date) }} />
                <span>to</span> <DatePicker showTimeInput dateFormat={DATE_FORMAT}
                    selected={toDate} onChange={(date: Date) => { setToDate(date) }} />
            </div>
            <div className="col-lg-4 offset-4 mt-5">
                <button className="btn btn-primary" onClick={searchNews}>Search</button>
            </div>
        </div>
    </div>
}


function Loader() {
    return <div className="spinner-border" role="status">
        {/* <span className="sr-only">Loading...</span> */}
    </div>

}