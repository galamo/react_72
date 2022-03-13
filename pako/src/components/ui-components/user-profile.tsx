import react, { useRef } from "react"


export function UserProfile(props: { userName?: string, save: Function }) {
    const inputRef: any = useRef()
    return <div className="container">
        <div className="row col-6">
            User Name: <input type={"text"} ref={inputRef} />
            <button className="btn btn-primary" onClick={() => {
                const currentUser: string = inputRef?.current?.value
                props.save(currentUser)
            }}  > Save Profile </button>
        </div>
    </div>
}