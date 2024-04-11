import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="max-w-[1250px] mx-auto py-4 flex flex-col gap-1">
      <Header/>
      <AttendeeList/>
    </div>
  )
}