import { Fragment } from "react";
import  Header  from "../../components/header/index.js";
import Footer from "../../components/Footer/index.js";

export default function LayoutComp({children}) {
    return(
        <Fragment>
       <Header/>
        <div>
            {children}
        </div>
        <Footer/>
        </Fragment>
    )
}