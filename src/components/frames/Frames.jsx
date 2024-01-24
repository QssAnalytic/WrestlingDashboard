import LeftFrame from "./left_Frame/LeftFrame"
import RightFrame from "./right_Frame/RightFrame"



const percent = 2


const Frames = () => {



    return (
        <div className='text-white flex justify-between '>

            <LeftFrame />

            <RightFrame />

        </div>
    )
}

export default Frames