export const Navbar = () => {
  return (
    <div className="fixed w-full ">
    <nav class="flex justify-between items-center z-10 static border-gray-200 px-2 sm:px-4 py-2.5  bg-gray-900">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <div></div>
        <div class="flex md:order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-default"
        >
          <ul class="flex flex-col p-4 mt-4 rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700 ">
            <li>
              <a
                href="#home-section"
                class="block py-2 pr-4 pl-3  rounded  md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#information-section"
                class="block py-2 pr-4 pl-3  rounded  md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Information
              </a>
            </li>
            <li>
              <a
                href="#competitions-section"
                class="block py-2 pr-4 pl-3  rounded  md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Competitions
              </a>
            </li>
            <li>
              <a
                href="#activities-section"
                class="block py-2 pr-4 pl-3  rounded  md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Activities
              </a>
            </li>
            <li>
              <a
                href="#gallery-section"
                class="block py-2 pr-4 pl-3  rounded  md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <hr width="40%"/>
      </div>
    </nav>
    </div>
  );
};
