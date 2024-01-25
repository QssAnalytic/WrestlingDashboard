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
        <div className='DECISIONS flex justify-center gap-5' >
            <div className=' rounded'>
                <h1 className='flex justify-center items-center font-rubik font-bold rounded-t bg-[#1c1d24]  text-[#4BB21A]'>Win Decision</h1>
                {WinData.map((item) => (
                    <div className="flex-col mt-2 text-[14px] font-rubik  my-3 m-auto" key={item.id}>
                        <div className="flex w-full justify-between items-center mb-2">
                            <span className="text-[14]">{item.name}</span>
                            <span>{item.percent}</span>
                        </div>
                        <WinLineBar winPercent={item.percent} />
                    </div>
                ))}
            </div>

            <div className=' rounded font-inter'>
                <h1 className='flex justify-center items-center font-rubik font-bold rounded-t bg-[#1c1d24]  text-[#ED2939]'>Lost Decision</h1>

                {LostData.map((item) => (
                    <div className="flex-col mt-2 text-[14px] font-rubik  my-3 m-auto" key={item.id}>
                        <div className="flex w-full justify-between items-center mb-2">
                            <span className="text-[14]">{item.name}</span>
                            <span>{item.percent}</span>
                        </div>
                        <LostLineBar lostPercent={item.percent} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Decisions