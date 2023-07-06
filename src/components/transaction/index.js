import React from 'react'
import { AiOutlineCalendar, AiOutlineBarChart } from 'react-icons/ai';

const Transaction = () => {
  return (
    <>
      <div className='bg-[#D9E0EC] my-10 py-20'>
        <div className='flex container p-6 justify-between md:flex-nowrap flex-wrap gap-20'>
          <div>
            <h2 className='text-black text-[40px] font-bold uppercase'>
              The amazing NFT art of the world here
            </h2>
          </div>
          <div>
            <div className='flex'>
              <div>
                <div className='flex pb-5 pt-2 gap-2'>
                  <AiOutlineCalendar className='text-black text-[40px]'/>
                  <h4 className='text-black text-lg font-bold mt-1'>
                    Fast Transaction
                  </h4>
                </div>
                <p className='text-paragraph2 text-sm font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
              </div>
              <div>
                <div className='flex pb-5 pt-2 gap-2'>
                  <AiOutlineBarChart className='text-black text-[40px]'/>
                  <h4 className='text-black text-lg font-bold mt-1'>
                    Growth Transaction
                  </h4>
                </div>               
                <p className='text-paragraph2 text-sm font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transaction