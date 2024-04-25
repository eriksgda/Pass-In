import HeaderIcon from '../assets/icon-header.svg'
import { NavLinks } from './nav-links'

export function Header(){
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={HeaderIcon} alt="Ícone do cabeçalho" />
      
      <nav className='flex items-center gap-5'>
        <NavLinks href='\Eventos'>Eventos</NavLinks>
        <NavLinks href='\Participantes'>Participantes</NavLinks>
      </nav>
    </div>
  )
} 