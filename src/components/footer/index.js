import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'


const Footer = () => {
  return (
    <>
      <div className='container p-6 mt-10'>
        <div className='flex gap-10 flex-wrap lg:flex-nowrap'>
          <div className='md:w-5/12 sm:w-full'>
            <img src="images/logo2.png" alt="logo" className='mb-5'/>
            <p className='text-paragraph text-sm mb-5'>
              The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
            </p>
            <div className='flex gap-1'>
              <FaFacebookF className='text-white bg-fb rounded-full w-[40px] h-[38px] p-2'/>
              <FaTwitter className='text-white bg-twitter rounded-full w-[40px] h-[38px] p-2'/>
              <FaLinkedinIn className='text-white bg-lin rounded-full w-[40px] h-[38px] p-2'/>
            </div>
          </div>
          <div className='md:w-1/6 sm:w-full'>
            <h6 className='text-black text-lg font-semibold mb-5'>
              Marketplace
            </h6>
            <p className='text-black text-sm mb-1'>
              All NFTs
            </p>
            <p className='text-black text-sm mb-1'>
              New
            </p>
            <p className='text-black text-sm mb-1'>
              Art
            </p>
            <p className='text-black text-sm mb-1'>
              Sports
            </p>
            <p className='text-black text-sm mb-1'>
              Utility
            </p>
            <p className='text-black text-sm mb-1'>
              Music
            </p>
            <p className='text-black text-sm mb-1'>
              Domain
            </p>
            <p className='text-black text-sm'>
              Name
            </p>
          </div>
          <div className='md:w-1/6 sm:w-full'>
            <h6 className='text-black text-lg font-semibold mb-5'>
              My Account
            </h6>
            <p className='text-black text-sm mb-1'>
              Profile
            </p>
            <p className='text-black text-sm mb-1'>
              Favorite
            </p>
            <p className='text-black text-sm mb-1'>
              My Collections
            </p>
            <p className='text-black text-sm'>
              Settings
            </p>
          </div>
          <div className='md:w-5/12 sm:w-full'>
            <h6 className='text-black text-lg font-semibold mb-5'>
              Stay In The Loop
            </h6>
            <p className='text-paragraph text-sm mb-5'>
              Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <div className='relative'>
              <form>
                <input type='email' placeholder='Enter your email here' className='border border-gray-300 rounded-full p-5 w-full'/>
                <button className='text-white border border-button bg-button rounded-full p-3 relative mt-2 float-right md:mt-0 md:absolute md:top-[8px] md:right-[10px] md:float-none'>Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
        <div className='bg-[#A4A4A4]/[0.1] h-1 w-full mt-10 mb-5'></div>
        <div className='text-center text-[#A4A4A4]'>
            <p className='text-md'>Copyright © 2022 Avi Yansah</p>
        </div>
      </div>
    </>
  )
}

export default Footer