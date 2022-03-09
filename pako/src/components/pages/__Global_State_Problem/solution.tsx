import React, { createContext, useContext, useState } from "react"

interface IContext {
    n: number,
    user: string | null
}

const DataContext = createContext<IContext>({ n: 0, user: null })

export function ParentSolution() {
    const [n, setN] = useState(1)
    const [user, setUser] = useState("gal")

    return (
        <DataContext.Provider value={{ user, n }}>
            <div>
                <button onClick={() => { setN(n + 1) }}
                    className="btn btn-primary">
                    Increase N GGGParent! </button>
                <input onChange={({ target }) => { setUser(target.value) }} />
                <ChildA />
                <ChildB />
            </div>
        </DataContext.Provider>
    )
}

function ChildA() {
    console.log("render me")
    return <div>
        <GrandChildOfA />
    </div>
}

function GrandChildOfA() {
    console.log("render me")
    return <div><Grand2ChildOfA /></div>
}

function Grand2ChildOfA() {
    console.log("render me")
    const context: IContext = useContext(DataContext)

    return <h1>This number from GGGParent (Dec): {context.n}  {context?.user} </h1>
}

function ChildB() {
    return <div> </div>
}

