import React from 'react'
import { BsVectorPen } from 'react-icons/bs'

const Collection = () => {
  return (
    <>
        <div className='container p-6'>
          <div className='flex my-5 md:flex-nowrap flex-wrap gap-[140px]'>
            <div className='md:w-4/12 sm:w-full'>
              <img src='images/collection.png' alt="collection"/>
              <div className='flex mt-5 justify-between'>
                <div className='flex gap-3'>
                  <div>
                    <img src="images/user.png" alt="user"/>
                  </div>
                  <div>
                    <h6 className='text-black text-lg font-semibold'>The Futr Abstr</h6>
                    <p>10 in the stock</p>
                  </div>
                </div>
                <div>
                  <p>Highest Bid</p>
                  <p>0.25 ETH</p>
                </div>
              </div>
            </div>
            <div className='md:w-4/12 sm:w-full'>
              <div className='flex gap-5 mb-3 md:flex-nowrap flex-wrap'>
                <div>
                  <img src='images/c1.png' alt="c1"/>
                </div>
                <div>
                  <h6 className='rext-black text-lg font-semibold'>The Futr Abstr</h6>
                  <div className='flex justify-between gap-2 my-2 md:flex-nowrap flex-wrap'>
                    <img src="images/user.png" alt="user"/>
                    <button className='text-success border border-success rounded-md p-2'>
                      <BsVectorPen className='inline-block mr-2'/>
                      <span>0.25 ETH</span>
                    </button>
                    <p className='pt-3'>1 of 8</p>
                  </div>
                  <button className='text-main bg-white border border-main rounded-full px-4 py-3 hover:text-white hover:bg-main'>
                    Place a bid
                  </button>
                </div>
              </div>
              <div className='flex gap-5 mb-3 md:flex-nowrap flex-wrap'>
                <div>
                  <img src='images/c2.png' alt="c2"/>
                </div>
                <div>
                  <h6 className='rext-black text-lg font-semibold'>The Futr Abstr</h6>
                  <div className='flex justify-between gap-2 my-2 md:flex-nowrap flex-wrap'>
                    <img src="images/user.png" alt="user"/>
                    <button className='text-success border border-success rounded-md p-2'>
                      <BsVectorPen className='inline-block mr-2'/>
                      <span>0.25 ETH</span>
                    </button>
                    <p className='pt-3'>1 of 8</p>
                  </div>
                  <button className='text-main bg-white border border-main rounded-full px-4 py-3 hover:text-white hover:bg-main'>
                    Place a bid
                  </button>
                </div>
              </div>
              <div className='flex gap-5 mb-3 md:flex-nowrap flex-wrap'>
                <div>
                  <img src='images/c3.png' alt="c3"/>
                </div>
                <div>
                  <h6 className='rext-black text-lg font-semibold'>The Futr Abstr</h6>
                  <div className='flex justify-between gap-2 my-2 md:flex-nowrap flex-wrap'>
                    <img src="images/user.png" alt="user"/>
                    <button className='text-success border border-success rounded-md p-2'>
                      <BsVectorPen className='inline-block mr-2'/>
                      <span>0.25 ETH</span>
                    </button>
                    <p className='pt-3'>1 of 8</p>
                  </div>
                  <button className='text-main bg-white border border-main rounded-full px-4 py-3 hover:text-white hover:bg-main'>
                    Place a bid
                  </button>
                </div>
              </div>
            </div>
            <div className='md:w-4/12 sm:w-full'>
              <h4 className='text-black text-lg font-bold uppercase mb-2'>
                Top Collections over 
              </h4>
              <p className='text-main text-sm font-semibold mb-5'>
                Last 7 days
              </p>
              <div className='my-3'>
                <div className='flex items-center gap-2 mb-3'>
                  <p className='text-black text-md font-semibold'>1</p>
                  <img src="images/c1s.png" alt="c1s"/>
                  <div>
                    <p>CryptoFunks</p>
                    <p>19,769.39</p>
                  </div>
                  <p className='text-success'>+26.52%</p>
                </div>
                <div className='flex items-center gap-2 mb-3'>
                  <p className='text-black text-md font-semibold'>2</p>
                  <img src="images/c2s.png" alt="c2s"/>
                  <div>
                    <p>CryptoFunks</p>
                    <p>19,769.39</p>
                  </div>
                  <p className='text-danger'>+26.52%</p>
                </div>
                <div className='flex items-center gap-2 mb-3'>
                  <p className='text-black text-md font-semibold'>3</p>
                  <img src="images/c3s.png" alt="c3s"/>
                  <div>
                    <p>CryptoFunks</p>
                    <p>19,769.39</p>
                  </div>
                  <p className='text-success'>+26.52%</p>
                </div>
                <div className='flex items-center gap-2 mb-3'>
                  <p className='text-black text-md font-semibold'>4</p>
                  <img src="images/c4s.png" alt="c4s"/>
                  <div>
                    <p>CryptoFunks</p>
                    <p>19,769.39</p>
                  </div>
                  <p className='text-success'>+26.52%</p>
                </div>
                <div className='flex items-center gap-2 mb-3'>
                  <p className='text-black text-md font-semibold'>5</p>
                  <img src="images/c5s.png" alt="c5s"/>
                  <div>
                    <p>CryptoFunks</p>
                    <p>19,769.39</p>
                  </div>
                  <p className='text-danger'>+26.52%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Collection