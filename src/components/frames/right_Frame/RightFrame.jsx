import React from 'react'
import RightProgressBar from './bars/circle/RightProgressBar'
import Silver from '/img/medals/silver.svg'
import Gold from '/img/medals/gold.svg'
import Bronze from '/img/medals/bronz.svg'
import WinLineBar from './bars/line/WinLineBar'
import LostLineBar from './bars/line/LostLineBar'

const RightFrame = () => {
    return (
        <div>
            <section>
                <h1 className='frame_title'>Career Summary</h1>

                <div className=' w-[690px] h-[791px]  border border-[rgb(236,194,84)]   flex-col justify-between items-center  p-5 gap-2 text-center '>

                    <div className="h-[272px] flex  gap-5 ">
                        <div className=" w-full  card_color">
                            <h1 className="chartname text-[#517B38] text-[#517B38] ">Scores</h1>
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
                            <p className="chartname text-[#517B38]">Medals</p>

                            <div>



                                <div className='flex justify-between px-1 mt-2 '>
                                    <div>
                                        <p className='text-[#FCC417]'>Gold</p>
                                        <div className='flex_center border border-[#2B2D33] rounded-[4px]  bg-[#121319] mx-auto w-[82px] h-[48px]'>
                                            <img src={Gold} alt="" />
                                            <span className='border border-[#2B2D33] rounded-[4px]   bg-[#121319] mx-auto w-[30px] h-[30px] '>2</span>
                                        </div>
                                    </div>

                                    <div>

                                        <p className='text-[#CECDD2]'>Silver</p>
                                        <div className='flex_center border border-[#2B2D33] rounded-[4px]  bg-[#121319] mx-auto w-[82px] h-[48px]'>
                                            <img src={Silver} alt="" />
                                            <span className='border border-[#2B2D33] rounded-[4px] bg-[#121319] mx-auto w-[30px] h-[30px]'>3</span>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-[#F79429]'>Bronze</p>
                                        <div className='flex_center border border-[#2B2D33] rounded-[4px]  bg-[#121319] mx-auto w-[82px] h-[48px]'>
                                            <img src={Bronze} alt="" />
                                            <p className='border border-[#2B2D33] rounded-[4px] bg-[#121319] mx-auto w-[30px]  h-[30px]'>1 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' sa w-[308px] h-[127px] border border-[#2B2D33] rounded-[4px]  bg-[#121319] mt-5 mx-auto overflow-y-auto'>



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




                    <div className="h-[462px] w-full mt-5 card_color ">
                        <h1 className="chartname text-[#517B38]">Total (gained & skipped) points</h1>
                        <div className='flex-col items-center justify-center  '>
                            <div className='POINTS flex  mx-auto items-center justify-center gap-5 my-2'>
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
                                <div className='w-[303px] h-[88px] bg-[#121319] rounded-[4px] border border-[#56AD36] flex_center'>
                                    <div className='h-full w-full flex_center flex-col'>
                                        <span className='text-2xl text-[#ED2939]  w-[72px]  h-[37px] border border-[#2B2D33] bg-[#21232A] rounded-[4px] py-1 px-[18px] flex_center'>  2.1</span>
                                        <p className='text-sm text-[#ED2939] my-2 '>Avg skipped points</p>
                                    </div>
                                    <div className='h-full w-full flex_center flex-col'>
                                        <span className='text-base text-[#8F9093] border border-[#2B2D33] bg-[#21232A] rounded-[4px] py-[5px] px-[10px] flex_center'>43</span>
                                        <p className='text-sm text-[#8F9093] my-2'>Total skipped points </p>
                                    </div>
                                </div>
                            </div>


                            <div className='DECISIONS flex justify-center gap-5' >
                                <div className='w-[303px] h-[324px]  rounded-[5px]'>
                                    <h1 className='chartname text-[#4BB21A]'>Win Decision</h1>

                                    <div className="bar_text w-[280px] my-3 m-auto" >
                                        <div className="bar_text_align">
                                            <span className="text-[14]">VFA</span>
                                            <span>95</span>
                                        </div>
                                        <WinLineBar winPercent={95} />
                                    </div>

                                    <div className="bar_text w-[280px] my-3 m-auto" >
                                        <div className="bar_text_align">
                                            <span className="text-[14]">VIN</span>
                                            <span>70</span>
                                        </div>
                                        <WinLineBar winPercent={70} />
                                    </div>

                                    <div className="bar_text w-[280px] my-3 m-auto" >
                                        <div className="bar_text_align">
                                            <span className="text-[14]">VPO</span>
                                            <span>91</span>
                                        </div>
                                        <WinLineBar winPercent={91} />
                                    </div>


                                    <div className="bar_text w-[280px] my-3 m-auto" >
                                        <div className="bar_text_align">
                                            <span className="text-[14]">VPO1</span>
                                            <span>67</span>
                                        </div>
                                        <WinLineBar winPercent={67} />
                                    </div>


                                    <div className="bar_text w-[280px] my-3 m-auto" >
                                        <div className="bar_text_align">
                                            <span className="text-[14]">VSU</span>
                                            <span>67</span>
                                        </div>
                                        <WinLineBar winPercent={67} />
                                    </div>


                                    <div className="bar_text w-[280px] my-3 m-auto" >
                                        <div className="bar_text_align">
                                            <span className="text-[14]">VSU 1</span>
                                            <span>67</span>
                                        </div>
                                        <WinLineBar winPercent={67} />
                                    </div>
                                </div>



                                <div className='w-[303px] h-[324px]  rounded-[5px]'>
                                    <h1 className='chartname text-[#ED2939]'>Lost Decision</h1>

                                    <div className="bar_text w-[280px] my-3 m-auto" >
                                        <div className="bar_text_align">
                                            <span className="text-[14]">VFA</span>
                                            <span>95</span>
                                        </div>
                                        <LostLineBar lostPercent={95} />
                                    </div>

                                    <div className="bar_text w-[280px] my-3 m-auto" >
                                        <div className="bar_text_align">
                                            <span className="text-[14]">VIN</span>
                                            <span>70</span>
                                        </div>
                                        <LostLineBar lostPercent={70} />
                                    </div>

                                    <div className="bar_text w-[280px] my-3 m-auto" >
                                        <div className="bar_text_align">
                                            <span className="text-[14]">VPO</span>
                                            <span>91</span>
                                        </div>
                                        <LostLineBar lostPercent={91} />
                                    </div>


                                    <div className="bar_text w-[280px] my-3 m-auto" >
                                        <div className="bar_text_align">
                                            <span className="text-[14]">VP0 1</span>
                                            <span>67</span>
                                        </div>
                                        <LostLineBar lostPercent={67} />
                                    </div>


                                    <div className="bar_text w-[280px] my-3 m-auto" >
                                        <div className="bar_text_align">
                                            <span className="text-[14]">VSU</span>
                                            <span>67</span>
                                        </div>
                                        <LostLineBar lostPercent={67} />
                                    </div>


                                    <div className="bar_text w-[280px] my-3 m-auto" >
                                        <div className="bar_text_align">
                                            <span className="text-[14]">VSU 1</span>
                                            <span>67</span>
                                        </div>
                                        <LostLineBar lostPercent={67} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RightFrame