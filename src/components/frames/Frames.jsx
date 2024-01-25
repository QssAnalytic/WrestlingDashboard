import LeftFrame from "./left_Frame/LeftFrame"
import RightFrame from "./right_Frame/RightFrame"

const percent = 2

const Frames = () => {

    return (
        <div className='text-white xl:flex justify-between gap-4'>
            <LeftFrame />

            <RightFrame />
        </div>
    )
}

export default Frames