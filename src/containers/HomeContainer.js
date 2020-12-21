import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import CustomersActions from './../components/CustomersActions'

class HomeContainer extends Component {

    handleOnCLick = () => {
        console.log("handleOnCLick")

        this.props.history.push('/customers')
    }

    render() {
        return (
            <div>
                <AppFrame header='Home'
                    body={
                        <div>
                            Esta es la pantall inicial
                      <CustomersActions>
                                <button onClick={this.handleOnCLick}>
                                    Listado Clientes
                                </button>
                            </CustomersActions>
                        </div>
                    }
                ></AppFrame>
            </div>
        )
    }
}

HomeContainer.propTypes = {
}

/* para que se pueda llamar a traves de una funcion el componente debe ser 
  decorado con "withRouter" de react-router-dom */
export default withRouter(HomeContainer)