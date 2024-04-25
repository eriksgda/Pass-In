import { ComponentProps } from "react"

interface NavProps extends ComponentProps<'a'>{
  children: string
}

export function NavLinks (props: NavProps){
  return (
    <a { ...props } className='font-medium text-sm'>
      {props.children}
    </a>
  )
}