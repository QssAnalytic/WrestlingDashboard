import Silver from '/img/medals/silver.svg'
import Gold from '/img/medals/gold.svg'
import Bronze from '/img/medals/bronz.svg'

const Medals = () => {

    //     <div>
    //     <p className='text-[#FCC417]'>Gold</p>
    //     <div className='flex justify-center items-center border border-[#2B2D33] rounded  bg-[#121319] mx-auto '>
    //         <img src={Gold} alt="" />
    //         <span className='border border-[#2B2D33] rounded   bg-[#121319] mx-auto '>2</span>
    //     </div>
    // </div>

    // <div>

    //     <p className='text-[#CECDD2]'>Silver</p>
    //     <div className='flex justify-center items-center border border-[#2B2D33] rounded  bg-[#121319] mx-auto '>
    //         <img src={Silver} alt="" />
    //         <span className='border border-[#2B2D33] rounded bg-[#121319] mx-auto '>3</span>
    //     </div>
    // </div>

    // <div>
    //     <p className='text-[#F79429]'>Bronze</p>
    //     <div className='flex justify-center items-center border border-[#2B2D33] rounded  bg-[#121319] mx-auto '>
    //         <img src={Bronze} alt="" />
    //         <p className='border border-[#2B2D33] rounded bg-[#121319] mx-auto  '>1 </p>
    //     </div>
    // </div>

    const data = [
        {
            id: 1,
            type: 'Gold',
            image: Gold,
            count: 2,
        },
        {
            id: 2,
            type: 'Silver',
            image: Silver,
            count: 3,
        },
        {
            id: 3,
            type: 'Bronze',
            image: Bronze,
            count: 1,
        },


    ]

    return (
        <div className='w-1/2'>
            <div className=" w-full bg-[#14151C] rounded ">
                <h1 className="flex justify-center items-center font-rubik text-base font-bold rounded-t  p-2 bg-[#1c1d24]  text-[#517B38]">Medals</h1>

                <div className='px-2 py-2    gap-x-8'>
                    <div className='flex justify-between    gap-6  '>
                        {
                            data.map((item) => {
                                return (
                                    <div key={item.id} className='flex flex-col items-center justify-center '>
                                        <p className={`text-${item.type === 'Gold' ? 'yellow' : item.type === 'Silver' ? 'silver' : 'bronze'} pb-1`}>{item.type}</p>
                                        <div className='flex justify-center items-center border border-[#2B2D33] rounded  bg-[#121319] mx-auto py-3 px-1' >
                                            <img src={item.image} alt="" className='w-8'/>
                                            <span className='border border-[#2B2D33] rounded   bg-[#121319] mx-auto  px-2'>{item.count}</span>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>




                    <div className=' h-36 sa  border border-[#2B2D33] rounded  bg-[#121319] mt-4 py- mx-auto overflow-y-auto'>
                        <div className='flex'>
                            <div className='w-2/6 border border-[#2B2D33] text-[#FCC417]'>
                                Gold
                            </div>
                            <div className='w-4/6 border border-[#2B2D33] text-[#88898C]'>
                                <div className='flex items-center justify-between  my-2 px-5'>
                                    <p>1</p>
                                    <p>2022</p>
                                    <p><span>Roma</span> , <span>Italy</span></p>
                                </div>
                                <div className='flex items-center justify-between  my-2 px-5'>
                                    <p>2</p>
                                    <p>2022</p>
                                    <p><span>Roma</span> , <span>Italy</span></p>
                                </div>

                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-2/6 border border-[#2B2D33] text-[#CECDD2]'>
                                Silver
                            </div>
                            <div className='w-4/6 border border-[#2B2D33] text-[#88898C]'>
                                <div className='flex items-center justify-between  my-2 px-5'>
                                    <p>1</p>
                                    <p>2022</p>
                                    <p><span>Roma</span> , <span>Italy</span></p>
                                </div>
                                <div className='flex items-center justify-between  my-2 px-5'>
                                    <p>2</p>
                                    <p>2022</p>
                                    <p><span>Roma</span> , <span>Italy</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-2/6 border border-[#2B2D33] text-[#F79429]'>
                                Bronze
                            </div>
                            <div className='w-4/6 border border-[#2B2D33] text-[#88898C]'>
                                <div className='flex items-center justify-between  my-1 px-5'>
                                    <p>1</p>
                                    <p>2022</p>
                                    <p><span>Roma</span> , <span>Italy</span></p>
                                </div>
                                <div className='flex items-center justify-between  my-1 px-5'>
                                    <p>2</p>
                                    <p>2022</p>
                                    <p><span>Roma</span> , <span>Italy</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medals