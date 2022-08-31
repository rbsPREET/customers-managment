import { useState } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import LoginButton from '../features/authentication/buttons/login'
import { User } from '../types'
import PrimaryButton from '../ui/button/primary'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User>()

  console.log(user)

  return (
    <PageLayout title={'Barber Shop - by John Doe'}>
      <p>Statistics</p>
      {!user ? (
        <LoginButton loading={loading} setLoading={setLoading} setUser={setUser} />
      ) : (
        <p>Hello {user.name}</p>
      )}
    </PageLayout>
  )
}

export default Home
