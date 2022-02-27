import React, { useEffect, useState } from "react"
import axios from "axios"
import { Search } from "../../ui-components/search"
const NEWS_API_URL = `https://newsapi.org/v2/everything`
const API_KEY = `0da596e18e3f4c5e81dc4c1e614e6017`
// const ?q=ukraine&apiKey=


export function NewsPage() {
    const initialArticles: Array<any> = []
    const [articles, setArticles] = useState(initialArticles)
    const [isLoading, setIsLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    const [search, setSearch] = useState("")
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

    function setGroupState(articles: Array<any>, totalResults: number) {
        setArticles(articles)
        setTotalResults(totalResults)
        setIsLoading(false)
    }

    const showSearchHeader = !!search.length
    return <div className="container">
        <div className="row">
            <h1> News Page </h1>
            {showSearchHeader && <h3> Total results for {search} is: {!isLoading ? totalResults : <Loader />} </h3>}
            <div className="col-lg-4 offset-4">
                <Search onInputChange={(value: string) => { setSearch(value) }} />
            </div>
        </div>
    </div>
}


function Loader() {
    return <div className="spinner-border" role="status">
        {/* <span className="sr-only">Loading...</span> */}
    </div>

}