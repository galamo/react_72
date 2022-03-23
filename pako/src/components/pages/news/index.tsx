import React, { useEffect, useState } from "react"
import axios from "axios"
import { Search } from "../../ui-components/search"

import moment from "moment"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getApiDateFormat } from "./utils";
import { Link } from "react-router-dom";
import { API_KEY, TOP_HEADLINES_API_URL } from "../../../settings";
import { WithLoading } from "../../ui-components/with-loading"
const DATE_FORMAT = "yyyy-MM-dd"
const NEWS_API_URL = `https://newsapi.org/v2/everything`

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
    const [currentPage, setCurrentPage] = useState(1)
    const PAGE_SIZE = 10

    useEffect(() => {
        async function getTopHeadlines() {
            try {
                setIsLoading(true)
                await new Promise((resolve: any) => {
                    setTimeout(() => {
                        setArticles([{ title: "test" }])
                        // simulate api result
                        resolve()
                    }, 3000);
                })
                // const result = await axios.get(`${TOP_HEADLINES_API_URL}?country=${country}&apiKey=${API_KEY}`)
                // const { data } = result
                // const { totalResults, articles } = data
                // setGroupState(articles, totalResults)
            } catch {
                alert("Something went wrong")
            } finally {
                setIsLoading(false)
            }
        }
        if (country) {
            console.log("country: ", country)
            getTopHeadlines()
        }
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

    function setGroupState(newArticles: Array<any>, totalResults: number) {
        setArticles([...articles, ...newArticles]) //[1,2,3,4,5,6,7]
        setTotalResults(totalResults)
        setIsLoading(false)
    }
    // Trasnlation feature could be written in another file
    const T = {
        en: {
            bestNewsEver: {
                value: "Best news ever"
            }
        }, ru: {
            bestNewsEver: {
                value: "Лучшие новости"
            }
        }
    }
    const currentLanguate = "en"
    console.log(isLoading, "isLoading")
    const showSearchHeader = !!search.length || !!country
    return <div className="container">
        <div className="row">
            <h1> {T[currentLanguate].bestNewsEver.value}  {new Date().toString()} </h1>
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
            <div className="row">
                <div className="col-lg-1  mt-5">
                    <button className="btn btn-primary" onClick={searchNews}>Search</button>
                </div>
                <div className="col-lg-2  mt-5">
                    <button className="btn btn-primary" onClick={() => { setCurrentPage(currentPage + 1) }}>Load more ({currentPage})</button>
                </div>
            </div>
            <WithLoading isLoading={isLoading}>
                <div>
                    {articles?.map((article: any) =>
                        <h2><Link to={`/news-image/${btoa(article.urlToImage)}`}> {article.title}  </Link></h2>
                    )}
                </div>
            </WithLoading>
        </div>
    </div>
}


function Loader() {
    return <div className="spinner-border" role="status">
        {/* <span className="sr-only">Loading...</span> */}
    </div>

}