'use client'
import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes, FC } from 'react'


export interface ButtonProps{
children:React.ReactNode
  isLoading?: boolean
}
  

const Button: FC<ButtonProps> = ({
   children,
   isLoading
}) => {
  return (
    <button
      className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
      disabled={isLoading}>
      {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
      {children}
    </button>
  )
}

export default Button






interface PersonInterface {
  age: number
  name: string
  job?: boolean
}

const Person: PersonInterface = {
  age: 14,
  name: 'John'
}