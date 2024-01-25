import LineBar from "../bars/line/LineBar"

const SummaryStats = () => {

    const SummaryLineProgressBar = [
        {
            id: 1,
            name: 'Protection zone count',
            percent: 35
        },
        {
            id: 2,
            name: 'Avg protection zone count',
            percent: 57
        },
        {
            id: 3,
            name: 'Turnover success rate',
            percent: 36
        },
        {
            id: 4,
            name: 'Parterre success rate',
            percent: 77

        }
    ]

    return (

        <div className=' bg-[#14151C] rounded bg'>
            <h1 className='flex justify-center items-center font-rubik text-base font-bold rounded-t  bg-[#1c1d24] text-[#a87b41] p-2'>Summary stats</h1>
            <div className="py-2">
                {SummaryLineProgressBar.map((item) => (
                    <div className="flex-col text-sm font-rubik py-[6px] px-5" key={item.id}>
                        <div className="flex justify-between items-center text-xs tracking-wide pb-2">
                            <p>{item.name}</p>
                            <span className="text-sm">{item.percent}</span>
                        </div>
                        <LineBar percent={item.percent} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SummaryStats