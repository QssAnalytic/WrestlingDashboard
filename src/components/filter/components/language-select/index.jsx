import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelect({ data }) {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  return (
    <>
      <div className="select-language">
        <div className="select-inner text-white flex flex-col gap-1">
          <p className="">Lang</p>
          <div
            className="relative p-2 select-list w-full items-center justify-between gap-3 rounded bg-[#0F1322] text-white flex border border-[rgb(55,58,69)]"
            onClick={() => setOpen((prev) => !prev)}>
            <p className="item">EN</p>
            <button>-</button>
            <ul
              className={` ${
                open ? "block" : "hidden"
              } absolute top-12 left-0 cursor-pointer rounded bg-[#0F1322] w-full border border-[rgb(55,58,69)]`}>
              <>
                {data?.map((item, idx) => {
                  return (
                    <li onClick={() => i18n.changeLanguage(item.code)} className="p-2 hover:bg-[#374677]" key={idx}>
                      {item.name}
                    </li>
                  );
                })}
              </>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
