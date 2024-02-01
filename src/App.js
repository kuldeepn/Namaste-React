import ReactDOM from "react-dom/client";
import React, { Suspense, lazy } from "react";
import "../index.css";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestMenu from "./component/RestMenu";
import LoginForm from "./component/LoginForm";
import Shimmer from "./component/Shimmer";
import { useEffect } from "react";
import UserContext from "./utils/UserContext";
import { useState } from "react";

const About = lazy(() => import("./component/About"));

const AppLayout = () => {
  [newName, setNewName] = useState();

  useEffect(() => {
    const data = {
      name: "Teju",
    };
    setNewName(data.name);
  }, []);

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
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
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
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
