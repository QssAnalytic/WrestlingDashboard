import React from 'react'



import Medals from './medals/Medals'
import Scores from './scores/Scores'
import TotalPoints from './total_points/TotalPoints'
import Decisions from './decisions/Decisions'




const RightFrame = () => {
    return (
        <section className='w-fit'>
            <h1 className='font-customweight leading-5 tracking-wider font-inter text-center my-3 text-[#83D24F]'>Career Summary</h1>

            <div className='h-[791px]  border border-[#83D24F]   flex-col justify-between items-center  p-5 gap-2 text-center rounded '>

                <div className="h-[272px] flex  gap-5 ">

                    <Scores />

                    <Medals />
                </div>

                <div className=' w-full mt-5 bg-[#14151C] rounded '>
                    <TotalPoints />
                    <Decisions />
                </div>





            </div>
        </section>
    )
}

export default RightFrame