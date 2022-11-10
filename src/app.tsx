import { Navbar } from './Components/Navbar'
import { Myself } from './Components/Myself'
import { Information } from './Components/Information'
import { Competitions } from './Components/Competitions';
import { Activities } from './Components/Activities';
import { Works } from './Components/Works';
import { Footer } from './Components/Footer';
export function App() {
  return (

    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white pt-32 pb-32"><Myself/></div>
      <div className="bg-gradient-to-b from-slate-800 to-slate-800 flex flex-col text-white"><Information/></div>
      <div className="bg-gradient-to-b from-slate-800 to-slate-700 flex flex-col text-white "><Competitions/></div>
      <div className="bg-gradient-to-b from-slate-700 to-slate-700 flex flex-col text-white "><Activities/></div>
      <div className="bg-gradient-to-b from-slate-700 to-slate-600 flex flex-col text-white "><Works/></div>
      <Footer/>
    </div>
    
  );
}
