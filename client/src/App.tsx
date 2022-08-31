import { Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Appointments from './pages/appointment/Appointments'
import CustomerCreation from './pages/customer/CustomerCreation'
import CustomerDetails from './pages/customer/CustomerDetails'
import Customers from './pages/customer/Customers'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/appointments' element={<Appointments />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/customers/:id' element={<CustomerDetails />} />
        <Route path='/customers/create' element={<CustomerCreation />} />
      </Route>
    </Routes>
  )
}

export default App
