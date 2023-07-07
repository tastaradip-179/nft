import React, {useEffect, useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const Header = () => {

  const [open, setOpen] = useState(false);

  useEffect(()=>{
    if(window.innerWidth >= 667){
        setOpen(true)
    }
    function screenResize(e){
        if(window.innerWidth >= 667){
            setOpen(true);
        }
        else{
            setOpen(false);
        }
    }
    window.addEventListener("resize", screenResize)
  }, [])

  let handleOpen = () => {
    setOpen(!open);
  }
  
  return (
    <>
      <nav className="container flex items-center md:justify-between justify-around flex-wrap bg-transparent p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-10">
          <img src="images/logo.png" alt="NFTERS"/>
        </div>
        <button onClick={handleOpen} className='flex md:hidden items-center px-3 py-2 border border-main rounded text-main text-base'>
            {open
            ?
            <ImCross/>  
            :
            <GiHamburgerMenu/>
            }
        </button>
        {open && 
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
        }
      </nav>
    </>
  )
}

export default Header