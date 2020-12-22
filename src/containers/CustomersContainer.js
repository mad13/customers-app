import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AppFrame from '../components/AppFrame'
import CustomersActions from '../components/CustomersActions'
import CustomersList from '../components/CustomersList'
import { fetchCustomers } from '../actions/fetchCustomers'
import { getCustomers } from '../selectors/customers'

const customers = [
    {
        "dni": "27000000",
        "name": "Juan Perez",
        "age": 37
    },
    {
        "dni": "30000000",
        "name": "Otro",
        "age": 35
    }, {
        "dni": "33000000",
        "name": "Luis Martinez",
        "age": 32
    }
]

export class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers()
    }

    handleAddNew = () => {
        this.props.history.push('customers/new')
    }

    renderBody = customers => (
        <div>
            <CustomersList
                customers={customers}
                urlPath={'customers/'} >
            </CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}> Nuevo Cliente</button>
            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'}
                    body={this.renderBody(this.props.customers)}
                ></AppFrame>
            </div>
        )
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
}

CustomersContainer.defaultProps = {
    customers: []
}


const mapStateToProps = state => ({
    customers: getCustomers(state)
})

export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer))
