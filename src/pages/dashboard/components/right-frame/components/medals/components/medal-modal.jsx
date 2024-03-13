import { IoMdClose } from "react-icons/io";
import gold from "../../../../../../../../public/img/medals/gold.svg";
export default function MedalModal({ open, setOpen }) {
  return (
    <div className="w-full h-[100vh] absolute top-0 left-0 backdrop-blur-sm">
      <div
        className={`transition-all duration-200 rounded ${
          open ? "opacity-[100%] backdrop-blur-lg" : "opacity-0 backdrop-blur-0"
        } absolute  top-[55%] left-[50%] w-[41rem] translate-y-[-50%]`}>
        <div className="modal-head bg-[#1C1D24] flex justify-between p-2">
          <div></div>
          <h3 className="text-[#83D24F] font-medium">Medals</h3>
          <div className="close-modal-btn border rounded border-[#828388] bg-[#fff] bg-opacity-[0.13]">
            <button className="text-[#828388]" onClick={() => setOpen((prev) => !prev)}>
              <IoMdClose size={20} />
            </button>
          </div>
        </div>
        <div className="modal-main bg-[#0B102F] text-white">
          <div className="medal-box flex flex-col justify-center items-center">
            <div className="box-top flex flex-col gap-1">
              <h5 className="text-[#FCC417]">Gold</h5>
              <div className="box-count cursor-pointer flex bg-[#121319] border border-[#fff] border-opacity-[0.16] p-1 rounded">
                <div className="medal-img">
                  <img src={gold} alt="medal" />
                </div>
                <div className="medal-count flex justify-center items-center">
                  <p className="px-[0.32rem] border border-[#21232A] rounded">2</p>
                </div>
              </div>
            </div>
            <div className="box-bottom">
              <ul className="medal-list">
                <li className="medal flex gap-[1.25rem]">
                  <span>1</span>
                  <span>2022</span>
                  <span>Rome,Italy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
