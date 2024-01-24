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
            <div className='w-[303px] h-[324px]  rounded-[5px]'>
                <h1 className='chartname text-[#4BB21A]'>Win Decision</h1>
                {WinData.map((item) => (
                    <div className="bar_text w-[280px] my-3 m-auto" key={item.id}>
                        <div className="bar_text_align">
                            <span className="text-[14]">{item.name}</span>
                            <span>{item.percent}</span>
                        </div>
                        <WinLineBar winPercent={item.percent} />
                    </div>
                ))}
            </div>

            <div className='w-[303px] h-[324px]  rounded-[5px] font-inter'>
                <h1 className='chartname text-[#ED2939]'>Lost Decision</h1>

                {LostData.map((item) => (
                    <div className="bar_text w-[280px] my-3 m-auto" key={item.id}>
                        <div className="bar_text_align">
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