import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { TiArrowSortedDown } from "react-icons/ti";

export default function SelectCountry({ name, id, data }) {
  const [open, setOpen] = useState(false);
  const form = useFormContext();

  return (
    <div className="select-country text-[#AAADB6]">
      <div className="country-inner">
        <div className="select-name">
          <p>Country ({name})</p>
        </div>
        <div
          className="select-container relative bg-[#0F1322] rounded flex justify-between border border-[#373A45] px-8 py-[14px] cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}>
          <p className="selected-country">{form.getValues(`${id}`)}</p>
          <button className="open-select">
            <TiArrowSortedDown />
          </button>
          <div
            className={`${
              open ? "opacity-[100] pointer-events-auto" : "pointer-events-none opacity-0"
            } select-dropdown transition-all duration-300 w-full rounded bg-[#0F1322] absolute top-14 left-0 h-36 overflow-y-scroll`}>
            <ul>
              {data?.map((country) => (
                <li
                  key={country.data}
                  className="px-4 py-2 cursor-pointer hover:bg-[#374677]"
                  onClick={() => {
                    form.setValue(`${id}`, country?.data);
                  }}>
                  {country?.data}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
