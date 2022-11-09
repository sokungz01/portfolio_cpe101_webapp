import { Navbar } from './Components/Navbar'
import { Myself } from './Components/Myself'
import { Information } from './Components/Information'
export function App() {
  return (

    <div>
      <Navbar />
      <div className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white pt-32">
        <Myself/>
        <Information/>
      </div>
      <div className="h-screen bg-gradient-to-b from-slate-800 to-slate-700 flex flex-col text-white">
      </div>
    </div>
    
  );
}
