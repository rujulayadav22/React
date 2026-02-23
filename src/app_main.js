import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";

const About = lazy(() => import("./About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Default User");

  useEffect(() => {
    const data = { name: "Rujula" };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={AppStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About/>
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact/> },
      { path: "/restaurants/:resId", 
        element: <RestaurantMenu /> },
        {
          path:"/cart",
          element:<Cart/>
        },
    ],
    },
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={appRouter} />);










