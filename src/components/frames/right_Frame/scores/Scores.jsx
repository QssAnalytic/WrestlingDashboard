import React from 'react'
import RightProgressBar from './circleProgressBar/RightProgressBar'

let  level= 80
let weight = 25


const Scores = () => {
    return (
        <div>
            <div className=" w-full  card_color">
                <h1 className="chartname text-[#517B38]  ">Scores</h1>
                <div className=' h-full flex-col'>

                    <div className='flex justify-between items-center px-4 '>
                        <div className='flex-col'>
                            <p className='text-[#8F9093] font-rubik text-xs'>Score by <br /> weight</p>
                            <span className='text-[#A96BCE] text-lg'>{weight}</span>
                        </div>
                        <div className=''>
                            <p className='text-[#8F9093] font-inter text-xs '>
                                <RightProgressBar weight={weight} level={level} />
                            </p>
                        </div>
                        <div className='flex-col'>
                            <p className='text-[#8F9093] font-rubik text-xs'>Score by <br /> level</p>
                            <span className='text-[#F79429] text-lg'>{level}</span>
                        </div>
                    </div>

                    <div className='flex items-center w-[296px] h-[57px] border border-[#2B2D33] rounded-[4px] px-8  bg-[#121319] mx-auto justify-between'>
                        <div className='flex-col'>
                            <p className='text-[#8F9093] font-rubik text-xs'>Won</p>
                            <span className='text-[#4BB21A] text-lg'>21</span>
                        </div>
                        <div className='flex-col'>
                            <p className='text-[#8F9093] font-rubik text-xs'>Number of fights</p>
                            <span className='font-bold '>31</span>
                        </div>
                        <div className='flex-col'>
                            <p className='text-[#8F9093] font-rubik text-xs'>Lost</p>
                            <span className='text-[#ED2939] text-lg'>10</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Scores