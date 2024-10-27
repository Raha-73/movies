import { Fragment } from "react"
import { Link } from "react-router-dom"
export default function PrivacyPolicy () {
    return(
        <Fragment>
            <div className="container">
            <h1>Privacy policy</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          <p>Many desktop publishing packages and <Link to="/">web page</Link> editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          <h3>Determination of personal information of users</h3>
          <p></p>
          <h3></h3>
          <p></p>
            <Link to="/">HOME</Link>
            </div>
        </Fragment>
    )
}
