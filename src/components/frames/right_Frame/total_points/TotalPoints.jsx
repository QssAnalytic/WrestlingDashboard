import React from 'react'
import Skipped from './skipped/Skipped'
import Gained from './gained/Gained'

const TotalPoints = () => {
    return (
        <section >
            <h1 className="flex justify-center items-center font-rubik text-base font-bold rounded-t p-2 bg-[#1c1d24] text-[#517B38]">Total (gained & skipped) points</h1>
            <div className='POINTS flex  mx-auto items-center justify-center gap-4 my-3 px-5'>
                <Gained />
                <Skipped />
            </div>
        </section>
    )
}

export default TotalPoints