import { Myself } from "../Components/Myself";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export const Homepage = () =>{
    return(
        <div>
            <Navbar/>
            <div className="bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white pt-32 pb-32"><Myself/></div>
            <Footer/>
        </div>
    );
}