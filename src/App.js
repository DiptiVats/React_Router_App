import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPages";
import ProductDetailPage from "./pages/ProductDetail";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "products", element: <Product /> },
        { path: "products/:productId", element: <ProductDetailPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
