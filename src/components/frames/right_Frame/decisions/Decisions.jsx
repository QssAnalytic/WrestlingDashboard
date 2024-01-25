import React from 'react'
import WinLineBar from './line/WinLineBar'
import LostLineBar from './line/LostLineBar'


const Decisions = () => {

    const WinData = [
        {
            id: 1,
            name: 'VFA',
            percent: 95,
        },
        {
            id: 2,
            name: 'VIN',
            percent: 70,
        },
        {
            id: 3,
            name: 'VPO',
            percent: 91,
        },
        {
            id: 4,
            name: 'VPO1',
            percent: 67,
        },
        {
            id: 5,
            name: 'VSU',
            percent: 67,
        },
        {
            id: 6,
            name: 'VSU1',
            percent: 67,
        },
    ]

    const LostData = [
        {
            id: 1,
            name: 'VFA',
            percent: 95,
        },
        {
            id: 2,
            name: 'VIN',
            percent: 70,
        },
        {
            id: 3,
            name: 'VPO',
            percent: 91,
        },
        {
            id: 4,
            name: 'VPO1',
            percent: 67,
        },
        {
            id: 5,
            name: 'VSU',
            percent: 67,
        },
        {
            id: 6,
            name: 'VSU1',
            percent: 67,
        },
    ]

    return (
        <div className='DECISIONS flex justify-center gap-5 px-5 ' >
            <div className=' rounded font-inter w-full'>
                <h1 className='flex justify-center items-center font-rubik text-base font-bold rounded-t p-2 bg-[#1c1d24] text-[#4BB21A]'>Win Decision</h1>
                {WinData.map((item) => (
                    <div className="flex-col  text-xs font-rubik  w-full  mt-3 items-center justify-center" key={item.id}>
                        <div className="flex w-full justify-between items-center mb-2 m-auto  px-3">
                            <span className="text-xs">{item.name}</span>
                            <span>{item.percent}</span>
                        </div>
                        <div className=' flex items-center justify-center '>

                            <WinLineBar winPercent={item.percent} />
                        </div>
                    </div>
                ))}
            </div>

            <div className=' rounded font-inter w-full'>
                <h1 className='flex justify-center items-center font-rubik text-base font-bold rounded-t p-2 bg-[#1c1d24] text-[#ED2939]'>Lost Decision</h1>

                {LostData.map((item) => (
                    <div className="flex-col  text-xs font-rubik  my-3 m-auto" key={item.id}>
                         <div className="flex w-full justify-between items-center mb-2 m-auto  px-3">
                            <span className="text-xs">{item.name}</span>
                            <span>{item.percent}</span>
                        </div>
                        <div className=' flex items-center justify-center '>
                            <LostLineBar lostPercent={item.percent} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Decisions