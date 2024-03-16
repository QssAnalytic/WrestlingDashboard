import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export default function SelectWrestler({ name, id }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="select-country text-[#AAADB6] w-[13%]">
      <div className="country-inner">
        <div className="select-name">
          <p>{name}</p>
        </div>
        <div
          className="select-container relative bg-[#0F1322] rounded flex justify-between border border-[#373A45] px-8 py-[14px] cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}>
          <p className="selected-country">Haji Aliyev</p>
          <button className="open-select">
            <TiArrowSortedDown />
          </button>
          <div
            className={`${
              open ? "opacity-[100] pointer-events-auto" : "pointer-events-none opacity-0"
            } select-dropdown transition-all duration-300 w-full rounded bg-[#0F1322] absolute top-14 left-0`}>
            <ul>
              <li className="px-4 py-4 cursor-pointer hover:bg-[#374677]">Haji Aliyev</li>
              <li className="px-4 py-4 cursor-pointer hover:bg-[#374677]">Murad Mammadov</li>
              <li className="px-4 py-4 cursor-pointer hover:bg-[#374677]">Ruslan Amirbekov</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
