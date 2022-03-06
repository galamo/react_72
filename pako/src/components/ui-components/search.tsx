import React, { useRef, useState } from "react"
export function Search(props: { onInputChange?: Function }) {
    const inputRef: any = useRef();
    return (
        <div>
            <button className="btn btn-warning" onClick={() => {
                inputRef.current.style.background = "blue"
            }} >focus</button>
            <input ref={inputRef} onChange={({ target }) => {
                // set your state to contain the target.value
                const { value } = target;
                props.onInputChange && props.onInputChange(value)
            }}
                type="text"
                className="form-control"
                placeholder="search"
                aria-label="Username"
                aria-describedby="basic-addon1" />
        </div >
    )
}