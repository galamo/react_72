import React, { createContext, useContext, useState, useReducer } from "react"

interface IContext {
    n: number,
    user: string | null,
    dispatch?: Function
}
const intialState: IContext = { n: 0, user: null }
const DataContext = createContext<IContext>({ n: 0, user: null })
const reducer = (state: IContext, action: { name: string, payload?: any }) => {
    switch (action.name) {
        case "INCREAMENT_N":
            return { ...state, n: state.n + 1 }
        case "DECREMENT_N":
            return { ...state, n: state.n - 1 }
        default:
            return state
    }
}


export function ParentSolution() {
    // const [n, setN] = useState(1)
    const [user, setUser] = useState("gal")
    const [state, dispatch] = useReducer(reducer, intialState)

    return (
        <DataContext.Provider value={{ user, n: state.n, dispatch }}>
            <div>
                <button onClick={() => { dispatch({ name: "DECREMENT_N" }) }}
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
    const dispatcher = context?.dispatch as Function
    return <div>
        <h1>This number from GGGParent (Dec): {context.n}  {context?.user} </h1>
        <button onClick={() => { dispatcher({ name: "INCREAMENT_N" }) }}> Increment N From Decendant </button>
    </div>
}

function ChildB() {
    return <div> </div>
}

