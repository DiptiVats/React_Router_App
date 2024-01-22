import { Link } from "react-router-dom";
const PRODUCT = [
  { id: "p1", title: "proudct 1" },
  { id: "p2", title: "proudct 2" },
  { id: "p3", title: "proudct 3" },
];
export default function Product() {
  return (
    <>
      <h1>The Products page</h1>
      <ul>
        {PRODUCT.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id} relative="">
              {prod.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
