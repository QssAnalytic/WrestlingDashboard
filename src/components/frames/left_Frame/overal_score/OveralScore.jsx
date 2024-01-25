import Wrestlier from '/img/wrestlier.svg'
import CircleBar from './circle'


const OveralScore = () => {
    return (

        <div className=' bg-[#14151C] rounded '>

            <h1 className='flex justify-center items-center text-base font-rubik font-bold rounded-t bg-[#1c1d24] text-[#a87b41] p-2'>Overal Score</h1>

            <div className='flex mx-auto justify-center items-center gap-7 p-5'>
                <div >
                    <img src={Wrestlier} alt="assas" className=' border border-[#ecc254] rounded w-16' />
                    <h1 className='text-[#E5B352] font-rubik text-sm pt-1'>Haji Aliyev</h1>
                </div>
                <div className='w-32'>
                    <CircleBar />
                </div>
            </div>
        </div>
    )
}

export default OveralScore