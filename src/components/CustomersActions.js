import React from 'react'
import PropTypes from 'prop-types'

const CustomersActions = ({ children }) => {
    return (
        <div className="customer-actions">
            <div>{children}</div>
        </div>
    )
}

const propTypes = {
    children: PropTypes.number.isRequired,
}

export default CustomersActions 
