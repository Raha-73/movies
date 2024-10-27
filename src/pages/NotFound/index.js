import { Link } from "react-router-dom"
export default function HomePage () {
    return(
        <div>
            <h1>ERROR 404</h1>
            <div>Not Found</div>
            {/* <Link to="/about-us">boro be about us</Link> */}
            <Link to="/">go to home page</Link>
        </div>
    )
}
