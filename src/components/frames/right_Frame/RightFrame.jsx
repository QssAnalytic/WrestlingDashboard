import React from 'react'
import RightProgressBar from './bars/circle/RightProgressBar'
import Silver from '/img/medals/silver.svg'
import Gold from '/img/medals/gold.svg'
import Bronze from '/img/medals/bronz.svg'
import RightLineChart from './charts/RightLineChart'

const RightFrame = () => {
    return (
        <div>
            <section>
                <h1 className='frame_title'>Career Summary</h1>

                <div className=' w-[690px] h-[791px]  border border-[rgb(236,194,84)]   flex-col justify-between items-center  p-5 gap-2 text-center '>

                    <div className="h-[272px] flex  gap-5 ">
                        <div className=" w-full  card_color">
                            <h1 className="chartname  text-black">Scores</h1>
                            <div className=' h-full flex-col'>

                                <div className='flex justify-between items-center px-4 '>
                                    <div className='flex-col'>
                                        <p className='text-[#8F9093] font-rubik text-xs'>Score by <br /> weight</p>
                                        <span className='text-[#A96BCE] text-lg'>91</span>
                                    </div>
                                    <div className=''>
                                        <p className='text-[#8F9093] font-inter text-xs '>
                                            <RightProgressBar />
                                        </p>
                                    </div>
                                    <div className='flex-col'>
                                        <p className='text-[#8F9093] font-rubik text-xs'>Score by <br /> level</p>
                                        <span className='text-[#F79429] text-lg'>80</span>
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


                        <div className=" w-full card_color ">
                            <p className="chartname">Medals</p>

                            <div>



                                <div className='flex justify-between px-1 mt-2 '>
                                    <div>
                                        <p>Gold</p>
                                        <div className='flex_center border border-[#2B2D33] rounded-[4px]  bg-[#121319] mx-auto w-[82px] h-[48px]'>
                                            <img src={Gold} alt="" />
                                            <span className='border border-[#2B2D33] rounded-[4px]   bg-[#121319] mx-auto w-[30px] h-[30px] '>2</span>
                                        </div>
                                    </div>

                                    <div>

                                        <p>Silver</p>
                                        <div className='flex_center border border-[#2B2D33] rounded-[4px]  bg-[#121319] mx-auto w-[82px] h-[48px]'>
                                            <img src={Silver} alt="" />
                                            <span className='border border-[#2B2D33] rounded-[4px] bg-[#121319] mx-auto w-[30px] h-[30px]'>3</span>
                                        </div>
                                    </div>

                                    <div>
                                        <p>Bronze</p>
                                        <div className='flex_center border border-[#2B2D33] rounded-[4px]  bg-[#121319] mx-auto w-[82px] h-[48px]'>
                                            <img src={Bronze} alt="" />
                                            <p className='border border-[#2B2D33] rounded-[4px] bg-[#121319] mx-auto w-[30px]  h-[30px]'>1 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' sa w-[308px] h-[127px] border border-[#2B2D33] rounded-[4px]  bg-[#121319] mt-5 mx-auto overflow-y-auto'>



                                    <div className='flex h-[65px]'>
                                        <div className='w-1/6 border border-[#2B2D33]'>
                                            gold
                                        </div>
                                        <div className='w-5/6 border border-[#2B2D33]'>
                                            sal
                                        </div>
                                    </div>
                                    <div className='flex h-[65px]'>
                                        <div className='w-1/6 border border-[#2B2D33]'>
                                            gold
                                        </div>
                                        <div className='w-5/6 border border-[#2B2D33]'>
                                            sal
                                        </div>
                                    </div>
                                    <div className='flex h-[65px]'>
                                        <div className='w-1/6 border border-[#2B2D33]'>
                                            gold
                                        </div>
                                        <div className='w-5/6 border border-[#2B2D33]'>
                                            sal
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="h-[462px]  mt-5 card_color">
                        <h1 className="chartname">Total (gained & skipped) points</h1>
                        <div className='flex-col p-5'>
                            <div className='POINTS flex gap-7'>
                                <div className='w-[303px] h-[88px] bg-[#121319]'>as</div>
                                <div className='w-[303px] h-[88px] bg-[#121319]'>as</div>
                            </div>
                            <div className='DECISIONS flex gap-7' >
                            <div className='w-[303px] h-[324px]'>
                                <RightLineChart />
                            </div>
                            <div className='w-[303px] h-[324px]'>sa</div>

                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RightFrame