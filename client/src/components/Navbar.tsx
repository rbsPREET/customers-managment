import { Link } from 'react-router-dom'
import WebsiteIcon from '../assets/web-icon.svg'
import DarkModeSun from '../assets/darkmode-sun.png'
import DarkModeMoon from '../assets/darkmode-moon.png'
import { useState } from 'react'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className='container mx-auto fixed top-0'>
      <div className='bg-transparent h-24 flex justify-between items-center'>
        <div className='flex items-center gap-7'>
          <Link to='/' className='flex-none'>
            <img src={WebsiteIcon} alt='website' className='w-16 h-16' />
          </Link>
          <ul className='flex items-center gap-5 uppercase'>
            <Link to='/appointments' className='btn-link'>
              <li>Appointments</li>
            </Link>
            <Link to='/customers' className='btn-link'>
              <li>Customers</li>
            </Link>
          </ul>
        </div>
        <div className=''>
          <img
            src={isDarkMode ? DarkModeSun : DarkModeMoon}
            alt='darkmode'
            onClick={() => setIsDarkMode(!isDarkMode)}
            className='cursor-pointer w-8 h-8'
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
