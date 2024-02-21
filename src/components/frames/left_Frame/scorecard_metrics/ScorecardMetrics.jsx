import LineBar from "../bars/line/LineBar"

const ScorecardMetrics = () => {
    const ScorecardLineProgressBar = [
        {
            id: 1,
            name: 'Takedown score',
            percent: 95
        },
        {
            id: 2,
            name: 'Defense score',
            percent: 65
        },
        {
            id: 3,
            name: 'Offense score',
            percent: 14
        },
        {
            id: 4,
            name: 'Durability score',
            percent: 81
        }
    ]
    return (

        <div className='bg-[#14151C] rounded'>

            <h1 className='flex justify-center items-center font-rubik text-base font-bold rounded-t  bg-[#1c1d24] text-[#a87b41] p-2 '>Scorecard metrics</h1>

            <div className='py-2 '> 

                {ScorecardLineProgressBar.map((item) => (
                    <div className="flex-col text-sm font-rubik py-[6px] px-5" key={item.id}>
                        <div className="flex justify-between items-center text-xs tracking-wide pb-2">
                            <p>{item.name}</p>
                            <span className="text-sm">{item.percent}</span>
                        </div>
                        <LineBar percent={item.percent} />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ScorecardMetrics