import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Error from './component/Error/Error';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import UserPost from './component/UserPost/UserPost';
import AllProducts from './component/AllProducts/AllProducts';
import Contact from './component/Contact/Contact';
import AuthProvider from './component/AuthProvider/AuthProvider';
import PrivateRoute from './component/PrivetRoute/PrivetRoute';
import ProductDetails from './component/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/userpost',
        element: <PrivateRoute><UserPost></UserPost></PrivateRoute>
      },
      {
        path: '/allproducts',
        element: <AllProducts></AllProducts>,
        loader: () => fetch(`https://royal-tech-pmbh.onrender.com/users`)
      },
      {
        path: '/contact',
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path: '/productdetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch(`https://royal-tech-pmbh.onrender.com/users`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
