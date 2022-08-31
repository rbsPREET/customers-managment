import { Dispatch, ReactNode, SetStateAction } from 'react'
import { User } from '../../../types'
import PrimaryButton from '../../../ui/button/primary'
import SpinnerIcon from '../../../ui/icons/spinner'

interface ILoginProps {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  setUser: Dispatch<SetStateAction<User | undefined>>
}

const LoginButton = ({ loading, setLoading = () => {}, setUser = () => {} }: ILoginProps) => {
  return (
    <PrimaryButton
      loading={loading}
      onClick={(e) => {
        setLoading(true)
        setTimeout(() => {
          setUser({
            name: 'John',
            email: 'Cena',
          })
          setLoading(false)
        }, 3000)
      }}
    >
      <div className='flex items-center'>{loading ? <SpinnerIcon /> : <span>Login</span>}</div>
    </PrimaryButton>
  )
}

export default LoginButton
