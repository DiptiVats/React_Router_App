import { Link, useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <button onClick={navigateHandler}>click to go to product </button>
    </>
  );
}
