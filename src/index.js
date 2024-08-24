import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CardProvider } from "../src/components/CardContext";
import App from "./App";
import "./index.css";
import CardDetails from "./pages/CardDetails";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/card/:id", element: <CardDetails /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardProvider>
      <RouterProvider router={router} />
    </CardProvider>
  </React.StrictMode>
);
