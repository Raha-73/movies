import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";

export default function Movie() {
  const { id } = useParams();
  return (
    <div>
      <Layout>
        <div>salam az movie detail page</div>
        <div>page id is: {id}</div>
      </Layout>
    </div>
  );
}
