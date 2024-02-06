import React, { useState, useEffect } from 'react';
import WinLineBar from './line/WinLineBar';
import LostLineBar from './line/LostLineBar';
import useSWR from 'swr';
import { filterEndpoints } from '../../../../services/api/endpoints';
import { getData } from '../../../../services/api/requests';
import { useContext } from 'react';
import { FilterContext } from '../../../../context/FilterContext';

const Decisions = () => {
    const { filterParams } = useContext(FilterContext);
    const [winData, setWinData] = useState([]);
    const [lostData, setLostData] = useState([]);

    const { data: decisions } = useSWR(
        filterParams?.wrestler && filterParams?.years ? filterEndpoints.decisions(filterParams.wrestler, filterParams.years) : null,
        getData
    );

    console.log('decisions', decisions)

    useEffect(() => {
        if (decisions) {
            const winDecisions = decisions.win_decision?.map(decision => ({
                name: decision.decision,
                percent: decision.decision_count
            }));

            const lostDecisions = decisions.lose_decision?.map(decision => ({
                name: decision.decision,
                percent: decision.decision_count
            }));

            setWinData(winDecisions);
            setLostData(lostDecisions);
        }
    }, [decisions]);
  

    return (
        <div className='DECISIONS flex justify-center gap-4 px-5 h-56'>
            <div className=' rounded font-inter  h-full '>
                <h1 className='flex justify-center items-center font-rubik text-base font-bold rounded-t p-2 bg-[#1c1d24] text-[#4BB21A]'>Win Decision</h1>
                {winData?.map((item, i) => (
                    <div className="flex-col  text-xs font-rubik  w-full  mt-3 items-center justify-center px-3" key={i} >
                        <div className="flex w-full justify-between items-center mb-2 m-auto">
                            <span className="text-xs">{(item.name).slice(3)}</span>

                            <span>{item.percent}</span>
                        </div>
                        <div className=' flex items-center justify-center w-full '>
                            <WinLineBar winPercent={item.percent} />
                        </div>
                    </div>
                ))}
            </div>

            <div className=' rounded font-inter'>
                <h1 className='flex justify-center items-center font-rubik text-base font-bold rounded-t p-2 bg-[#1c1d24] text-[#ED2939]'>Lost Decision</h1>

                {lostData?.map((item, i) => (
                    <div className="flex-col  text-xs font-rubik  w-full  mt-3 items-center justify-center px-3" key={i} >
                        <div className="flex w-full justify-between items-center mb-2 m-auto">
                            <span className="text-xs">{(item.name).slice(3)}</span>
                            <span>{item.percent}</span>
                        </div>
                        <div className=' flex items-center justify-center '>
                            <LostLineBar lostPercent={item.percent} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Decisions;
