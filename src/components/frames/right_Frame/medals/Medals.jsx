import Silver from '/img/medals/silver.svg'
import Gold from '/img/medals/gold.svg'
import Bronze from '/img/medals/bronz.svg'

const Medals = () => {
    return (
        <div>
            <div className=" w-full bg-[#14151C] rounded ">
                <p className="flex justify-center items-center font-rubik font-bold rounded-t bg-[#1c1d24] h-[35px] text-[#517B38]">Medals</p>

                <div>
                    <div className='flex justify-between px-1 mt-2 '>
                        <div>
                            <p className='text-[#FCC417]'>Gold</p>
                            <div className='flex justify-center items-center border border-[#2B2D33] rounded  bg-[#121319] mx-auto w-[82px] h-[48px]'>
                                <img src={Gold} alt="" />
                                <span className='border border-[#2B2D33] rounded   bg-[#121319] mx-auto w-[30px] h-[30px] '>2</span>
                            </div>
                        </div>

                        <div>

                            <p className='text-[#CECDD2]'>Silver</p>
                            <div className='flex justify-center items-center border border-[#2B2D33] rounded  bg-[#121319] mx-auto w-[82px] h-[48px]'>
                                <img src={Silver} alt="" />
                                <span className='border border-[#2B2D33] rounded bg-[#121319] mx-auto w-[30px] h-[30px]'>3</span>
                            </div>
                        </div>

                        <div>
                            <p className='text-[#F79429]'>Bronze</p>
                            <div className='flex justify-center items-center border border-[#2B2D33] rounded  bg-[#121319] mx-auto w-[82px] h-[48px]'>
                                <img src={Bronze} alt="" />
                                <p className='border border-[#2B2D33] rounded bg-[#121319] mx-auto w-[30px]  h-[30px]'>1 </p>
                            </div>
                        </div>
                    </div>
                    <div className=' sa w-[308px] h-[127px] border border-[#2B2D33] rounded  bg-[#121319] mt-5 mx-auto overflow-y-auto'>



                        <div className='flex h-[65px]'>
                            <div className='w-1/6 border border-[#2B2D33] text-[#FCC417]'>
                                Gold
                            </div>
                            <div className='w-5/6 border border-[#2B2D33] text-[#88898C]'>
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
                        <div className='flex h-[65px]'>
                            <div className='w-1/6 border border-[#2B2D33] text-[#CECDD2]'>
                                Silver
                            </div>
                            <div className='w-5/6 border border-[#2B2D33] text-[#88898C]'>
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
                        <div className='flex h-[65px]'>
                            <div className='w-1/6 border border-[#2B2D33] text-[#F79429]'>
                                Bronze
                            </div>
                            <div className='w-5/6 border border-[#2B2D33] text-[#88898C]'>
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