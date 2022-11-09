export const Myself = () => {
    return(
        <>  
        <section id="home-section" className="h-full" >
                <div className="grid grid-cols-2 mt-16" >
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
                                <button className="ml-3 btn bg-sky-400 rounded-2xl text-black mt-2 px-4 py-2 hover:bg-sky-600 hover:text-gray-300 hover:border-solid hover:border hover:border-white">
                                <a href="https://drive.google.com/file/d/1Va08_YQLUiwsPbmo-rXmxXgIsipQP9jL/view?usp=sharing" target="_blank"> View portfolio</a>
                                </button>
                            </div>
                            <p className="text-gray-700 text-lg mt-3 italic"> */ </p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="ml-16 flex justify-between">
                            <a className="block relative">
                                <img src="../myself_pic.png" className="object-cover h-80 w-100 rounded-tl-full rounded-tr-full bg-gray-700" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}