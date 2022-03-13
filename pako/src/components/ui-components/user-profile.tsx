import react, { useRef, useEffect, useState } from "react"


export function UserProfile(props: { userName?: string, save: Function }) {
    const [isSaveDisabled, setSaveDisabled] = useState(false)
    // console.log("user profile component render")
    // const [currentUserName, setCurrentUserName] = useState<string>("")
    const inputRef: any = useRef()
    useEffect(() => {
        // @ts-ignore
        // setCurrentUserName(props?.userName)
        inputRef.current.value = props.userName
    }, [])

    return <div className="container">
        <div className="row col-6">
            User Name: <input type={"text"} ref={inputRef} onChange={(e) => {
                if (e.target.value.length > 15) {
                    setSaveDisabled(true)
                } else {
                    setSaveDisabled(false)
                }
            }} />
            <button disabled={isSaveDisabled} className="btn btn-primary" onClick={() => {
                const currentUser: string = inputRef?.current?.value
                props.save(currentUser)
            }}  > Save Profile </button>
        </div>
    </div>
}