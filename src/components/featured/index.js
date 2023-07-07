import React from 'react'

const Featured = () => {
  return (
    <>
      <div className='container p-6 my-10'>
        <h2 className='text-black text-[45px] font-bold my-10'>
          Collection Featured NFTs
        </h2>
        <div className='flex md:justify-between md:flex-nowrap justify-around flex-wrap gap-[120px] pt-5 my-5'>
          <div className='md:w-4/12 sm:w-full'>
            <div className='flex md:justify-between md:flex-nowrap justify-around flex-wrap gap-10'>
              <div>
                <img src="images/f1.png" alt="featured1"/>
              </div>
              <div className='flex md:flex-col flex-row flex-nowrap gap-2'>
                <img src="images/f1s.png" alt="featured1"/>
                <img src="images/f2s.png" alt="featured1"/>
                <img src="images/f3s.png" alt="featured1"/>
              </div>
            </div>
            <div className='pt-5'>
              <h5 className='text-black text-lg font-semibold'>
                Amazing Collection
              </h5>
              <div className='flex justify-between'>
                <div>
                  <img src="images/user.png" alt="user" className='inline-block mr-1'/>
                  <span className='text-black text-sm'>by Arkhan</span>
                </div>
                <button className='text-main border border-main rounded-full bg-white px-2 hover:text-white hover:bg-main'>
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>
          <div className='md:w-4/12 sm:w-full'>
            <div className='flex md:justify-between md:flex-nowrap justify-around flex-wrap gap-10'>
              <div>
                <img src="images/f2.png" alt="featured2"/>
              </div>
              <div className='flex md:flex-col flex-row flex-nowrap gap-2'>
                <img src="images/f2s.png" alt="featured2"/>
                <img src="images/f1s.png" alt="featured2"/>
                <img src="images/f4s.png" alt="featured2"/>
              </div>
            </div>
            <div className='pt-5'>
              <h5 className='text-black text-lg font-semibold'>
                Amazing Collection
              </h5>
              <div className='flex justify-between'>
                <div>
                  <img src="images/user.png" alt="user" className='inline-block mr-1'/>
                  <span className='text-black text-sm'>by Arkhan</span>
                </div>
                <button className='text-main border border-main rounded-full bg-white px-2 hover:text-white hover:bg-main'>
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>
          <div className='md:w-4/12 sm:w-full'>
            <div className='flex md:justify-between md:flex-nowrap justify-around flex-wrap gap-10'>
              <div>
                <img src="images/f3.png" alt="featured3"/>
              </div>
              <div className='flex md:flex-col flex-row flex-nowrap gap-2'>
                <img src="images/f5s.png" alt="featured3"/>
                <img src="images/f6s.png" alt="featured3"/>
                <img src="images/f1s.png" alt="featured3"/>
              </div>
            </div>
            <div className='pt-5'>
              <h5 className='text-black text-lg font-semibold mb-2'>
                Amazing Collection
              </h5>
              <div className='flex justify-between'>
                <div>
                  <img src="images/user.png" alt="user" className='inline-block mr-1'/>
                  <span className='text-black text-sm'>by Arkhan</span>
                </div>
                <button className='text-main border border-main rounded-full bg-white px-2 hover:text-white hover:bg-main'>
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured