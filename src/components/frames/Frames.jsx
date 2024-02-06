import LeftFrame from "./left_Frame/LeftFrame"
import RightFrame from "./right_Frame/RightFrame"

const percent = 2

const Frames = () => {

    return (
        <div className='text-white xl:flex gap-3'>
            <LeftFrame />
            <RightFrame />
        </div>
    )
}

export default Frames