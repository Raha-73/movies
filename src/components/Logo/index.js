import { Fragment } from "react";
import logo from '../assets/images/logo.svg';




export default function Logo() {
  return (
    <Fragment>
        <img src={require('./assets/images/logo.svg').default} alt="Logo" />
        <div>FLIX</div>
    </Fragment>
)
}