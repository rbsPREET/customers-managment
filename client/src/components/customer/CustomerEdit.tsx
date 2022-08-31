import { BsCamera } from 'react-icons/bs'
import { Customer } from '../../types'

interface ICustomerEdit {
  customer: Customer
}

const CustomerEdit = ({ customer }: ICustomerEdit) => {
  return (
    <div className='flex flex-col w-full items-center justify-center mt-5'>
      <div className='flex flex-col justify-center items-center gap-4 w-full md:w-1/2'>
        <div className='relative w-fit'>
          <label className='absolute right-1 -top-2 border-2 cursor-pointer border-white shadow-lg flex justify-center items-center bg-primary w-10 h-10 rounded-full'>
            <BsCamera className='absolute text-white' />
            <input type='file' name='profileImage' style={{ display: 'none' }}></input>
          </label>
          <img
            src={customer.profileImage}
            alt={customer.name}
            className='w-32 h-32 border-2 border-white shadow-md object-cover rounded-full'
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label className='text-gray-500'>Name</label>
          <input
            value={customer.name}
            onChange={() => {}}
            type={'text'}
            className='border-2 border-gray-300 rounded-sm p-2'
          />
        </div>
        <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between w-full'>
          <div className='flex flex-col gap-2 md:w-2/5'>
            <label className='text-gray-500'>Email</label>
            <input
              value={customer.email}
              type={'email'}
              placeholder={'you@example.com'}
              className='border-2 border-gray-300 rounded-sm p-2'
            />
          </div>
          <div className='flex flex-col gap-2 md:w-2/5'>
            <label className='text-gray-500'>Phone</label>
            <input
              value={customer.telephone}
              type={'tel'}
              className='border-2 border-gray-300 rounded-sm p-2'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerEdit
