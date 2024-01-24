import React from 'react'



import Medals from './medals/Medals'
import Scores from './scores/Scores'
import TotalPoints from './total_points/TotalPoints'
import Decisions from './decisions/Decisions'




const RightFrame = () => {
    return (
        <section>
            <h1 className='frame_title'>Career Summary</h1>

            <div className=' w-[690px] h-[791px]  border border-[rgb(236,194,84)]   flex-col justify-between items-center  p-5 gap-2 text-center rounded-[4px] '>

                <div className="h-[272px] flex  gap-5 ">

                    <Scores />

                    <Medals />
                </div>

                <div className=' w-full mt-5 card_color '>
                    <TotalPoints />
                    <Decisions />
                </div>





            </div>
        </section>
    )
}

export default RightFrame