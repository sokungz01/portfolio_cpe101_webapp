import { Navbar } from './Components/Navbar'
import { Myself } from './Components/Myself'
import { Information } from './Components/Information'
export function App() {
  return (

    <div>
      <Navbar />
      <header className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white p-20">
        <Myself/>
        <Information/>
      </header>
    </div>
    
  );
}
