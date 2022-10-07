import React, { Fragment } from 'react'

const Footer = () => {
    return (
        <Fragment>
            <footer className="bg-gradient-to-r from-yellow-50 to-yellow-100 fixed bottom-0 left-0 w-full shadow md:flex md:items-center md:justify-between md:p-1">
                <span className="text-sm text-gray-500 sm:text-center md:px-12 py-2.5">Event Dashboard for DAI
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://proud-sunspot-cee.notion.site/PUSH-Assignment-f11b9d50aa1945c582bdfbf30d92a3f7" target="_blank" rel="noopener noreferrer" className="mr-12 hover:underline md:mr-12 ">Notion Page</a>
                    </li>
                    <li>
                        <a href="https://github.com/neeraj-22/push-assignment" target="_blank" rel="noopener noreferrer" className="mr-12 hover:underline md:mr-12 ">Github</a>
                    </li>
                </ul>
            </footer>
        </Fragment>
    )
}

export default Footer