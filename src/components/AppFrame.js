import React from 'react'
import PropTypes from 'prop-types'
import AppHeader from './AppHeader'

function AppFrame({ header, body }) {
    return (
        <div className="app-frame">
            <AppHeader title={header}></AppHeader>
            <div>{body}</div>
            <div>Aplication Simple de Ejemplo</div>
        </div>
    )
}

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
}

export default AppFrame

