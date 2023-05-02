import React, {Fragment} from 'react';
import PreScreen from './components/UI/PreScreen/PreScreen';
import Login from './components/UI/LoginPage/Login';
import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

function App() {
  const loginStatus = useSelector((state) => state.login.loggedIn);
  const loginProcess = useSelector((state) => state.login.loginProcess);


  const router = createBrowserRouter([
    { 
      path: '/',
      element: <PreScreen />
    },
    {
      path: '/loginform',
      element: <Login />
    }
  ]);

  return (
/*  <Fragment>
    {!loginStatus && !loginProcess &&    
      <div>
        <PreScreen />
      </div>  
    }
    {
      loginProcess && <Login/>
    } 
    </Fragment> */
    
    <RouterProvider router={router}/>
  );
}

export default App;
