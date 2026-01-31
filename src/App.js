import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import SolarMenu from "./components/SolarMenu";
import Instamart from  "./components/Instamart";
import Profile from "./components/Profile";
const AppLayout = () => {
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
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
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
       element: <Instamart/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
