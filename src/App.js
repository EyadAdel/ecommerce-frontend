import { RouterProvider, createBrowserRouter } from "react-router-dom"; // make us define our routs
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  let { isUser } = useSelector((state) => state.user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products/:category",
      element: <ProductList />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/success",
      element: <Success />,
    },
    {
      path: "/login",
      element: isUser ? <Home /> : <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
