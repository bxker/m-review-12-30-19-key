import React from 'react';
import './App.css';
// import Dashboard from './Components/Dashboard';
import routes from './routes'
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
