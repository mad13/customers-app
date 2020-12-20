import Component from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import './App.css';

function App(props) {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/customers">Customers</Link>
        </div>
        <div>
          <Link to="/customers/30000000">Customers 30.000.000</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
