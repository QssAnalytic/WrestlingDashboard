import ProgressBar from "react-customizable-progressbar";

const RightProgressBar = ({ weight, level, fights }) => {

  return (
    <div >
      <ProgressBar
        className="first-circle"
        radius={70}
        progress={level || 0}
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
            progress={weight || 0}
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
            <div className="indicator-2 mt-1">
              <span className='text-[27.256px] text-white '>{fights?.win_rate || 0}%</span>
              <p className='text-[#8F9093] text-xs mt-px'>Win Rate</p>
            </div>
          </ProgressBar>
        </div>
      </ProgressBar>
    </div>
  )
}

export default RightProgressBar