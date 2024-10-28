import { Fragment } from "react";
// import './style.css'

export default function LayoutComp({children}) {
    return(
        <Fragment>
        <div className="layout-bg">
            HEADER
        </div>
        <div>
            {children}
        </div>
        <div className="layout-bg">
            FOOTER
        </div>
        </Fragment>
    )
}