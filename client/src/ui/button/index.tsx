import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  className?: string
  disabled?: boolean
  loading?: boolean
  [props: string]: any
}

const Button = ({
  children,
  onClick = () => {},
  className = '',
  disabled = false,
  loading = false,
  ...props
}: IButtonProps) => {
  const defaultClassNames = 'focus:cursor-pointer transition duration-200 shadow-md'
  return (
    <button
      onClick={(e) => !loading && !disabled && onClick(e)}
      className={`${defaultClassNames} ${className ? className : ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
