import { FETCH_CUSTOMERS } from './../constants'
import { createAction } from 'redux-actions'


const url = 'http://localhost:3001/customers'

const apiFecthCustomers = () => fetch(url).then(v => v.json())

export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiFecthCustomers)

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