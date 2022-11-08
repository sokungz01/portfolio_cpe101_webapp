
export const Information = () => {
    return(
        <>  
        <section id="information-section" className="h-full" >
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <div className="grid ml-32 mt-16">
                            
                            <p className="text-gray-700 text-lg mb-3 italic"> /* </p>
                            <p className="text-white text-4xl font-bold"> Panurut Sirinapaisan </p>
                            <div className="flex justify-start">
                                <p className="text-gray-300 mr-2"> Studying </p> 
                                <p className="text-white font-bold"> Computer Engineering </p> 
                            </div>
                            <p className="text-gray-300"> at King Mongkut's University of Technology Thonburi  </p>
                            <div className="justify-end">

                            </div>
                            <hr width="75%" className="mt-4"/>
                            <div>
                                <button className="btn bg-sky-400 rounded-2xl text-black mt-2 px-4 py-2 hover:bg-sky-600 hover:text-gray-300 hover:border-solid hover:border hover:border-white">
                                <a href="https://facebook.com/sokungz01" target="_blank"> Contact me</a>
                                </button>
                            </div>
                            <p className="text-gray-700 text-lg mt-3 italic"> */ </p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between">
                            <img src="../myself_pic.png" className="object-cover h-80 w-100 " style="overflow"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}