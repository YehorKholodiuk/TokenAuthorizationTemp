import React, { useState } from 'react';
import { BrowserRouter, Route, Switch , Routes} from 'react-router-dom';

import './App.css';
import Dashboard from './Dashboard';
import Login from './Login/Login';
import Preferences from './Preferences';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>


            <Route path="/preferences" element={<Preferences/>}/>

          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

