import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './components/Layout/Main';
import Home from './components/Pages/Home/Home';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Blog from './components/Pages/Blog/Blog';
import AddToy from './components/Pages/AddToy/AddToy';
import AllToy from './components/Pages/AllToy/AllToy';
import ToyDetails from './components/Pages/ToyDetails/ToyDetails';
import PrivateRoute from './components/routes/PrivateRoute';
import '@smastrom/react-rating/style.css'
import MyToy from './components/Pages/MyToy/MyToy';
import Modal from './components/Pages/Modal/MyModal';
import UpdateData from './components/Pages/MyToy/UpdateData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'addToy',
        element: <PrivateRoute><AddToy /></PrivateRoute>
      },
      {
        path: 'allToy',
        element: <AllToy />
      },
      {
        path: 'toy/:id',
        element: <PrivateRoute><ToyDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-marketplace-server-gold.vercel.app/toy/${params.id}`)
      },
      {
        path: 'myToy',
        element: <PrivateRoute><MyToy /></PrivateRoute>
      },
      {
        path: 'modal',
        element: <Modal />
      },
      {
        path: 'dataUpdate/:id',
        element: <PrivateRoute><UpdateData /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-marketplace-server-gold.vercel.app/toy/${params.id}`)
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
