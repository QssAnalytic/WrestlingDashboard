import Medals from './medals/Medals'
import Scores from './scores/Scores'
import TotalPoints from './total_points/TotalPoints'
import Decisions from './decisions/Decisions'

const RightFrame = () => {
    return (
        <section className=''>
            <h1 className='font-customweight leading-5 tracking-wider font-inter text-center my-3 text-[#83D24F]'>Career Summary</h1>

            <div className=' border border-[#83D24F]   flex-col justify-between items-center  p-4 gap-2 text-center rounded '>

                <div className=" flex  gap-4 ">

                    <Scores />

                    <Medals />
                </div>

                <div className='  mt-5 bg-[#14151C] rounded '>
                    <TotalPoints />
                    <Decisions />
                </div>





            </div>
        </section>
    )
}

export default RightFrame