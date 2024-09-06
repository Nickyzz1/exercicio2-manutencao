import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App'
import Graph from './graph'
// qundo vc tem função é sem {}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: '/graph',
    element: <Graph/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

