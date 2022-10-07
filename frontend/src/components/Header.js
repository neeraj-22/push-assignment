import React, { Fragment } from 'react'

const Header = ({curr}) => {
    return (
        <Fragment>

            <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className="flex items-center">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-yellow-400 font-bold text-lg">Event Dashboard</span>
                    </a>
                    
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            
                            <li>
                                <a href="https://proud-sunspot-cee.notion.site/PUSH-Assignment-f11b9d50aa1945c582bdfbf30d92a3f7" target="_blank" rel="noopener noreferrer" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Notion</a>
                            </li>
                            <li>
                                <a href="/fetch" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Fetch Data from DB</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </Fragment>
    )
}

export default Header