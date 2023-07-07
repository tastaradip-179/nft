import React from 'react'


const Signup = () => {
  return (
    <>
      <div className='container p-6 my-10'>
        <div className='flex my-5 md:flex-nowrap flex-wrap gap-20'>
          <div className='md:w-1/4 w-full'>
            <div className='relative md:w-[400px] md:h-[440px] w-[280px] h-[320px]'>
              <img src='images/sign1.png' alt="sign1"/>
              <img src='images/user1.png' alt="user1" className='rounded-full border border-white absolute right-[-40px] bottom-[-40px]'/>
            </div>
            <div className='mt-20'>
              <div className='relative w-[270px] h-[320px] lg:float-right float-none'>
                <img src='images/sign3.png' alt="sign3"/>
                <img src='images/user2.png' alt="user2" className='rounded-full border-white absolute right-[-40px] bottom-[-10px]'/>
              </div>
            </div>
          </div>
          <div className='md:w-1/4 w-full md:pt-[150px] sm:pt-0'>
            <div className='relative md:w-[356px] md:h-[392px] w-[276px] h-[312px]'>
              <img src='images/sign2.png' alt="sign2"/>
              <img src='images/user2.png' alt="user2" className='rounded-full border-white absolute right-[-30px] bottom-[-30px]'/>
            </div>
          </div>
          <div className='md:w-2/5 w-full md:pt-[150px] sm:pt-0'>
            <h3 className='text-black text-[46px] font-bold uppercase'>
              Create and sell your NFTs
            </h3>
            <p className='text-paragraph2 text-lg my-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
            </p>
            <button className='text-white text-lg border-main bg-main rounded-full px-6 py-4 hover:bg-white hover:text-main'>
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup