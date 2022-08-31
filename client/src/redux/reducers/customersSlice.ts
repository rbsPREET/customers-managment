import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Customer } from '../../types'
import { customersData } from '../../data/customers'

export interface CustomersState {
    customers: Customer[]
}

const initialState: CustomersState = {
    customers: customersData,
}

export const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.customers.push(action.payload)
        },
        removeCustomer: (state, action: PayloadAction<string>) => {
            state.customers = state.customers.filter((customer) => customer._id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addCustomer, removeCustomer } = customersSlice.actions

export default customersSlice.reducer