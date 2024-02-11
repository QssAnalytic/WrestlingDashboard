//select.jsx

import React from "react";
import { useRef, useEffect } from "react";
import Vector from "/img/Vector.svg";

export default function Select({ id, name, data, value, setValue, filterDialog, setFilterDialog }) {

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterDialog?.[id] && dropdownRef.current && !dropdownRef.current.contains(event.target)) {

        setFilterDialog((prev) => ({ ...prev, [id]: false, }));

      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterDialog?.[id]]);

  const handleToggle = (id) => {
    setFilterDialog((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelect = (value) => {
    handleToggle(id);
    setValue((prev) => ({ ...prev, [id]: value }));
  };

  // A-Z sorting
  const sortedData = data?.sort((a, b) => a.data.localeCompare(b.data));

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#AAADB6] font-customweight leading-5 tracking-wider font-inter">{name}</p>
      <div className="relative text-center cursor-pointer" ref={dropdownRef}>
        <ul className="rounded py-4 px-4 w-[17rem] border border-[#373A45] bg-[#0F1322]" id={id} onClick={(e) => handleToggle(e.currentTarget.id)} >
          <div className="flex text-[#AAADB6] w-full h-full items-center justify-center gap-3">

            <p className="truncate">
              {!value?.[id] ? `Search ${name}` : (id !== 'country' ? sortedData?.map((item) => item.id === value?.[id] ? item.data : '') : value?.[id])}
            </p>

            <img src={Vector} alt="vector" className={`w-4 transform ${filterDialog?.[id] ? "rotate-360" : ""}`} />
          </div>
        </ul>
        {filterDialog?.[id] && sortedData ? (
          <div className="dropdown-options  absolute top-12 right-0 w-full">
            <ul className="z-10 rounded border border-[#373A45] bg-[#0F1322] my-1 text-[#AAADB6] overflow-y-auto h-56 text-sm">
              {sortedData?.map((item, i) => (
                <li
                  key={i}
                  id={id}
                  className=" cursor-pointer hover:bg-[#374677] hover:text-white hover:uppercase p-2 transition-all duration-100"
                  onClick={() =>
                    handleSelect(id !== "country" ? item.id : item.data)
                  }
                >
                  {item.data}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
