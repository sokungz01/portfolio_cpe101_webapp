import { Competitions} from "../Components/Competitions";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export const CompetitionsPage = () =>{
    return(
        <div>
            <Navbar/>
            <div className="bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white pt-32 pb-32"><Competitions/></div>
            <Footer/>
        </div>
    );
}