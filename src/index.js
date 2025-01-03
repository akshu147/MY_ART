import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './assets/pages/Contact';
import Login from './assets/pages/Login';
// import Router from 'router';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
