import LeftFrame from "./left_Frame/LeftFrame"
import RightFrame from "./right_Frame/RightFrame"

const percent = 2

const Frames = () => {

    return (
        <div className='text-white   2xl:flex justify-between gap-5 '>

            <LeftFrame />

            <RightFrame />
        </div>
    )
}

export default Frames