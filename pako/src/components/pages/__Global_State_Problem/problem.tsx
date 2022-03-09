import React, { useState } from "react"

export function ParentProblem() {
    const [n, setN] = useState(1)
    console.log("render me")
    return <div>
        <button className="btn btn-primary"
            onClick={() => { setN(n + 1) }}>
            Increase N GGGParent! </button>
        <ChildA n={n} />
        <ChildB />
    </div>
}

function ChildA(props: { n: number }) {
    console.log("render me")
    return <div>
        <GrandChildOfA n={props.n} />
    </div>
}

function GrandChildOfA(props: { n: number }) {
    console.log("render me")
    return <div><Grand2ChildOfA n={props.n} /></div>
}

function Grand2ChildOfA(props: { n: number }) {
    console.log("render me")
    return <h1>This number from GGGParent (Dec): {props.n} </h1>
}

function ChildB() {
    console.log("render me")
    return <div> </div>
}

