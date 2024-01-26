import { useState, useEffect, useRef, useContext } from 'react';
import Vector from '/img/Vector.svg';
import useSWR from 'swr'
import axios from 'axios'
import { countryContext } from '../../../context/countryContext';

const Country = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { countryTargetValue, setCountryTargetValue } = useContext(countryContext);

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

    const { data, error, isLoading } = useSWR('https://wrestlingbackend-production.up.railway.app/dashboard/filters/countries/', fetcher)

    if (error) return <div className='text-red-500 uppercase'>failed to load!!!</div>
    if (isLoading) return <div className='text-yellow-500 uppercase'>loading...</div>




    const handleSelectCountry = (country_value) => {
        setCountryTargetValue(country_value);
    }
    return (
        <div>
            <p className='text-[#AAADB6] font-customweight leading-5 tracking-wider font-inter'>Country</p>

            <div className='relative text-center uppercase' ref={dropdownRef}>
                <ul className=' w-72 h-12 rounded border border-[#373A45] bg-[#0F1322] mt-5' onClick={handleToggle}>
                    <div className='flex text-[#AAADB6] w-full h-full items-center justify-center gap-3'>
                        <p>{countryTargetValue ? countryTargetValue : "Azerbaijan"}</p>
                        <img src={Vector} alt="" className={`w-4 transform ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                </ul>
                {isOpen && (
                    <div className="dropdown-options absolute top-12 right-0 ">
                        <ul className='z-10 sa  rounded border border-[#373A45] bg-[#0F1322] my-1  text-[#AAADB6] overflow-y-auto h-56'>
                            {data.map((country, id) => (
                                <li onClick={() => { handleSelectCountry(country.data) }} key={id} className='py-px'>{country.data}</li>
                            ))}

                        </ul>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Country