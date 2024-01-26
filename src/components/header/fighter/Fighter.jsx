import { useState, useEffect, useRef } from 'react';
import Vector from '/img/Vector.svg';
import { useContext } from 'react';
import { countryContext } from '../../../context/countryContext';
import useSWR from 'swr';
import axios from 'axios';

const Fighter = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [selectedFighter, setSelectedFighter] = useState('Haji Aliyev');
    const { countryTargetValue, setFighterTargetValue } = useContext(countryContext);


    useEffect(() => {

        const handleClickOutside = (event) => {
            if (dropdownRef.current && dropdownRef.current.contains(event.target) || !isOpen) {
                return;
            }

            setIsOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const fetcher = (url) => axios(url).then((res) => res.data);

    const { data, error, isLoading } = useSWR(
        countryTargetValue ? `https://wrestlingbackend-production.up.railway.app/dashboard/filters/fighters/${countryTargetValue}/` : null,
        fetcher
    )

    if (error) return <div className='text-red-500 uppercase'>failed to load!!!</div>
    if (isLoading) return <div className='text-yellow-500 uppercase'>loading...</div>

    const handleFighterId = (fighter_id, fighter_name) => {
        setFighterTargetValue(fighter_id);
        setSelectedFighter(fighter_name);
    }


    return (
        <div>
            <p className='text-[#AAADB6] font-customweight leading-5 tracking-wider font-inter'>Fighter</p>

            <div className='relative text-center' ref={dropdownRef}>
                <ul className= 'w-72 h-12  rounded border border-[#373A45] bg-[#0F1322] mt-5' onClick={handleToggle}>
                    <div className='flex text-[#AAADB6] w-full h-full items-center justify-center gap-3'>
                        <p>{selectedFighter }</p>
                        <img src={Vector} alt="" className={`w-4 transform ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                </ul>
                {isOpen && (
                    <div className="dropdown-options absolute top-12 right-0 w-72">
                        {
                            data && (
                                <ul className='z-10 sa  rounded border border-[#373A45] bg-[#0F1322] my-1 text-[#AAADB6] overflow-y-auto h-56'>
                                    {
                                        data.map((item) => (
                                            <li className='py-px' onClick={() => { handleFighterId(item.id, item.data) }}>{item.data}</li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </div>
                )}
            </div>
        </div>

    )
}

export default Fighter