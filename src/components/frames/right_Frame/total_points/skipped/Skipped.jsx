import React from 'react'

const Skipped = () => {
    return (
        <div>
            <div className='w-[303px] h-[88px] bg-[#121319] rounded-[4px] border border-[#ED2939] flex_center'>
                <div className='h-full w-full flex_center flex-col'>
                    <span className='text-2xl text-[#ED2939]  w-[72px]  h-[37px] border border-[#2B2D33] bg-[#21232A] rounded-[4px] py-1 mt-2 px-[18px] flex_center'>  2.1</span>
                    <p className='text-sm text-[#ED2939] my-2 '>Avg skipped points</p>
                </div>
                <div className='h-full w-full flex_center flex-col'>
                    <span className='text-base text-[#8F9093] border border-[#2B2D33] bg-[#21232A] rounded-[4px] py-[5px] px-[10px] mt-2 flex_center'>43</span>
                    <p className='text-sm text-[#8F9093] my-2'>Total skipped points </p>
                </div>
            </div>
        </div>
    )
}

export default Skipped