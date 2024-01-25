import React from 'react'
import RightProgressBar from './circleProgressBar/RightProgressBar'

let  level= 80
let weight = 25


const Scores = () => {
    return (
        <div className='w-1/2'>
            <div className=" bg-[#14151C] rounded">

                <h1 className="flex justify-center items-center font-rubik text-base font-bold rounded-t  p-2 bg-[#1c1d24]  text-[#517B38]">Scores</h1>
               
                <div className=' h-full flex-col  pb-2 rounded '>

                    <div className='flex justify-between items-center px-2 '>
                        <div className='flex-col'>
                            <p className='text-[#8F9093] font-rubik text-xs'>Score by  weight</p>
                            <span className='text-[#A96BCE] text-lg'>{weight}</span>
                        </div>
                        <div className=' '>
                            <p className='text-[#8F9093] font-inter text-xs pt-1 px-2 '>
                                <RightProgressBar weight={weight} level={level} />
                            </p>
                        </div>
                        <div className='flex-col '>
                            <p className='text-[#8F9093] font-rubik text-xs'>Score by  level</p>
                            <span className='text-[#F79429] text-lg'>{level}</span>
                        </div>
                    </div>





                    <div className='flex items-center  border border-[#2B2D33] rounded px-8 py-3 mx-3 bg-[#121319] mx-auto justify-between'>
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