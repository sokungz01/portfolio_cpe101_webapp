import { Navbar } from './Components/Navbar'
import { Myself } from './Components/Myself'
import { Information } from './Components/Information'
import { Competitions } from './Components/Competitions';
export function App() {
  return (

    <div>
      <Navbar />
      <div className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white pt-32">
        <Myself/>
        <Information/>
      </div>
      <div className="h-screen bg-gradient-to-b from-slate-800 to-slate-800 flex flex-col text-white"></div>
      <div className="h-screen bg-gradient-to-b from-slate-800 to-slate-700 flex flex-col text-white">
        <Competitions/>
      </div>
      <div className="h-screen bg-gradient-to-b from-slate-700 to-slate-700 flex flex-col text-white"></div>
    </div>
    
  );
}
