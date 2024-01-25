import Vector from '/img/Vector.svg'

const OffenceStats = () => {
    return (

        <div>
            <ul className=' flex rounded border py-2 border-[#373A45] bg-[#0F1322] '>
                <li className="flex mx-auto  gap-3 font-rubik font-bold text-base">Offence Stats
                    <img src={Vector} alt="" className="w-4" />
                </li>
            </ul>
        </div>
    )
}

export default OffenceStats