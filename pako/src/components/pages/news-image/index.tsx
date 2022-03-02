import React from "react"
import { useParams } from "react-router-dom"

export function NewsImage() {
    const params = useParams()
    const result = atob(params.image as string)
    return <div>
        <h1> The slected post is: {result} </h1>
        <img src={result} alt="" />
    </div>
}