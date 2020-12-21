import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer'
import CustomersContainer from './containers/CustomersContainer'

class App extends Component {


  /* para que se pueda llamar a traves de una funcion el componente debe ser 
  decorado con "withRouter" de react-router-dom */
  renderHome = () => <HomeContainer />
  renderCustomerContainer = () => <h1> Customer Container</h1>
  renderCustomerListContainer = () => <h1> Customer List Container</h1>
  renderCustomerNewContainer = () => <h1> Customer New Container</h1>

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer} />
            <Route path="/customers/:dni" component={this.renderCustomerListContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
