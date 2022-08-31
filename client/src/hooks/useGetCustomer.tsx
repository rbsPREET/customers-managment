import { useEffect, useState } from 'react'
import { Customer } from '../types'
import { customersData } from '../data/customers'
import { useNavigate } from 'react-router-dom'

const useGetCustomer = (id: string | undefined) => {
  const [customer, setCustomer] = useState<Customer>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const navigateUrlOnFailure = '/customers'

  useEffect(() => {
    setLoading(true)
    const fetchCustomer = () => {
      try {
        const customerData = customersData.find((customer) => customer._id === id)
        if (customerData === undefined) {
          navigate(navigateUrlOnFailure)
        } else {
          setCustomer(customerData)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
    return fetchCustomer()
  }, [])

  return { customer, loading, error }
}

export default useGetCustomer
