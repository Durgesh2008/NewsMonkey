import React from 'react'
import loading from "./spiner.gif"
const Spiner = () => {
  return (
    <div className='text-center'>
        <img src={loading} alt='Loading'/>
      </div>
  )
}

export default Spiner
