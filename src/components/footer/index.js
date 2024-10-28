import "./style.css"
export default function Footer() {
    return(
        <div className="footer">
            <ul className="footer-menu">
                <li>
                    <Link to="#">About Us</Link>
                </li>
                <li>
                    <Link to="#">Contacts</Link>
                </li>
                <li>
                    <Link to="#">Privacy policy</Link>
                </li>
            </ul>
        </div>
    )
}