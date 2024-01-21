import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <Product /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
