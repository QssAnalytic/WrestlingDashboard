import React from 'react'

const Gained = () => {
    return (
        <div>
            <div className='w-[303px] h-[88px] bg-[#121319] rounded-[4px] border border-[#56AD36] flex_center'>
                <div className='h-full w-full flex_center flex-col'>
                    <span className='text-2xl text-[#4BB21A] w-[72px]  h-[37px] border border-[#2B2D33] bg-[#21232A] rounded-[4px] py-1 px-[18px] flex_center ' >  5.2</span>
                    <p className='text-sm text-[#4BB21A] my-2'>Avg gained points</p>
                </div>
                <div className='h-full w-full flex_center flex-col'>
                    <span className='text-[#8F9093] border border-[#2B2D33] bg-[#21232A] rounded-[4px] py-[5px] px-[10px] flex_center'>160</span>
                    <p className='text-sm text-[#8F9093] my-2'>Total gained points</p>
                </div>
            </div>
        </div>
    )
}

export default Gained