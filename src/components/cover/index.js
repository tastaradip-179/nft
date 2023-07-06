import React from 'react'


const Cover = () => {
  return (
    <>
      <div className='container p-6'>
        <div className='flex md:justify-between md:flex-nowrap flex-wrap justify-end bg-transparent my-10 gap-20'>
          <div className='md:w-3/5 w-full'>
            <h1 className='text-black text-[50px] font-bold mb-5'>
                Discover, and collect Digital Art  NFTs 
            </h1>
            <p className='text-paragraph text-lg font-semibold mb-5'>
                Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
            <button className='text-white bg-main border border-main p-5 rounded-full my-5 hover:text-main hover:bg-white'>
              Explore Now
            </button>
            <div className='flex text-black'>
              <div>
                <h5 className='text-[40px] font-bold'>98K+</h5>
                <p className='text-sm text-paragraph'>Artword</p>
              </div>
              <div>
                <h5 className='text-[40px] font-bold'>12K+</h5>
                <p className='text-sm text-paragraph'>Auction</p>
              </div>
              <div>
                <h5 className='text-[40px] font-bold'>15K+</h5>
                <p className='text-sm text-paragraph'>Artist</p>
              </div>
            </div>
          </div>
          <div className='md:w-2/5 w-full'>
            <div className='ml-10 md:ml-0'>
              <div className='relative w-full h-[300px]'>
                  <h4 className='absolute z-50 text-white text-lg font-semibold left-[15px] top-[10px]'>Abstr Gradient NFT</h4>
                  <div className='absolute z-50 flex left-[15px] top-[50px]'>
                    <img src="images/user.png" alt="user"/>
                    <span className='text-white text-sm pt-3 pl-2'>Arkhan17</span>
                  </div>
                  <img src="images/auction.png" alt="auction" className='absolute z-50 left-[-70px] top-[125px]'/>
                  <img src="images/cover1.png" alt="cover1" className='absolute z-40'/>
                  <img src="images/cover2.png" alt="cover2" className='absolute z-30 left-[85px] top-[15px]'/>
                  <img src="images/cover3.png" alt="cover3" className='absolute z-20 left-[155px] top-[45px]'/>
                  <div className='absolute flex z-50 left-[15px] top-[235px] justify-between'>
                    <div className='text-white'>
                      <p>Current Bid</p>
                      <h6>0.25 ETH</h6>
                    </div>
                    <div className='text-white'>
                      <p>Ends in</p>
                      <h6>12h 43m 42s</h6>
                    </div>
                  </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cover