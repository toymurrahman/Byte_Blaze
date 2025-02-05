import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import Bookmarks from "../components/Bookmarks/Bookmarks";
import Blog from "../components/Blog/Blog";
import Content from "../components/Content/Content";
import Author from "../components/Author/Author";


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
          loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
        },
        {
          path: '/blog/:id',
          element: <Blog/>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
              index: true,
              element: <Content/>,
              loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
              path: 'author',
              element: <Author />,
              loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        },
        {
          path: "/bookmarks",
          element: <Bookmarks/>,
        },
      ]
    },
  
  ]);