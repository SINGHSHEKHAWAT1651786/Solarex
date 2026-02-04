import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React, {lazy, Suspense} from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Contact from "./components/Contact";
import Error from "./components/Error";
import SolarMenu from "./components/SolarMenu";

import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(()=> import ("./components/Instamart"));
const About = lazy(()=> import ("./components/About"));
const AppLayout = () => {
  const[user, setUser] = useState({
    name: "Govind Singh",
    email: " sample@gmail.com",
  })
 return(
<>
    <Header />
    <Outlet />
    <Footer />
  </>
 );
 
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Body user ={user} />,
      },
      {
        path: "about",
         element:(
        <Suspense fallback = {<h1>Loading...</h1>}><About/>
        </Suspense>
       ) ,
        children:[
          {
            path:"profile",
            element:<Profile/>,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
          {
        path: "/solar/:resId",
       element: <SolarMenu/>,
      },
         {
        path: "instamart",
       element:(
        <Suspense fallback = {<Shimmer/>}><Instamart/>
        </Suspense>
       ) , 
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
