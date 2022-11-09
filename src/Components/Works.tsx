export const Works = () =>
{
    return(
        <section id="works-section" className="h-full" >
             <p className="text-3xl font-bold pl-20 pb-6 mt-32"> Works : </p>
             <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <div className="grid ml-16 mr-4">
                            <div class="p-5 mb-4 rounded-lg border bg-gray-800 border-gray-700">
                            <ol class="mt-3 divide-y divide-gray-700">
                                    <li>
                                        <a class="block items-center p-3 sm:flex hover:bg-gray-700 ">
                                            <img class="ml-3 mr-3 mb-3 object-cover w-60 h-40 sm:mb-0" src="../works/newst1.jpg" />
                                            <img class="mr-3 mb-3 object-cover w-60 h-40 sm:mb-0" src="../works/newst2.jpg" />
                                        </a>
                                    </li>
                                </ol>
                                <p className="text-lg font-medium pt-3 pb-3 text-center"> Satthasamut Student Admission System</p>
                                <a href="http://newst.sattha.ac.th" target="_blank" className="hover:text-sky-200"><p className="text-xs text-right -mt-3"> Visit website &gt;&gt; </p></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid">
                            <div class="mr-16 ml-4 p-5 mb-4 rounded-lg border bg-gray-800 border-gray-700 items-center">
                                <ol class="mt-3 divide-y divide-gray-700">
                                    <li>
                                        <a class="block items-center p-3 sm:flex hover:bg-gray-700 ">
                                            <img class="ml-3 mr-3 mb-3 object-cover w-60 h-40 sm:mb-0" src="../works/gb1.jpg" />
                                            <img class="mr-3 mb-3 object-cover w-60 h-40 sm:mb-0" src="../works/gb2.jpg" />
                                        </a>
                                    </li>
                                </ol>
                                <p className="text-lg font-medium pt-3 pb-3 text-center"> GBANK [ Garbage bank] </p>
                                <a href="http://gb.sattha.ac.th" target="_blank" className="hover:text-sky-200"><p className="text-xs text-right -mt-3"> Visit website &gt;&gt; </p></a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}