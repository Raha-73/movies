import { Fragment } from "react";
import { Link } from "react-router-dom";


import "./style.css";

export default function HomePage() {
    return (
        <Fragment>
            <div className="error-404 flex justify-center items-center">
                <div
                    className="background-img-404"
                   
                ></div>
                <div className="content flex">
                    <h1 className="num-error">404</h1>
                    <div className="text">The page you are looking for is</div>
                    <div className="text text-2">not available!</div>
                    <button>
                        <Link to="/">Go Back</Link>
                    </button>
                    {/* <Link to="/about-us">About Us</Link> */}
                </div>
            </div>
        </Fragment>
    );
}


// فونت اصلاح بشه
