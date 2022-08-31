import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonLinkProps = {
  route: string
  children: ReactNode
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ route, children }) => {
  return (
    <Link to={`/${route}`}>
      <button className='btn'>{children}</button>
    </Link>
  )
}

export default ButtonLink
