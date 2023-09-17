import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import { HomeScreen } from "../Pages/HomeScreen";
import Hero from "../Pages/Hero";
import Home from "../Pages/Home";
import Features from "../Pages/Features";
import  Howit  from "../Pages/Howit";
import Layer  from "../Pages/Layer";
import ScreenShots from "../Pages/ScreenShot";
import Price from "../Pages/Price";
import Work from "../Pages/Work"
import Twitter from "../Pages/Twitter";
import Subtxt from "../Pages/Subtxt";
import Getin from "../Pages/GetIn";

const MainRouter = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [{
        index: true,
        element: <HomeScreen/>
    }]
},
  {
    path: "/hero",
    element: <Hero/>
  },

  {
    path: "/home",
    element: <Home/>
  },

  {
    path: "/features",
    element:<Features/>
  },

  {
    path: "/Layer",
    element: <Layer/>
  },

  {
    path: "/howit",
    element: <Howit/>
  },

  {
    path:"/Price",
    element: <Price/>
  },

  {
    path: "/screenshorts",
    element: <ScreenShots/>
  },

  {
    path: "/Work",
    element: <Work/>
  },

  {
    path: "/Twitter",
    element: <Twitter/>
  },

  {
    path: "/Sub",
    element: <Subtxt/>
  },

  {
    path: "Getin",
    element: <Getin/>
  }
])

export default MainRouter