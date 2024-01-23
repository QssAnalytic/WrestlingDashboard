import ProgressBar from "react-customizable-progressbar";

const RightProgressBar = () => {
  return (
    <div >
      <ProgressBar
        className="first-circle"
        radius={70}
        progress={50}
        strokeColor="#F79429"
        strokeWidth={6}
        trackStrokeWidth={6}
        initialAnimationDelay={1000}
        initialAnimation={true}
        trackTransition=".1s ease"
        transition="1s ease"
        trackStrokeColor="#2B2D33"

      >
        <div className="indicator">
          <ProgressBar
            radius={63}
            className="second-circle"
            progress={25}
            strokeWidth={5}
            trackStrokeWidth={8}
            strokeColor="#A96BCE"
            trackStrokeColor="#2B2D33"
            pointerStrokeWidth={0}
            initialAnimationDelay={1000}
            initialAnimation={true}
            trackTransition=".1s ease"
            transition="1s ease"
          >
             <div className="indicator-2">
               <span className='text-[27.256px] text-white '>68%</span>
               <p className='text-[#8F9093] text-xs mt-px'>Win Rate</p>
            </div>
          </ProgressBar>
        </div>
      </ProgressBar>
    </div>
  )
}

export default RightProgressBar