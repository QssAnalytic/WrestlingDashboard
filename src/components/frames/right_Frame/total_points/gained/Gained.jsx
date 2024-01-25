import React from 'react'

const Gained = () => {
    return (
        <div>
            <div className='bg-[#121319] rounded border border-[#56AD36] flex justify-center items-center'>
                <div className='h-full w-full flex justify-center items-center flex-col '>
                    <span className='text-2xl text-[#4BB21A]  border border-[#2B2D33] bg-[#21232A] rounded mt-2  px-[18px] flex justify-center items-center ' >  5.2</span>
                    <p className='text-sm text-[#4BB21A] my-2'>Avg gained points</p>
                </div>
                <div className='h-full w-full flex justify-center items-center flex-col'>
                    <span className='text-[#8F9093] border border-[#2B2D33] bg-[#21232A] rounded py-[5px] px-[10px] mt-2 flex justify-center items-center'>160</span>
                    <p className='text-sm text-[#8F9093] my-2'>Total gained points</p>
                </div>
            </div>
        </div>
    )
}

export default Gained