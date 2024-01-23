import React from 'react'
import WinLineBar from './WinLineBar'
import LostLineBar from './LostLineBar'

const index = () => {

  const winPercent = 10
  const lostPercent = 90

  return (
    <div className=""> 
      <WinLineBar winPercent={winPercent} />
      <LostLineBar lostPercent={lostPercent} />
    </div>
  )
}

export default index