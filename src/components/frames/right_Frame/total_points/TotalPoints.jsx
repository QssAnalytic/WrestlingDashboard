import React from 'react'
import Skipped from './skipped/Skipped'
import Gained from './gained/Gained'

const TotalPoints = () => {
    return (
        <section >
            <h1 className="chartname text-[#517B38]">Total (gained & skipped) points</h1>
            <div className='POINTS flex  mx-auto items-center justify-center gap-5 my-3'>
                <Gained />
                <Skipped />
            </div>
        </section>
    )
}

export default TotalPoints