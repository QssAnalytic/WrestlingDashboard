import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import useSWR from 'swr';
import { countryContext } from '../../../context/countryContext';

const Years = () => {

    const { fighterTargetValue } = useContext(countryContext);

   

    const fetcher = (url) => axios(url).then((res) => res.data);

    const { data, error, isLoading } = useSWR(
        fighterTargetValue ? `https://wrestlingbackend-production.up.railway.app/dashbord/filters/years/${fighterTargetValue}/` : null, fetcher)

    if (error) return <div className='text-red-500 uppercase'>failed to load!!!</div>
    if (isLoading) return <div className='text-yellow-500 uppercase'>loading...</div>

    return (

        <div>
            <p className='text-[#AAADB6] font-customweight leading-5 tracking-wider font-inter'>Country</p>

            <ul className='h-12  rounded border  border-[#373A45] bg-[#0F1322] text-[#CFCFCF] font-inter text-sm mt-5 flex justify-between items-center px-10' >
                {
                    fighterTargetValue && (
                        <>
                            <button className='pr-2 '>All Years</button>
                            {data.map((item) => (
                                <button className='focus:text-white focus:bg-[#374677] focus:px-2 focus:py-1 focus:rounded focus:border focus:border-[#667091] '>{item.data}</button>
                            ))}
                        </>
                    )
                }
            </ul>
        </div >
    )
}

export default Years