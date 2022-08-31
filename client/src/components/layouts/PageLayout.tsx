import React, { ReactNode } from 'react'
import ButtonLink from '../../utils/ButtonLink'

type PageLayoutProps = {
  children: ReactNode
  title: string
  buttonLink?: string
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, buttonLink }) => {
  return (
    <div className='py-3 flex flex-col items-center md:items-start gap-5'>
      <div className='relative flex items-center justify-between w-full'>
        <h3 className='text-primary text-3xl underline underline-offset-8 uppercase'>{title}</h3>
        {buttonLink && <ButtonLink route={buttonLink}>Create</ButtonLink>}
      </div>
      {children}
    </div>
  )
}

export default PageLayout
