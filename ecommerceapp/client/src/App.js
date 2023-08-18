import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Shop from './components/Shop'
import Root from './Root';
import Featured from './components/Featured'
import Recommended from './components/Recommended'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'


const router = createBrowserRouter([
    { 
      path: '/', 
      element: <Root />,
      children: [
          { path: '/', element: <Home />},
          { path: '/home', element: <Home />},
          { path: '/shop', element: <Shop />},
          { path: '/featured', element: <Featured />},
          { path: '/recommended', element: <Recommended />},
          { path: '/cart', element: <Cart />},
      ],
        
    },
    {
      path: '/login', 
      element: <Login />,
    },
    {
      path: '/register', 
      element: <Register />,
    }


]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App