import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="container flex items-center justify-between flex-wrap bg-transparent p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-10">
          <img src="images/logo.png" alt="NFTERS"/>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black border-main hover:text-main hover:border-main">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow md:mb-0 mb-5">
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-main mr-10">
              Marketplace
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-main mr-10">
              Resource
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-main">
              About
            </a>
          </div>
          <div className="text-sm lg:flex-grow">
            <div>
              <form className="block lg:inline-block mr-4 w-[200px]">
                <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search"/>
              </form>
              <a href="#" className="block lg:inline-block text-sm px-4 py-2 leading-none border rounded-full text-main border-main bg-white hover:border-main hover:text-white hover:bg-main mt-4 lg:mt-0 mr-4 w-[200px]">
                Upload
              </a>
              <a href="#" className="block lg:inline-block text-sm px-4 py-2 leading-none border rounded-full text-main border-main bg-white hover:border-main hover:text-white hover:bg-main mt-4 lg:mt-0 w-[200px]">
                Connect Wallet
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header