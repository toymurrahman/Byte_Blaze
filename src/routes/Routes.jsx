import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import Bookmarks from "../components/Bookmarks/Bookmarks";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: "/blogs",
          element: <Blogs/>,
        },
        {
          path: "/bookmarks",
          element: <Bookmarks/>,
        },
      ]
    },
  
  ]);