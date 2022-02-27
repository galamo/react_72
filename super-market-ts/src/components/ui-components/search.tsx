import React from "react"

export function Search(props: { onInputChange?: Function }) {
    return (
        <input onChange={({ target }) => {
            // set your state to contain the target.value
            const { value } = target;
            props.onInputChange && props.onInputChange(value)
        }}
            type="text"
            className="form-control"
            placeholder="search"
            aria-label="Username"
            aria-describedby="basic-addon1" />
    )
}