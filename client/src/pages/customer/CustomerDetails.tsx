import { useParams } from 'react-router-dom'
import PageLayout from '../../components/layouts/PageLayout'
import useGetCustomer from '../../hooks/useGetCustomer'
import CustomerInfo from '../../components/customer/CustomerInfo'
import { useState } from 'react'
import CustomerEdit from '../../components/customer/CustomerEdit'

const CustomerDetails = () => {
  const { id } = useParams()
  const { customer, loading, error } = useGetCustomer(id)
  const [isEdit, setIsEdit] = useState(false)
  console.log(isEdit)

  if (loading) return <p>Loading...</p>
  if (error) return <p>ERROR: Please try again later</p>

  return customer ? (
    <PageLayout title={customer.name + ' ' + customer.surname}>
      <button
        onClick={() => setIsEdit(!isEdit)}
        className='px-3 py-2 uppercase border border-primary hover:bg-primary hover:text-white rounded-md shadow-sm'
      >
        {isEdit ? 'Save' : 'Edit'}
      </button>
      {isEdit ? <CustomerEdit customer={customer} /> : <CustomerInfo customer={customer} />}
    </PageLayout>
  ) : (
    <p>Something went wrong...</p>
  )
}

export default CustomerDetails
