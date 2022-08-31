import { useEffect, useState } from 'react'
import { Customer } from '../types'
import { customersData } from '../data/customers'

const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchCustomers = () => {
      try {
        setCustomers(customersData)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
    return fetchCustomers()
  }, [customers])

  return { customers, loading, error }
}

export default useCustomers
