import { Fragment } from "react";
import Header from "../../components/header/index.js";
import Footer from "../../components/footer/index.js";

export default function LayoutComp({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="pt-100 pb-160">{children}</div>
      <Footer />
    </Fragment>
  );
}
