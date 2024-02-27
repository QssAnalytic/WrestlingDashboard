import { useEffect } from "react";

const Years = ({ id, data, value, setValue, name, defaultYear }) => {
  useEffect(() => {
    if (defaultYear) {
      setValue((prev) => ({ ...prev, [id]: defaultYear }));
    }
  }, [defaultYear, id, setValue]);

  const handleYear = (year) => {
    console.log(`year removing : ${year}`, value?.[id]);
    setValue((prev) => ({
      ...prev,
      [id]: !prev[id]?.includes(year) ? [...prev?.[id], year] : prev?.[id].toSpliced(prev[id].indexOf(year), 1),
    }));
  };

  const handleAllYear = (years) => {
    const allYears = [] 
    years.map((year)=> allYears.push(...Object.values(year)));
    setValue((prev)=>({
      ...prev,
      [id] : prev?.[id].length === data.length ? [] : allYears
    }))

  };

  return (
    <div id={id} className="flex flex-col gap-2 w-full">
      <p className="text-[#AAADB6] font-customweight leading-5 tracking-wider font-inter">{name}</p>

      <ul className="rounded border border-[#373A45] bg-[#0F1322] text-[#CFCFCF] font-inter text-md flex gap-3 items-center px-6">
        {
          <>
            <li
              className={`p-2 ${value?.[id]?.length === data?.length ? "bg-[#374677] rounded cursor-pointer" : ""}`}
              onClick={() => handleAllYear(data)}>
              All Years
            </li>
            {data?.map((item, i) => (
              <li
                key={i}
                className={`text-[#eaeaea] border-transparent p-2 transition-all duration-200 ${
                  value?.[id].includes(item.data) ? "border-transparent p-2 bg-[#374677] rounded" : "text-white"
                } `}
                onClick={() => handleYear(item.data)}>
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
