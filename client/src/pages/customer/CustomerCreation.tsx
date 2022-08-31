import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { addCustomer, removeCustomer } from "../../redux/reducers/customersSlice"
import { Customer } from "../../types"
import PrimaryButton from "../../ui/button/primary"


const CustomerCreation = () => {
  const customers = useAppSelector((state) => state.customers.customers)
  const dispatch = useAppDispatch()

  console.log(customers)

  const addNewCustomer = () => {
    const customerData: Customer = {
      _id: "15",
      email: "blabla@gmail.com",
      gender: "M",
      name: "brosky",
      profileImage: "",
      surname: "bob",
      telephone: "0562355672",
    }

    dispatch(addCustomer(customerData))
  }

  const removeCustomerFromList = (_id: string) => {
    dispatch(removeCustomer(_id))
  }

  return (
    <div>
      <h1>Customers Creation</h1>
      <PrimaryButton onClick={addNewCustomer}>
        Add Customer
      </PrimaryButton>
      <div className="flex flex-row flex-grow gap-3">
        {customers.map((customer) => (
          <div key={customer._id} className="border border-black p-3 my-2">
            <div className="">
              <p>{customer.name}</p>
            </div>
            <p>{customer.email}</p>
            <PrimaryButton className="px-3 py-2 bg-red-500" onClick={() => removeCustomerFromList(customer._id)}>Remove {customer.name}</PrimaryButton>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerCreation
