import React, {Fragment} from 'react';
import PreScreen from './components/UI/PreScreen/PreScreen';
import Login from './components/UI/LoginPage/Login';
import { useSelector } from 'react-redux';

function App() {
  const loginStatus = useSelector((state) => state.login.loggedIn);
  const loginProcess = useSelector((state) => state.login.loginProcess);

  return (
    <Fragment>
    {!loginStatus && !loginProcess &&    
      <div>
        <PreScreen />
      </div>  
    }
    {
      loginProcess && <Login/>
    } 
    </Fragment>
  );
}

export default App;
