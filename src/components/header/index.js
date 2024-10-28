import { Link } from "react-router-dom"
import "./style.css"
import { Fragment } from "react"
export default function Header() {
    return(
        <Fragment>
            <div className="header justify-between container flex items-center">
                <div>
                    <img src="./assets/images/logo.svg"/>
                </div>
                <div className="header-links">
                    <Link className="header-link" to="#">HOME</Link>
                    <Link className="header-link" to="#">Catalog</Link>
                    <Link className="header-link" to="#">Pricing plan</Link>
                    <Link className="header-link" to="#">Pages</Link>
                </div>
                <div className="input-search">
                    <input className="search" placeholder="  search..."/>
                </div>
                <div className="nickname">Nickname</div>
            </div>
        </Fragment>
    )
}
