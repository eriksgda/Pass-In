import { AttendeeList } from "./components/attendee-list"
import { Header } from "./components/header"


export function App() {
  return (
    <div className="max-w-[1212px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  )

}

