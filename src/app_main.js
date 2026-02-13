import React,{ lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Restaurantcard from "./components/Restaurantcard";
import resObj from "./utils/MockData";
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./components/RestaurantMenu";


const About = lazy(() => import("./About"));


const AppLayout = () => {
  return (
    <div className="app">
       <Header />
      <Outlet/>
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
  path:"/",
  element: <AppLayout/>,

  children:[
    {
       path:"/",
       element: <Body/>,
    },
    {
    path: "/about",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <About />
      </Suspense>
    ),
  },
   {
    path: "/contact",
    element: <Contact />,
  },
   {
     path:"/restaurants/:resId",
     element:<RestaurantMenu/>
    }
  ]

 },
]);


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={appRouter} />);









