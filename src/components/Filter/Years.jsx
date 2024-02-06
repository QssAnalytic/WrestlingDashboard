import React from "react";

const Years = ({ id, data, value, setValue, name }) => {
  const handleYear = (year) => {
    setValue((prev) => ({ ...prev, [id]: prev[id]===year ? '' : year }));
  };

  return (
    <div id={id} className="flex flex-col gap-2 w-full">
      <p className="text-[#AAADB6] font-customweight leading-5 tracking-wider font-inter">
        {name}
      </p>

      <ul className="rounded border border-[#373A45] bg-[#0F1322] text-[#CFCFCF] font-inter text-md flex gap-3 items-center px-6 py-2">
        {
          <>
            <li className="p-2">All Years</li>
            {data?.map((item, i) => (
              <li
                key={i}
                className={`text-[#eaeaea] border-transparent p-2 transition-all duration-200 ${value?.[id] === item.data ? 'border-transparent p-2 bg-[#374677] rounded' : 'text-white'} `}
                onClick={() => handleYear(item.data)}
              >
                {item.data}
              </li>
            ))}
          </>
        }
      </ul>
    </div>
  );
};

export default Years;


