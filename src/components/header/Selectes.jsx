
import Country from './country/Country';
import Fighter from './fighter/Fighter';
import Years from './year/Years';

const Selectes = () => {


    return (
        <div className=' flex select-none text-base my-3 mt-auto  items-center justify-between  w-full '>

            <Country />
            <Fighter />
            <Years  />
        </div>

    );
};

export default Selectes;
