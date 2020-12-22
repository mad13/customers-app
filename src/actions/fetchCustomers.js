import { FETCH_CUSTOMERS } from './../constants'
import { createAction } from 'redux-actions'
import { apiGet } from '../api'
import { urlCustomers } from '../api/urls'

export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers))

/* --- con lo de arriba falla

const customers = [
    {
        "dni": "27000001",
        "name": "Juan Perezzzz",
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

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers)
*/