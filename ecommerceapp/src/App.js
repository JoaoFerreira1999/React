import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Shop from './components/Shop'
import Root from './Root';

const router = createBrowserRouter([
    { 
        path: '/', 
        element: <Root />,
        children: [
            { path: '/', element: <Home />},
            { path: '/home', element: <Home />},
            { path: '/shop', element: <Shop />},
            { path: '/featured', element: <Home />},
            { path: '/recommended', element: <Home />}
        ]
    },

]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App