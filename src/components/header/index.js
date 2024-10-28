import "./style.css"
export default function Header() {
    return(
        <div className="header">
            <Link to="#">HOME</Link>
            <Link to="#">Catalog</Link>
            <Link to="#">Pricing plan</Link>
            <Link to="#">Pages</Link>
        </div>
    )
}