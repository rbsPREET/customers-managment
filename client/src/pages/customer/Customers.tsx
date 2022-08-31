import CustomerCard from '../../components/customer/CustomerCard'
import PageLayout from '../../components/layouts/PageLayout'
import SearchBar from '../../components/SearchBar'
import useCustomers from '../../hooks/useCustomers'
import { Customer } from '../../types'

const Customers = () => {
  const { customers, loading, error } = useCustomers()

  return (
    <PageLayout title={'Customers'} buttonLink={'customers/create'}>
      <SearchBar />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 w-full'>
        {error && <span className='text-red-500 text-xl'>Error: Please refresh</span>}
        {loading ? (
          <span>Loading...</span>
        ) : (
          customers &&
          customers.map((customer: Customer) => {
            return <CustomerCard key={customer._id} customer={customer} />
          })
        )}
      </div>
    </PageLayout>
  )
}

export default Customers
