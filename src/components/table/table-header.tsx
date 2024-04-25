import { ComponentProps } from "react";

interface TableHProps extends ComponentProps<'th'>{
}

export function TableHeader(props: TableHProps){
  return (
    <th className='py-3 px-4 text-sm font-semibold text-left'  { ...props } />
  )
}