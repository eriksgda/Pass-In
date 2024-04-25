import { Search, MoreHorizontal, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { ChangeEvent, useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { attendees } from './data/attendees'


dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList() {
  const [search, setSearch] = useState('');
  const [page, setPage]= useState(1);

  const totalPages = Math.ceil(attendees.length / 7)

  function onSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function goToFirstPage() {
    setPage(1);
  }

  function goToLastPage() {
    setPage(totalPages);
  }

  function goToPreviousPage() {
    setPage(page - 1);
  }

  function goToNextPage() {
    setPage(page + 1);
  }
  
 
  return (
    <div className='flex flex-col gap-4'>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className='size-4 text-emerald-300' />
          <input onChange={onSearchInput} className='bg-transparent focus:ring-0 flex-1 outline-none border-0 p-0 text-sm' 
          type="text" placeholder="Buscar participante..." value={search}/>
        </div>
        {search}
      </div>


      <Table>
          <thead>
            <tr className='border-b border-white/10'>
              <TableHeader style={{ width: 48 }}>
                <input className="size-4 bg-black/20 rounded border border-white/10"type="checkbox" />
              </TableHeader>
              <TableHeader>Código</TableHeader>
              <TableHeader>Participantes</TableHeader>
              <TableHeader>Data de Inscrição</TableHeader>
              <TableHeader>Data do Check-in</TableHeader>
              <TableHeader style= {{ width: 64 }}></TableHeader>
            </tr>
           </thead>
           <tbody>
             {attendees.slice((page - 1) * 7, page * 7).map((attendee)=> {
               return (
                <TableRow key={attendee.id} >
                   <TableCell>
                     <input className="size-4 bg-black/20 rounded border border-white/10"type="checkbox" />
                   </TableCell>

                   <TableCell>{attendee.id}</TableCell>

                   <TableCell>
                     <div className='flex flex-col gap-1'>
                       <span className='font-semibold text-white'>{attendee.name}</span>
                       <span>{attendee.email}</span>
                     </div>
                   </TableCell>

                   <TableCell>{dayjs().to(attendee.createAt)}</TableCell>
                   <TableCell>{dayjs().to(attendee.createInAt)}</TableCell>

                   <TableCell>
                     <IconButton transparent                     className="bg-black/20 border border-white/10 rounded-md p-1.5">
                       <MoreHorizontal  className='size-4'/>
                     </IconButton>
                   </TableCell>
                   
                </TableRow>
               );
             })}
           </tbody>
           <tfoot>
             <tr>
               <TableCell colSpan={3}>
                 Mostrando 7 de {attendees.length} itens
               </TableCell>

               <TableCell className="text-right" colSpan={3}>
                 <div className='inline-flex items-center gap-8'>
                   <span>Página {page} de {totalPages}</span>
                   <div className='flex gap-1.5'>

                     <IconButton onClick={goToFirstPage} disabled={page === 1}>
                       <ChevronsLeft className='size-4'/>
                     </IconButton>
                     <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                       <ChevronLeft  className='size-4'/>
                     </IconButton>
                     <IconButton onClick={goToNextPage}
                    disabled={page === totalPages}>
                       <ChevronRight  className='size-4'/>
                     </IconButton>
                     <IconButton onClick={goToLastPage}
                    disabled={page === totalPages}>
                       <ChevronsRight  className='size-4'/>
                     </IconButton>

                   </div>
                 </div>
                </TableCell>
              </tr> 
            </tfoot>
        </Table>
    </div>
  )
}