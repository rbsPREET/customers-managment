import { ButtonHTMLAttributes, ReactNode } from 'react'
import Button from './'

interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  [props: string]: any
}

const PrimaryButton = ({
  children,
  disabled = false,
  loading = false,
  ...props
}: IPrimaryButtonProps) => {
  const defaultClassNames = 'bg-primary/80 text-white hover:bg-primary'
  const disabledlCassNames = 'bg-gray-300 text-gray-500 cursor-not-allowed'
  const loadingClassNames = 'bg-primary/40 opacity-70 focus:cursor-not-allowed'
  return (
    <Button
      className={`${loading ? loadingClassNames : disabled ? disabledlCassNames : defaultClassNames}
            flex items-center justify-center w-32 h-12 border border-primary rounded-sm`}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
