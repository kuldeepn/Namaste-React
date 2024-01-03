import ReactDOM from "react-dom/client";
import React from "react";
import "../index.css";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestMenu from "./component/RestMenu";
import LoginForm from "./component/LoginForm";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restmenu/:resId",
        element: <RestMenu />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
