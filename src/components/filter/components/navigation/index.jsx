import { FaRegCircle } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const path = useLocation();

  return (
    <div className="mode-container">
      <div className="mode-inner flex flex-col justify-between">
        <div className="mode-head">
          <h3 className="text-[#AAADB6]">Navigation</h3>
        </div>
        <div className="mode-box bg-[#252D4A] text-[#B8C6F4] border border-[#373A45] rounded py-[12px] px-8 relative group cursor-pointer tracking-wide w-60">
          <p className="selected-mode truncate text-center flex justify-between items-center">
            {path.pathname === "/" ? "Dashboard" : "Comparison"}{" "}
            <FaCircle className="text-[#B8C6F4D1] border rounded-[100%]" />
          </p>
          <div className="mode-select-box rounded absolute top-12 left-0 transition-all duration-500 pointer-events-none opacity-0 group-hover:opacity-[100] group-hover:pointer-events-auto w-full">
            <ul className="flex flex-col text-[#B8C6F4] text-center">
              <li>
                <Link
                  to={"/"}
                  className="bg-[#0F1322] px-8 py-2 truncate hover:bg-[#374677] cursor-pointer flex justify-between items-center">
                  Dashboard
                  {path.pathname === "/" ? (
                    <FaCircle className="text-[#B8C6F4D1] border rounded-[100%]" />
                  ) : (
                    <FaRegCircle />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to={"/comparison"}
                  className="bg-[#0F1322] px-8 py-2 truncate hover:bg-[#374677] cursor-pointer flex justify-between items-center">
                  Comparison
                  {path.pathname === "/comparison" ? (
                    <FaCircle className="text-[#B8C6F4D1] border rounded-[100%]" />
                  ) : (
                    <FaRegCircle />
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
