import CircleBar from './bars/circle'
import LineBar from './bars/line/LineBar'
import LineChart from './charts/LineChart'
import Wrestlier from '/img/wrestlier.svg'
import Vector from '/img/Vector.svg'

const LeftFrame = () => {

 
    const ScorecardLineProgressBar = [
        {
            id: 1,
            name: 'Takedown score',
            percent: 95
        },
        {
            id: 2,
            name: 'Defence score',
            percent: 65
        },
        {
            id: 3,
            name: 'Offence score',
            percent: 14
        },
        {
            id: 4,
            name: 'Durability score',
            percent: 81
        }
    ]

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
        <section className='m-auto'>
            <h1 className='frame_title text-[#ECC254]'>Inside the ring: Tactical Evaluation</h1>
            
            <div className=' w-[690px] h-[791px]  border border-[#ECC254]  rounded-[4px]  flex justify-between items-center  px-5'>

                <div className='flex flex-col gap-y-2'>

                    <div className='w-[267px] h-[199px] card_color'>
                        <h1 className='chartname text-[#a87b41]'>Overal Score</h1>
                        <div className='flex w-[219px] h-[122px] mx-auto  mt-5 justify-between items-center'>
                            <div >
                                <img src={Wrestlier} alt="" className=' border border-[#ecc254] rounded-[4px]' />
                                <h1 className='text-[#E5B352] font-rubik text-[14px] pt-1'>Haji Aliyev</h1>
                            </div>
                            <div className='w-[122px]'>
                                <CircleBar />
                            </div>
                        </div>
                    </div> 

                    <div className='w-[267px] h-[246px] card_color'>
                        <h1 className='chartname text-[#a87b41]'>Scorecard metrics</h1>
                        <div className="w-[240px] mx-auto ">

                            {ScorecardLineProgressBar.map((item) => (
                                <div className="bar_text" key={item.id}>
                                    <div className="bar_text_align">
                                        <p>{item.name}</p>
                                        <span className="text-[14]">{item.percent}</span>
                                    </div>
                                    <LineBar percent={item.percent} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <ul className='select_ul '>
                        <li className="select_list">Offence Stats
                            <img src={Vector} alt="" className="w-4" />
                        </li>
                    </ul>

                    <div className='w-[267px] h-[246px] card_color'>
                        <h1 className='chartname text-[#a87b41]'>Summary stats</h1>
                        <div className="w-[240px] mx-auto ">
                            {SummaryLineProgressBar.map((item) => (
                                <div className="bar_text" key={item.id}>
                                    <div className="bar_text_align">
                                        <p>{item.name}</p>
                                        <span className="text-[14]">{item.percent}</span>
                                    </div>
                                    <LineBar percent={item.percent} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div className='flex flex-col gap-y-3'>

                    <div className='w-[363px] h-[228px] card_color '>
                        <h1 className='chartname text-[#a87b41]'>Overall Score by Years</h1>
                        <div className='flex_center h-full'>
                            <LineChart />
                        </div>
                    </div>

                    <ul className='select_ul'>
                        <li className="select_list">Offence Stats
                            <img src={Vector} alt="" className="w-4" />
                        </li>
                    </ul>

                    <div className='w-[363px] h-[228px] card_color '>
                        <h1 className='chartname text-[#a87b41]'> Scores by Years</h1>
                        <div className='flex_center h-full'>
                            <LineChart />
                        </div>
                    </div>
                    <div className='w-[363px] h-[228px] card_color '>
                        <h1 className='chartname text-[#a87b41]'>Offence  stats by Years</h1>
                        <div className='flex_center h-full'>
                            <LineChart />
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default LeftFrame