import React from "react"
import { Link } from "react-router-dom"
import css from "./style.module.css"
export interface ISource {
    category: string,
    country: string,
    description: string,
    id: string,
    language: string,
    name: string,
    url: string,
}

interface ITopHeadlinesList {
    sources: Array<ISource>
}
export function TopHeadlinesList(props: ITopHeadlinesList) {
    return <div>
        <ol className="list-group list-group-numbered">
            {props?.sources?.map((th: ISource) => {
                return (
                    <li key={th.id} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{th.name}</div>
                            {th.description}
                        </div>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{th.name}</div>
                            {th.category} {th.language}
                        </div>
                        <h1 className={css.clickable}>
                            <Link to={`/country/${th.country}`}>
                                <span className="badge bg-primary rounded-pill">{th.country}
                                </span>
                            </Link>
                        </h1>
                    </li>
                )
            })}
        </ol>
    </div>

}

// export class TopHeadlinesList extends React.Component<any, { isHeadline: boolean, selectedMarkIndex: number, selectedIncreaseFontIndex: number }> {
//     constructor(props: any) {
//         super(props)
//         this.state = { isHeadline: false, selectedMarkIndex: -1, selectedIncreaseFontIndex: -1 }
//     }
//     setSelectedIndex(index: number) {
//         this.setState({ ...this.state, selectedMarkIndex: index })
//     }
//     componentDidMount() {
//         console.log("execute ajax request!!! ")
//     }
//     componentDidUpdate() {
//         console.log("componentDidUpdate!!! ")
//     }
//     componentWillUnmount() {
//         // @ts-ignore
//         const result = window.confirm("Are you sure you want to leave this page?")
//         if (!result) window.location.href = "http://localhost:3000/top-headlines"
//     }
//     render(): React.ReactNode {
//         console.log(this.state)
//         return (<div>
//             <ol className="list-group list-group-numbered">
//                 {this.props?.sources?.map((th: ISource, index: number) => {
//                     return (
//                         <li key={th.id} className="list-group-item d-flex justify-content-between align-items-start">
//                             <div className="ms-2 me-auto">
//                                 <div
//                                     style={{ background: this.state.selectedMarkIndex === index ? "yellow" : "white" }}
//                                     onClick={() => { this.setSelectedIndex(index) }} className="fw-bold">{th.name}</div>
//                                 {th.description}
//                             </div>
//                             <div onClick={() => {
//                                 this.setState({ ...this.state, selectedIncreaseFontIndex: index })
//                             }} className="ms-2 me-auto" style={{ fontSize: this.state.selectedIncreaseFontIndex === index ? "40px" : "20px" }}>
//                                 <div className="fw-bold">{th.name}</div>
//                                 {th.category} {th.language}
//                             </div>
//                             <h1 className={css.clickable}>
//                                 <Link to={`/country/${th.country}`}>
//                                     <span className="badge bg-primary rounded-pill">{th.country}
//                                     </span>
//                                 </Link>
//                             </h1>
//                         </li>
//                     )
//                 })}
//             </ol>
//         </div >)
//     }
// }