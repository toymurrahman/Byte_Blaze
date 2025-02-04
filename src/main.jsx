import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Bookmarks from './components/Bookmarks/Bookmarks.jsx';
import Layout from './Layout/Layout.jsx';

const router = createBrowserRouter([
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
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
 
  </StrictMode>,
)
