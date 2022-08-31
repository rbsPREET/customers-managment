import { Link } from 'react-router-dom'
import { Customer } from '../../types'

type CustomerCardProps = {
  customer: Customer
}

const CustomerCard = ({ customer }: CustomerCardProps) => {
  return (
    <Link to={`/customers/${customer._id}`}>
      <div
        className={`col-span-1 flex flex-col text-center rounded-lg shadow cursor-pointer transform transition-all duration-500
            ${
              customer.gender === 'M'
                ? 'bg-blue-200 hover:scale-105'
                : 'bg-pink-200 hover:scale-105'
            }`}
      >
        <div className='flex-1 flex flex-col items-center p-10'>
          <img
            src={customer.profileImage}
            alt='profile'
            className={`w-14 h-14 border-2 object-cover rounded-full ${
              customer.gender === 'M' ? 'border-blue-300' : 'border-pink-300'
            }`}
          />
          <h3 className='mt-2'>
            {customer.name}&nbsp;{customer.surname}
          </h3>
          <div className='mt-3 flex items-center justify-between w-full'>
            <div className='flex flex-col'>
              <span className='text-base'>Appointments</span>
              <span className='text-sm text-gray-500'>2</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-base'>Last Visit</span>
              <span className='text-sm text-gray-500'>18/08/22</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CustomerCard
