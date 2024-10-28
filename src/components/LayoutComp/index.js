import { Fragment } from "react";
import  Header  from "../../components/header/index.js";

export default function LayoutComp({children}) {
    return(
        <Fragment>
       <Header/>
        <div>
            {children}
        </div>
        <div className="layout-bg">
            FOOTER
        </div>
        </Fragment>
    )
}