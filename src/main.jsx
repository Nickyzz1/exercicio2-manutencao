import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App'
import Products from './products'
import Graph from './graph'
import Api from './Api'
import Map from './Map'
// qundo vc tem função é sem {}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: '/Graph',
    element: <Graph/>
  },
  {
    path: '/Products',
    element: <Products/>
  },
  {
    path: '/Api',
    element: <Api/>
  },
  {
    path: '/Map',
    element: <Map/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





