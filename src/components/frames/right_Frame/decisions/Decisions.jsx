import React from 'react';
import WinLineBar from './line/WinLineBar';
import LostLineBar from './line/LostLineBar';
import useSWR from 'swr';
import { rightFrameEndpoints } from '../../../../services/api/endpoints';
import { getData } from '../../../../services/api/requests';
import { useContext } from 'react';
import { FilterContext } from '../../../../context/FilterContext';

const Decisions = () => {
    const { filterParams } = useContext(FilterContext);

    const { data: decisions } = useSWR( filterParams?.wrestler && filterParams?.years ? rightFrameEndpoints.decisions(filterParams.wrestler, filterParams.years) : null,getData);

    const winData = decisions?.win_decision?.map(decision => ({
        name: decision.decision.slice(3),
        percent: decision.decision_count
    })) || [];

    const lostData = decisions?.lose_decision?.map(decision => ({
        name: decision.decision.slice(3),
        percent: decision.decision_count
    })) || [];

    return (
        <div className='DECISIONS flex justify-center gap-4 px-5 '>
            <div className=' rounded font-inter h-full  w-full'>
                <h1 className='flex justify-center font-rubik text-base font-bold rounded-t p-2 mb-5 bg-[#1c1d24] text-[#4BB21A]'>Win Decision</h1>
                {winData.map((item, i) => (
                    <div className="flex-col text-xs font-rubik" key={i} > 
                        <div className="flex justify-between m-auto w-[300px]  ">
                            <span className="text-xs">{item.name}</span>
                            <span>{item.percent}</span>
                        </div>
                        <div className='flex justify-center my-3'>
                        <WinLineBar winPercent={item.percent} />
                        </div>
                    </div>
                ))}
            </div>

            <div className=' rounded font-inter w-full'>
                <h1 className='fflex justify-center font-rubik text-base font-bold rounded-t p-2 mb-5 bg-[#1c1d24] text-[#ED2939]'>Lost Decision</h1>

                {lostData.map((item, i) => (
                    <div className="flex-col text-xs font-rubik" key={i} >
                        <div className="flex justify-between m-auto w-[300px]">
                            <span className="text-xs">{item.name}</span>
                            <span>{item.percent}</span>
                        </div>
                        <div className='flex justify-center my-3'>
                            <LostLineBar lostPercent={item.percent} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Decisions;


















